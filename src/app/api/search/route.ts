import { NextRequest, NextResponse } from "next/server";

const GITHUB_SEARCH_URL = "https://api.github.com/search/issues";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q");
  const sort = searchParams.get("sort") ?? "updated";
  const order = searchParams.get("order") ?? "desc";
  const perPage = searchParams.get("per_page") ?? "20";
  const page = searchParams.get("page") ?? "1";

  if (!q) {
    return NextResponse.json({ error: "Missing q parameter" }, { status: 400 });
  }

  const params = new URLSearchParams({ q, sort, order, per_page: perPage, page });
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const response = await fetch(`${GITHUB_SEARCH_URL}?${params}`, { headers });

  const data: unknown = await response.json();

  const rateLimitHeaders = new Headers();
  const remaining = response.headers.get("X-RateLimit-Remaining");
  const limit = response.headers.get("X-RateLimit-Limit");
  const reset = response.headers.get("X-RateLimit-Reset");

  if (remaining) rateLimitHeaders.set("X-RateLimit-Remaining", remaining);
  if (limit) rateLimitHeaders.set("X-RateLimit-Limit", limit);
  if (reset) rateLimitHeaders.set("X-RateLimit-Reset", reset);

  return NextResponse.json(data, {
    status: response.status,
    headers: rateLimitHeaders,
  });
}
