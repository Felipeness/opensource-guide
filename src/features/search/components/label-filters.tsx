"use client";

import { Chip } from "@/components/ui/chip";
import { useTranslations } from "next-intl";
import {
  LABELS_BEGINNER,
  LABELS_INTERMEDIATE,
  LABELS_ADVANCED,
  LABELS_WORK_TYPE,
  LABELS_AREA,
} from "@/lib/constants";

type LabelFiltersProps = {
  activeLabel: string;
  onChange: (label: string) => void;
};

type LabelOption = { readonly value: string; readonly label: string };

type LabelCategoryProps = {
  labels: readonly LabelOption[];
  activeLabel: string;
  onChange: (label: string) => void;
};

function LabelCategory({ labels, activeLabel, onChange }: LabelCategoryProps) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {labels.map((item) => (
        <Chip
          key={item.value}
          active={activeLabel === item.value}
          onClick={() =>
            onChange(activeLabel === item.value ? "" : item.value)
          }
        >
          {item.label}
        </Chip>
      ))}
    </div>
  );
}

type LevelBadgeVariant = "beginner" | "intermediate" | "advanced";

const levelBadgeStyles: Record<LevelBadgeVariant, string> = {
  beginner:
    "bg-[rgba(63,185,80,0.15)] text-[#3fb950] border border-[rgba(63,185,80,0.3)]",
  intermediate:
    "bg-[rgba(210,153,34,0.15)] text-[#d29922] border border-[rgba(210,153,34,0.3)]",
  advanced:
    "bg-[rgba(248,81,73,0.15)] text-[#f85149] border border-[rgba(248,81,73,0.3)]",
};

function LevelBadge({
  variant,
  children,
}: {
  variant: LevelBadgeVariant;
  children: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase min-w-[120px] shrink-0 ${levelBadgeStyles[variant]}`}
    >
      {children}
    </span>
  );
}

export function LabelFilters({ activeLabel, onChange }: LabelFiltersProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-2.5 bg-[#161b22] border border-[#30363d] rounded-xl p-4">
      <div className="flex items-start gap-2.5 flex-wrap">
        <LevelBadge variant="beginner">{t("levelBeginner")}</LevelBadge>
        <LabelCategory
          labels={LABELS_BEGINNER}
          activeLabel={activeLabel}
          onChange={onChange}
        />
      </div>

      <div className="flex items-start gap-2.5 flex-wrap pt-2.5 border-t border-[#30363d]">
        <LevelBadge variant="intermediate">
          {t("levelIntermediate")}
        </LevelBadge>
        <LabelCategory
          labels={LABELS_INTERMEDIATE}
          activeLabel={activeLabel}
          onChange={onChange}
        />
      </div>

      <div className="flex items-start gap-2.5 flex-wrap pt-2.5 border-t border-[#30363d]">
        <LevelBadge variant="advanced">{t("levelAdvanced")}</LevelBadge>
        <LabelCategory
          labels={LABELS_ADVANCED}
          activeLabel={activeLabel}
          onChange={onChange}
        />
      </div>

      <div className="flex items-start gap-2.5 flex-wrap pt-2.5 border-t border-[#30363d]">
        <span className="text-[#8b949e] text-xs font-medium min-w-[120px] pt-1 shrink-0">
          {t("workTypeLabel")}
        </span>
        <LabelCategory
          labels={LABELS_WORK_TYPE}
          activeLabel={activeLabel}
          onChange={onChange}
        />
      </div>

      <div className="flex items-start gap-2.5 flex-wrap pt-2.5 border-t border-[#30363d]">
        <span className="text-[#8b949e] text-xs font-medium min-w-[120px] pt-1 shrink-0">
          {t("areaLabel")}
        </span>
        <LabelCategory
          labels={LABELS_AREA}
          activeLabel={activeLabel}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
