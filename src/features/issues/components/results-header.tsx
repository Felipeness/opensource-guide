"use client";

import { useTranslations } from "next-intl";
import type { RateLimit } from "@/features/search/types";

type ResultsHeaderProps = {
  totalCount: number;
  rateLimit: RateLimit | null;
};

export function ResultsHeader({ totalCount, rateLimit }: ResultsHeaderProps) {
  const t = useTranslations();

  const rateLimitText = rateLimit
    ? formatRateLimit(rateLimit, t)
    : "";

  const isWarning = rateLimit ? rateLimit.remaining <= 2 : false;

  return (
    <div className="flex justify-between items-center py-3 border-b border-[#30363d] min-h-11 max-md:flex-col max-md:items-start max-md:gap-1">
      <p className="text-[#8b949e] text-sm">
        {totalCount.toLocaleString()} {t("issuesFound")}
      </p>
      {rateLimitText && (
        <span
          className={`text-xs ${isWarning ? "text-[#d29922]" : "text-[#6e7681]"}`}
        >
          {rateLimitText}
        </span>
      )}
    </div>
  );
}

function formatRateLimit(
  rl: RateLimit,
  t: ReturnType<typeof useTranslations>,
): string {
  const resetIn = Math.max(
    0,
    Math.ceil((rl.resetAt.getTime() - Date.now()) / 1000),
  );
  const minutes = Math.floor(resetIn / 60);
  const seconds = resetIn % 60;
  return `API: ${rl.remaining}/${rl.limit} ${t("rateLimitRemaining")} (${t("rateLimitReset")} ${minutes}m${seconds}s)`;
}
