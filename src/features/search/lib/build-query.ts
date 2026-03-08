import type { QueryFilters } from "../types";

export function buildSearchQuery(filters: QueryFilters): string {
  const parts: string[] = [];

  if (filters.label) {
    parts.push(`label:"${filters.label}"`);
  }

  parts.push("is:open is:issue");

  const repo = filters.repo.trim();
  const org = filters.org.trim();

  if (repo) {
    parts.push(`repo:${repo}`);
  } else if (org) {
    parts.push(`org:${org}`);
  }

  if (filters.language) {
    parts.push(`language:${filters.language}`);
  }

  const query = filters.query.trim();
  if (query) {
    parts.push(query);
  }

  if (filters.noAssignee) {
    parts.push("no:assignee");
  }

  if (filters.noComments) {
    parts.push("comments:0");
  }

  if (filters.noPr) {
    parts.push("-linked:pr");
  }

  if (filters.stars) {
    parts.push(`stars:>${filters.stars}`);
  }

  if (filters.dateDays) {
    const daysAgo = new Date(
      Date.now() - parseInt(filters.dateDays, 10) * 24 * 60 * 60 * 1000,
    );
    const dateStr = daysAgo.toISOString().split("T")[0];
    parts.push(`created:>${dateStr}`);
  }

  return parts.join(" ");
}
