import { z } from "zod";
import { type Result, type GitHubIssue, ok, err } from "../types";

export const GitHubLabelSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.string(),
  description: z.string().nullable(),
});

export const GitHubIssueSchema = z.object({
  id: z.number(),
  number: z.number(),
  title: z.string(),
  html_url: z.string(),
  state: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  comments: z.number(),
  body: z.string().nullable(),
  labels: z.array(GitHubLabelSchema),
  assignee: z
    .object({
      login: z.string(),
      avatar_url: z.string(),
    })
    .nullable(),
  user: z.object({
    login: z.string(),
    avatar_url: z.string(),
    html_url: z.string(),
  }),
  repository_url: z.string(),
  pull_request: z
    .object({
      url: z.string(),
      html_url: z.string(),
    })
    .optional(),
  reactions: z.object({
    total_count: z.number(),
    "+1": z.number(),
    "-1": z.number(),
    laugh: z.number(),
    hooray: z.number(),
    confused: z.number(),
    heart: z.number(),
    rocket: z.number(),
    eyes: z.number(),
  }),
});

export const GitHubSearchResponseSchema = z.object({
  total_count: z.number(),
  incomplete_results: z.boolean(),
  items: z.array(GitHubIssueSchema),
});

export type ParsedResponse = {
  readonly totalCount: number;
  readonly incompleteResults: boolean;
  readonly items: readonly GitHubIssue[];
};

export function parseSearchResponse(data: unknown): Result<ParsedResponse> {
  const result = GitHubSearchResponseSchema.safeParse(data);

  if (!result.success) {
    return err(`Invalid GitHub API response: ${result.error.message}`);
  }

  return ok({
    totalCount: result.data.total_count,
    incompleteResults: result.data.incomplete_results,
    items: result.data.items,
  });
}
