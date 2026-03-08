"use client";

import { useTranslations } from "next-intl";

export function LoadingState() {
  const t = useTranslations();

  return (
    <div className="text-center py-12 text-[#8b949e]">
      <div className="w-8 h-8 border-3 border-[#30363d] border-t-[#58a6ff] rounded-full animate-spin mx-auto mb-3" />
      <p>{t("loading")}</p>
    </div>
  );
}
