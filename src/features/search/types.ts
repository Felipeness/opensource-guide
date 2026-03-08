export type FilterState = {
  readonly search: string;
  readonly language: string;
  readonly label: string;
  readonly stars: string;
  readonly date: string;
  readonly sort: string;
  readonly perPage: string;
  readonly org: string;
  readonly repo: string;
  readonly noAssignee: boolean;
  readonly noComments: boolean;
  readonly noPr: boolean;
  readonly hasBody: boolean;
};

/** @deprecated Use FilterState instead */
export type QueryFilters = {
  readonly label: string;
  readonly language: string;
  readonly query: string;
  readonly org: string;
  readonly repo: string;
  readonly stars: string;
  readonly dateDays: string;
  readonly noAssignee: boolean;
  readonly noComments: boolean;
  readonly noPr: boolean;
  readonly hasBody: boolean;
};

export type TimeAgoTranslations = {
  readonly year: string;
  readonly years: string;
  readonly month: string;
  readonly months: string;
  readonly week: string;
  readonly weeks: string;
  readonly day: string;
  readonly days: string;
  readonly hour: string;
  readonly hours: string;
  readonly min: string;
  readonly mins: string;
  readonly now: string;
};

export type RepoInfo = {
  readonly owner: string;
  readonly repo: string;
  readonly full: string;
};

export type LabelStyle = {
  readonly background: string;
  readonly color: string;
  readonly borderColor: string;
};

export type GitHubLabel = {
  readonly id: number;
  readonly name: string;
  readonly color: string;
  readonly description: string | null;
};

export type GitHubIssue = {
  readonly id: number;
  readonly number: number;
  readonly title: string;
  readonly html_url: string;
  readonly state: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly comments: number;
  readonly body: string | null;
  readonly labels: readonly GitHubLabel[];
  readonly assignee: {
    readonly login: string;
    readonly avatar_url: string;
  } | null;
  readonly user: {
    readonly login: string;
    readonly avatar_url: string;
    readonly html_url: string;
  };
  readonly repository_url: string;
  readonly pull_request?: {
    readonly url: string;
    readonly html_url: string;
  };
  readonly reactions: {
    readonly total_count: number;
    readonly "+1": number;
    readonly "-1": number;
    readonly laugh: number;
    readonly hooray: number;
    readonly confused: number;
    readonly heart: number;
    readonly rocket: number;
    readonly eyes: number;
  };
};

export type GitHubSearchResponse = {
  readonly total_count: number;
  readonly incomplete_results: boolean;
  readonly items: readonly GitHubIssue[];
};

export type RateLimit = {
  readonly remaining: number;
  readonly limit: number;
  readonly resetAt: Date;
};

export type SearchError =
  | { readonly type: "rate_limit"; readonly resetAt: Date }
  | { readonly type: "invalid_query"; readonly message: string }
  | { readonly type: "network"; readonly message: string }
  | { readonly type: "unexpected"; readonly message: string };

export type Result<T, E = string> =
  | { readonly ok: true; readonly data: T }
  | { readonly ok: false; readonly error: E };

export const ok = <T>(data: T): Result<T, never> => ({ ok: true, data });

export const err = <E>(error: E): Result<never, E> => ({ ok: false, error });
