"use client";

import { Input } from "@/components/ui/input";
import { Chip } from "@/components/ui/chip";
import { useTranslations } from "next-intl";
import { ORG_SHORTCUTS, POPULAR_REPOS } from "@/lib/constants";

type TextValues = {
  org: string;
  repo: string;
};

type TextFiltersProps = {
  values: TextValues;
  onChange: (key: keyof TextValues, value: string) => void;
};

export function TextFilters({ values, onChange }: TextFiltersProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap max-md:flex-col">
        <div className="flex flex-col gap-1 flex-1 min-w-40">
          <span className="text-[#8b949e] text-xs font-medium">
            {t("orgLabel")}
          </span>
          <Input
            value={values.org}
            onChange={(e) => onChange("org", e.target.value)}
            placeholder={t("orgPlaceholder")}
            aria-label={t("orgLabel")}
          />
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-40">
          <span className="text-[#8b949e] text-xs font-medium">
            {t("repoLabel")}
          </span>
          <Input
            value={values.repo}
            onChange={(e) => onChange("repo", e.target.value)}
            placeholder={t("repoPlaceholder")}
            aria-label={t("repoLabel")}
          />
        </div>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap max-md:flex-col max-md:items-start">
        <span className="text-[#8b949e] text-xs font-medium">
          {t("orgShortcuts")}
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {ORG_SHORTCUTS.map((shortcut) => (
            <Chip
              key={shortcut.value}
              size="sm"
              active={values.org === shortcut.value}
              onClick={() =>
                onChange(
                  "org",
                  values.org === shortcut.value ? "" : shortcut.value,
                )
              }
            >
              {shortcut.label}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2.5 flex-wrap max-md:flex-col max-md:items-start">
        <span className="text-[#8b949e] text-xs font-medium">
          {t("repoShortcuts")}
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {POPULAR_REPOS.map((repo) => (
            <Chip
              key={repo.value}
              size="sm"
              active={values.repo === repo.value}
              onClick={() =>
                onChange(
                  "repo",
                  values.repo === repo.value ? "" : repo.value,
                )
              }
            >
              {repo.label}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
