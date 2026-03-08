"use client";

import { useTranslations } from "next-intl";

export function EmptyState() {
  const t = useTranslations();

  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-3">&#128269;</div>
      <h2 className="text-[#e6edf3] mb-2">{t("emptyTitle")}</h2>
      <p className="text-[#8b949e]">{t("emptyText")}</p>
    </div>
  );
}
