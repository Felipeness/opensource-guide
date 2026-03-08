const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.github.com/search/issues";

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

  return `${API_BASE}?${params.toString()}`;
}
