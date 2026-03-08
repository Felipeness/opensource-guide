"use client";

import { SelectField } from "@/components/ui/select-field";
import { useTranslations } from "next-intl";
import {
  STARS_OPTIONS,
  DATE_OPTIONS,
  SORT_OPTIONS,
  PER_PAGE_OPTIONS,
} from "@/lib/constants";

type SelectValues = {
  stars: string;
  dateDays: string;
  sort: string;
  perPage: string;
};

type SelectFiltersProps = {
  values: SelectValues;
  onChange: (key: keyof SelectValues, value: string) => void;
};

export function SelectFilters({ values, onChange }: SelectFiltersProps) {
  const t = useTranslations();

  const starsOptions = STARS_OPTIONS.map((opt) => ({
    value: opt.value,
    label: opt.value === "" ? t(opt.label) : opt.label,
  }));

  const dateOptions = DATE_OPTIONS.map((opt) => ({
    value: opt.value,
    label: t(opt.label),
  }));

  const sortOptions = SORT_OPTIONS.map((opt) => ({
    value: opt.value,
    label: t(opt.label),
  }));

  const perPageOptions = PER_PAGE_OPTIONS.map((opt) => ({
    value: opt.value,
    label: opt.label,
  }));

  return (
    <div className="flex gap-4 flex-wrap max-md:flex-col">
      <SelectField
        label={t("starsLabel")}
        options={starsOptions}
        value={values.stars}
        onChange={(v) => onChange("stars", v)}
      />
      <SelectField
        label={t("dateLabel")}
        options={dateOptions}
        value={values.dateDays}
        onChange={(v) => onChange("dateDays", v)}
      />
      <SelectField
        label={t("sortLabel")}
        options={sortOptions}
        value={values.sort}
        onChange={(v) => onChange("sort", v)}
      />
      <SelectField
        label={t("perPageLabel")}
        options={perPageOptions}
        value={values.perPage}
        onChange={(v) => onChange("perPage", v)}
      />
    </div>
  );
}
