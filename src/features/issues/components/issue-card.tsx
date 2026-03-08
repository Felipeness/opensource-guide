"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import type { GitHubIssue, TimeAgoTranslations } from "@/features/search/types";
import { extractRepoFromUrl } from "@/features/search/lib/extract-repo";
import { getLabelStyle } from "@/features/search/lib/label-style";
import { timeAgo } from "@/features/search/lib/time-ago";

type IssueCardProps = {
  issue: GitHubIssue;
};

export function IssueCard({ issue }: IssueCardProps) {
  const t = useTranslations();
  const repo = extractRepoFromUrl(issue.repository_url);

  const timeAgoTranslations: TimeAgoTranslations = {
    year: t("timeAgo.year"),
    years: t("timeAgo.years"),
    month: t("timeAgo.month"),
    months: t("timeAgo.months"),
    week: t("timeAgo.week"),
    weeks: t("timeAgo.weeks"),
    day: t("timeAgo.day"),
    days: t("timeAgo.days"),
    hour: t("timeAgo.hour"),
    hours: t("timeAgo.hours"),
    min: t("timeAgo.min"),
    mins: t("timeAgo.mins"),
    now: t("timeAgo.now"),
  };

  const strippedBody = issue.body
    ? issue.body.replace(/[#*`>\-[\]()!]/g, "").trim()
    : "";
  const bodyPreview = strippedBody.length > 120
    ? strippedBody.substring(0, 120) + "..."
    : strippedBody;

  const avatarUrl = repo.owner
    ? `https://github.com/${repo.owner}.png?size=40`
    : "";

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={repo.owner}
            loading="lazy"
            className="w-5 h-5 rounded"
          />
        )}
        <a
          href={`https://github.com/${repo.full}`}
          target="_blank"
          rel="noopener"
          className="text-[#58a6ff] no-underline font-medium hover:underline"
        >
          {repo.full}
        </a>
        <div className="ml-auto flex gap-2.5 text-[#6e7681] text-xs">
          {issue.reactions && (
            <span className="flex items-center gap-1" title={t("positiveReactions")}>
              &#128077; {issue.reactions["+1"] || 0}
            </span>
          )}
          <span className="flex items-center gap-1" title={t("comments")}>
            &#128172; {issue.comments}
          </span>
        </div>
      </div>

      <div className="text-base font-semibold leading-snug">
        <a
          href={issue.html_url}
          target="_blank"
          rel="noopener"
          className="text-[#e6edf3] no-underline hover:text-[#58a6ff]"
        >
          {issue.title}
        </a>
      </div>

      {bodyPreview && (
        <p className="text-[#6e7681] text-[0.82rem] leading-snug line-clamp-2">
          {bodyPreview}
        </p>
      )}

      <div className="flex gap-1.5 flex-wrap">
        {issue.labels.slice(0, 5).map((label) => (
          <Badge
            key={label.id}
            variant="outline"
            style={getLabelStyle(label.color)}
            className="text-[0.75rem]"
          >
            {label.name}
          </Badge>
        ))}
      </div>

      <div className="flex items-center gap-3 text-[#6e7681] text-xs mt-auto">
        <span>#{issue.number}</span>
        <span>
          {t("opened")} {timeAgo(issue.created_at, timeAgoTranslations)}
        </span>
        {issue.assignee ? (
          <span>&#128100; {t("assigned")}</span>
        ) : (
          <span className="text-[#3fb950]">
            &#9679; {t("available")}
          </span>
        )}
        {issue.pull_request && (
          <span className="text-[#bc8cff]">
            &#128279; {t("linkedPr")}
          </span>
        )}
      </div>
    </Card>
  );
}
