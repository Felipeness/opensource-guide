"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

type FilterTag = {
  readonly key: string;
  readonly text: string;
};

type ActiveFilterTagsProps = {
  filters: {
    language: string;
    label: string;
    org: string;
    repo: string;
    stars: string;
    dateDays: string;
    noAssignee: boolean;
    noComments: boolean;
    noPr: boolean;
    hasBody: boolean;
    query: string;
  };
  onRemove: (key: string) => void;
};

export function ActiveFilterTags({ filters, onRemove }: ActiveFilterTagsProps) {
  const t = useTranslations();

  const tags: FilterTag[] = [];

  if (filters.language) {
    tags.push({
      key: "language",
      text: `${t("filterLanguage")}: ${filters.language}`,
    });
  }
  if (filters.label) {
    tags.push({ key: "label", text: `${t("filterLabel")}: ${filters.label}` });
  }
  if (filters.org) {
    tags.push({ key: "org", text: `${t("filterOrg")}: ${filters.org}` });
  }
  if (filters.repo) {
    tags.push({ key: "repo", text: `${t("filterRepo")}: ${filters.repo}` });
  }
  if (filters.stars) {
    tags.push({
      key: "stars",
      text: `${t("filterStars")}: ${filters.stars}+`,
    });
  }
  if (filters.dateDays) {
    tags.push({
      key: "dateDays",
      text: `${t("filterLast")} ${filters.dateDays} ${t("filterDays")}`,
    });
  }
  if (filters.noAssignee) {
    tags.push({ key: "noAssignee", text: t("noAssignee") });
  }
  if (filters.noComments) {
    tags.push({ key: "noComments", text: t("filterNoComments") });
  }
  if (filters.noPr) {
    tags.push({ key: "noPr", text: t("filterNoPr") });
  }
  if (filters.hasBody) {
    tags.push({ key: "hasBody", text: t("filterHasBody") });
  }
  if (filters.query) {
    tags.push({
      key: "query",
      text: `${t("filterSearch")}: "${filters.query}"`,
    });
  }

  if (tags.length === 0) return null;

  return (
    <div className="flex gap-1.5 flex-wrap">
      {tags.map((tag) => (
        <Badge key={tag.key} onRemove={() => onRemove(tag.key)}>
          {tag.text}
        </Badge>
      ))}
    </div>
  );
}
