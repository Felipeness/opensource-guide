import type { LabelStyle } from "../types";

export function getLabelStyle(hexColor: string): LabelStyle {
  const hex = hexColor || "30363d";
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return {
    background: `rgba(${r},${g},${b},0.2)`,
    color: `#${hex}`,
    borderColor: `rgba(${r},${g},${b},0.4)`,
  };
}
