"use client";

import { useMemo, useCallback } from "react";
import { useQueryStates, parseAsString, parseAsBoolean } from "nuqs";
import { useTranslations } from "next-intl";
import { useGitHubSearch } from "../hooks/use-github-search";
import type { QueryFilters, SearchError } from "../types";
import { DEFAULT_FILTERS } from "@/lib/constants";
import { SearchBar } from "./search-bar";
import { LanguageChips } from "./language-chips";
import { LabelFilters } from "./label-filters";
import { SelectFilters } from "./select-filters";
import { TextFilters } from "./text-filters";
import { CheckboxFilters } from "./checkbox-filters";
import { ActiveFilterTags } from "./active-filter-tags";
import { ResultsHeader } from "@/features/issues/components/results-header";
import { IssuesGrid } from "@/features/issues/components/issues-grid";
import { LoadingState } from "@/features/issues/components/loading-state";
import { EmptyState } from "@/features/issues/components/empty-state";
import { ErrorState } from "@/features/issues/components/error-state";
import { Button } from "@/components/ui/button";

const filterParsers = {
  search: parseAsString.withDefault(DEFAULT_FILTERS.search),
  language: parseAsString.withDefault(DEFAULT_FILTERS.language),
  label: parseAsString.withDefault(DEFAULT_FILTERS.label),
  stars: parseAsString.withDefault(DEFAULT_FILTERS.stars),
  date: parseAsString.withDefault(DEFAULT_FILTERS.date),
  sort: parseAsString.withDefault(DEFAULT_FILTERS.sort),
  perPage: parseAsString.withDefault(DEFAULT_FILTERS.perPage),
  org: parseAsString.withDefault(DEFAULT_FILTERS.org),
  repo: parseAsString.withDefault(DEFAULT_FILTERS.repo),
  noAssignee: parseAsBoolean.withDefault(DEFAULT_FILTERS.noAssignee),
  noComments: parseAsBoolean.withDefault(DEFAULT_FILTERS.noComments),
  noPr: parseAsBoolean.withDefault(DEFAULT_FILTERS.noPr),
  hasBody: parseAsBoolean.withDefault(DEFAULT_FILTERS.hasBody),
};

function toQueryFilters(filters: {
  search: string;
  language: string;
  label: string;
  stars: string;
  date: string;
  org: string;
  repo: string;
  noAssignee: boolean;
  noComments: boolean;
  noPr: boolean;
  hasBody: boolean;
}): QueryFilters {
  return {
    label: filters.label,
    language: filters.language,
    query: filters.search,
    org: filters.org,
    repo: filters.repo,
    stars: filters.stars,
    dateDays: filters.date,
    noAssignee: filters.noAssignee,
    noComments: filters.noComments,
    noPr: filters.noPr,
    hasBody: filters.hasBody,
  };
}

function errorToMessage(
  error: SearchError,
  t: ReturnType<typeof useTranslations>,
): string {
  switch (error.type) {
    case "rate_limit":
      return t("errorRateLimit");
    case "invalid_query":
      return t("errorInvalidQuery");
    case "network":
      return t("errorConnection");
    case "unexpected":
      return error.message;
  }
}

