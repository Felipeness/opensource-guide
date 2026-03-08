"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import type {
  QueryFilters,
  RateLimit,
  SearchError,
  Result,
  GitHubIssue,
} from "../types";
import { ok, err } from "../types";
import { parseSearchResponse } from "../lib/parse-issues";
import { buildSearchQuery } from "../lib/build-query";
import { buildApiUrl } from "../lib/build-api-url";

const DEBOUNCE_MS = 500;

type SearchState = {
  readonly loading: boolean;
  readonly issues: readonly GitHubIssue[];
  readonly error: SearchError | null;
  readonly totalCount: number;
  readonly page: number;
  readonly rateLimit: RateLimit | null;
};

type SearchAction =
  | { readonly type: "FETCH_START" }
  | { readonly type: "FETCH_RESET" }
  | {
      readonly type: "FETCH_SUCCESS";
      readonly issues: readonly GitHubIssue[];
      readonly totalCount: number;
      readonly append: boolean;
    }
  | { readonly type: "FETCH_ERROR"; readonly error: SearchError }
  | { readonly type: "SET_RATE_LIMIT"; readonly rateLimit: RateLimit }
  | { readonly type: "LOAD_MORE" };

const initialState: SearchState = {
  loading: false,
  issues: [],
  error: null,
  totalCount: 0,
  page: 1,
  rateLimit: null,
};

function searchReducer(state: SearchState, action: SearchAction): SearchState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_RESET":
      return { ...state, issues: [], page: 1, totalCount: 0, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        issues: action.append
          ? [...state.issues, ...action.issues]
          : action.issues,
        totalCount: action.totalCount,
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.error };
    case "SET_RATE_LIMIT":
      return { ...state, rateLimit: action.rateLimit };
    case "LOAD_MORE":
      return { ...state, page: state.page + 1 };
  }
}

type UseGitHubSearchParams = {
  readonly filters: QueryFilters;
  readonly sort: string;
  readonly perPage: number;
};

type UseGitHubSearchReturn = {
  readonly state: SearchState;
  readonly loadMore: () => void;
  readonly retry: () => void;
};

function parseRateLimit(headers: Headers): RateLimit | null {
  const remaining = headers.get("X-RateLimit-Remaining");
  const limit = headers.get("X-RateLimit-Limit");
  const reset = headers.get("X-RateLimit-Reset");

  if (remaining === null || limit === null || reset === null) return null;

  return {
    remaining: parseInt(remaining, 10),
    limit: parseInt(limit, 10),
    resetAt: new Date(parseInt(reset, 10) * 1000),
  };
}

function classifyHttpError(
  status: number,
  statusText: string,
  resetAt: Date | null,
): SearchError {
  if (status === 403) {
    return { type: "rate_limit", resetAt: resetAt ?? new Date(Date.now() + 60_000) };
  }
  if (status === 422) {
    return { type: "invalid_query", message: "Invalid search query" };
  }
  return { type: "unexpected", message: `HTTP ${status}: ${statusText}` };
}

async function fetchGitHubIssues(
  url: string,
  signal: AbortSignal,
): Promise<
  Result<
    { readonly issues: readonly GitHubIssue[]; readonly totalCount: number; readonly rateLimit: RateLimit | null },
    SearchError
  >
> {
  let response: Response;

  try {
    response = await fetch(url, {
      headers: { Accept: "application/vnd.github.v3+json" },
      signal,
    });
  } catch {
    if (signal.aborted) {
      return err({ type: "network", message: "Request aborted" });
    }
    return err({ type: "network", message: "Connection error" });
  }

  const rateLimit = parseRateLimit(response.headers);

  if (!response.ok) {
    return err(
      classifyHttpError(response.status, response.statusText, rateLimit?.resetAt ?? null),
    );
  }

  const json: unknown = await response.json();
  const parsed = parseSearchResponse(json);

  if (!parsed.ok) {
    return err({ type: "unexpected", message: parsed.error });
  }

  return ok({
    issues: parsed.data.items,
    totalCount: parsed.data.totalCount,
    rateLimit,
  });
}

export function useGitHubSearch({
  filters,
  sort,
  perPage,
}: UseGitHubSearchParams): UseGitHubSearchReturn {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLoadMoreRef = useRef(false);

  const executeSearch = useCallback(
    (page: number, append: boolean) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      const query = buildSearchQuery(filters);
      const url = buildApiUrl({ query, sort, perPage, page });

      if (!append) {
        dispatch({ type: "FETCH_RESET" });
      }
      dispatch({ type: "FETCH_START" });

      fetchGitHubIssues(url, controller.signal).then((result) => {
        if (controller.signal.aborted) return;

        if (!result.ok) {
          if (result.error.type === "network" && result.error.message === "Request aborted") {
            return;
          }
          dispatch({ type: "FETCH_ERROR", error: result.error });
          return;
        }

        const { issues, totalCount, rateLimit } = result.data;

        if (rateLimit) {
          dispatch({ type: "SET_RATE_LIMIT", rateLimit });
        }

        dispatch({ type: "FETCH_SUCCESS", issues, totalCount, append });
      });
    },
    [filters, sort, perPage],
  );

  // Track previous filters to detect text-based changes for debouncing
  const prevFiltersRef = useRef(filters);

  useEffect(() => {
    const prev = prevFiltersRef.current;
    prevFiltersRef.current = filters;

    const textChanged =
      prev.query !== filters.query ||
      prev.org !== filters.org ||
      prev.repo !== filters.repo;

    const nonTextChanged =
      prev.label !== filters.label ||
      prev.language !== filters.language ||
      prev.stars !== filters.stars ||
      prev.dateDays !== filters.dateDays ||
      prev.noAssignee !== filters.noAssignee ||
      prev.noComments !== filters.noComments ||
      prev.noPr !== filters.noPr;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }

    // If a non-text filter changed, fire immediately regardless
    if (nonTextChanged) {
      executeSearch(1, false);
      return;
    }

    // If only text filters changed, debounce
    if (textChanged) {
      debounceRef.current = setTimeout(() => {
        executeSearch(1, false);
      }, DEBOUNCE_MS);
      return;
    }

    // Initial mount (prev === filters on first render via ref initialization)
    if (prev === filters) {
      executeSearch(1, false);
    }

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [filters, executeSearch]);

  // Handle load more (page increments)
  useEffect(() => {
    if (isLoadMoreRef.current && state.page > 1) {
      isLoadMoreRef.current = false;
      executeSearch(state.page, true);
    }
  }, [state.page, executeSearch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const loadMore = useCallback(() => {
    if (state.loading) return;
    isLoadMoreRef.current = true;
    dispatch({ type: "LOAD_MORE" });
  }, [state.loading]);

  const retry = useCallback(() => {
    executeSearch(1, false);
  }, [executeSearch]);

  return { state, loadMore, retry };
}
