"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

type ErrorStateProps = {
  message: string;
  onRetry: () => void;
};

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  const t = useTranslations();

  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-3">&#9888;</div>
      <h2 className="text-[#e6edf3] mb-2">{t("errorTitle")}</h2>
      <p className="text-[#8b949e] mb-4">{message}</p>
      <Button onClick={onRetry}>{t("errorRetry")}</Button>
    </div>
  );
}
