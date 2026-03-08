"use client";

import { Chip } from "@/components/ui/chip";
import { LANGUAGES } from "@/lib/constants";
import { useTranslations } from "next-intl";

type LanguageChipsProps = {
  active: string;
  onChange: (language: string) => void;
};

export function LanguageChips({ active, onChange }: LanguageChipsProps) {
  const t = useTranslations();

  return (
    <div className="flex items-center gap-2.5 flex-wrap max-[480px]:flex-col max-[480px]:items-start">
      <span className="text-[#8b949e] text-xs font-medium">
        {t("languageLabel")}
      </span>
      <div className="flex gap-1.5 flex-wrap">
        {LANGUAGES.map((lang) => (
          <Chip
            key={lang.value}
            active={active === lang.value}
            onClick={() => onChange(lang.value)}
          >
            {lang.value === "" ? t("allLangs") : lang.label}
          </Chip>
        ))}
      </div>
    </div>
  );
}
