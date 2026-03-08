type ApiUrlParams = {
  readonly query: string;
  readonly sort: string;
  readonly perPage: number;
  readonly page: number;
};

export function buildApiUrl({ query, sort, perPage, page }: ApiUrlParams): string {
  const params = new URLSearchParams({
    q: query,
    sort,
    order: "desc",
    per_page: String(perPage),
    page: String(page),
  });

  return `/api/search?${params.toString()}`;
}
