import type { RepoInfo } from "../types";

const REPO_PATTERN = /repos\/([^/]+)\/([^/]+)/;

const EMPTY_REPO: RepoInfo = { owner: "", repo: "", full: "" };

export function extractRepoFromUrl(apiUrl: string): RepoInfo {
  const match = apiUrl.match(REPO_PATTERN);
  if (!match) return EMPTY_REPO;

  const owner = match[1];
  const repo = match[2];
  return { owner, repo, full: `${owner}/${repo}` };
}
