"use client";

import { CheckboxField } from "@/components/ui/checkbox-field";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type CheckboxValues = {
  noAssignee: boolean;
  noComments: boolean;
  noPr: boolean;
  hasBody: boolean;
};

type CheckboxFiltersProps = {
  values: CheckboxValues;
  onChange: (key: keyof CheckboxValues, value: boolean) => void;
  onClear: () => void;
};

export function CheckboxFilters({
  values,
  onChange,
  onClear,
}: CheckboxFiltersProps) {
  const t = useTranslations();

  return (
    <div className="flex items-center gap-4 flex-wrap max-md:flex-col max-md:items-start">
      <CheckboxField
        label={t("noAssignee")}
        checked={values.noAssignee}
        onChange={(v) => onChange("noAssignee", v)}
      />
      <CheckboxField
        label={t("noComments")}
        checked={values.noComments}
        onChange={(v) => onChange("noComments", v)}
      />
      <CheckboxField
        label={t("noPr")}
        checked={values.noPr}
        onChange={(v) => onChange("noPr", v)}
      />
      <CheckboxField
        label={t("hasBody")}
        checked={values.hasBody}
        onChange={(v) => onChange("hasBody", v)}
      />
      <Button variant="ghost" size="sm" onClick={onClear} className="ml-auto">
        {t("clearFilters")}
      </Button>
    </div>
  );
}