export function FiltersPanel() {
  const t = useTranslations();
  const [filters, setFilters] = useQueryStates(filterParsers);

  const queryFilters = useMemo(() => toQueryFilters(filters), [filters]);

  const { state, loadMore, retry } = useGitHubSearch({
    filters: queryFilters,
    sort: filters.sort,
    perPage: parseInt(filters.perPage, 10),
  });

  const handleSelectChange = useCallback(
    (key: "stars" | "dateDays" | "sort" | "perPage", value: string) => {
      const mappedKey = key === "dateDays" ? "date" : key;
      setFilters({ [mappedKey]: value });
    },
    [setFilters],
  );

  const handleTextChange = useCallback(
    (key: "org" | "repo", value: string) => {
      setFilters({ [key]: value });
    },
    [setFilters],
  );

  const handleCheckboxChange = useCallback(
    (key: "noAssignee" | "noComments" | "noPr" | "hasBody", value: boolean) => {
      setFilters({ [key]: value });
    },
    [setFilters],
  );

  const handleClear = useCallback(() => {
    setFilters({
      search: DEFAULT_FILTERS.search,
      language: DEFAULT_FILTERS.language,
      label: DEFAULT_FILTERS.label,
      stars: DEFAULT_FILTERS.stars,
      date: DEFAULT_FILTERS.date,
      sort: DEFAULT_FILTERS.sort,
      perPage: DEFAULT_FILTERS.perPage,
      org: DEFAULT_FILTERS.org,
      repo: DEFAULT_FILTERS.repo,
      noAssignee: DEFAULT_FILTERS.noAssignee,
      noComments: DEFAULT_FILTERS.noComments,
      noPr: DEFAULT_FILTERS.noPr,
      hasBody: DEFAULT_FILTERS.hasBody,
    });
  }, [setFilters]);

  const handleRemoveTag = useCallback(
    (key: string) => {
      const resetMap: Record<string, Record<string, string | boolean>> = {
        language: { language: "" },
        label: { label: "" },
        org: { org: "" },
        repo: { repo: "" },
        stars: { stars: "" },
        dateDays: { date: "" },
        noAssignee: { noAssignee: false },
        noComments: { noComments: false },
        noPr: { noPr: false },
        hasBody: { hasBody: false },
        query: { search: "" },
      };
      const update = resetMap[key];
      if (update) {
        setFilters(update);
      }
    },
    [setFilters],
  );

  const activeFilterTagsData = useMemo(
    () => ({
      language: filters.language,
      label: filters.label,
      org: filters.org,
      repo: filters.repo,
      stars: filters.stars,
      dateDays: filters.date,
      noAssignee: filters.noAssignee,
      noComments: filters.noComments,
      noPr: filters.noPr,
      hasBody: filters.hasBody,
      query: filters.search,
    }),
    [filters],
  );

  const selectValues = useMemo(
    () => ({
      stars: filters.stars,
      dateDays: filters.date,
      sort: filters.sort,
      perPage: filters.perPage,
    }),
    [filters.stars, filters.date, filters.sort, filters.perPage],
  );

  const textValues = useMemo(
    () => ({ org: filters.org, repo: filters.repo }),
    [filters.org, filters.repo],
  );

  const checkboxValues = useMemo(
    () => ({
      noAssignee: filters.noAssignee,
      noComments: filters.noComments,
      noPr: filters.noPr,
      hasBody: filters.hasBody,
    }),
    [filters.noAssignee, filters.noComments, filters.noPr, filters.hasBody],
  );

  const hasMore = state.issues.length < state.totalCount;

  return (
    <>
      <div className="flex flex-col gap-5">
        <SearchBar
          value={filters.search}
          onChange={(v) => setFilters({ search: v })}
          onSubmit={() => {}}
        />

        <LanguageChips
          active={filters.language}
          onChange={(v) => setFilters({ language: v })}
        />

        <LabelFilters
          activeLabel={filters.label}
          onChange={(v) => setFilters({ label: v })}
        />

        <SelectFilters values={selectValues} onChange={handleSelectChange} />

        <TextFilters values={textValues} onChange={handleTextChange} />

        <CheckboxFilters
          values={checkboxValues}
          onChange={handleCheckboxChange}
          onClear={handleClear}
        />

        <ActiveFilterTags
          filters={activeFilterTagsData}
          onRemove={handleRemoveTag}
        />
      </div>

      <ResultsHeader
        totalCount={state.totalCount}
        rateLimit={state.rateLimit}
      />

      {state.loading && state.issues.length === 0 && <LoadingState />}

      {state.error && (
        <ErrorState
          message={errorToMessage(state.error, t)}
          onRetry={retry}
        />
      )}

      {!state.loading && !state.error && state.issues.length === 0 && (
        <EmptyState />
      )}

      {state.issues.length > 0 && (
        <>
          <IssuesGrid issues={state.issues} />
          {hasMore && (
            <div className="text-center py-4">
              <Button
                variant="secondary"
                onClick={loadMore}
                disabled={state.loading}
              >
                {state.loading ? t("loading") : t("loadMore")}
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
