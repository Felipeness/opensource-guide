"use client";

import { useTranslations } from "next-intl";
import { FILTER_PRESETS, DEFAULT_FILTERS } from "@/lib/constants";
import type { FilterValues } from "@/lib/constants";

type FilterPresetsProps = {
  onApply: (filters: Partial<FilterValues>) => void;
};

export function FilterPresets({ onApply }: FilterPresetsProps) {
  const t = useTranslations();

  function handlePreset(preset: (typeof FILTER_PRESETS)[number]) {
    onApply({ ...DEFAULT_FILTERS, ...preset.filters });
  }

  return (
    <div className="flex items-center gap-2.5 flex-wrap max-[480px]:flex-col max-[480px]:items-start">
      <span className="text-[#8b949e] text-xs font-medium">
        {t("presetsLabel")}
      </span>
      <div className="flex gap-2 flex-wrap">
        {FILTER_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handlePreset(preset)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#30363d] bg-[#161b22] text-[#e6edf3] text-xs font-medium cursor-pointer transition-all duration-150 hover:border-[#58a6ff] hover:text-[#58a6ff] hover:bg-[#1c2333]"
          >
            <span>{preset.icon}</span>
            <span>{t(`preset_${preset.id}`)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
