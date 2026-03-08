import type { GitHubIssue } from "@/features/search/types";
import { IssueCard } from "./issue-card";

type IssuesGridProps = {
  issues: readonly GitHubIssue[];
};

export function IssuesGrid({ issues }: IssuesGridProps) {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-6"
      aria-label="Issues list"
    >
      {issues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </section>
  );
}
