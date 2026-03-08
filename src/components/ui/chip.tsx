import type { ReactNode } from "react";

type ChipSize = "sm" | "default";

type ChipProps = {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  size?: ChipSize;
  className?: string;
};

const sizeStyles: Record<ChipSize, string> = {
  default: "px-3.5 py-1.5 text-xs",
  sm: "px-2.5 py-1 text-[0.75rem]",
};

export function Chip({
  active = false,
  onClick,
  children,
  size = "default",
  className = "",
}: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border cursor-pointer transition-all duration-150 ${sizeStyles[size]} ${
        active
          ? "bg-[#58a6ff] border-[#58a6ff] text-white"
          : "bg-transparent border-[#30363d] text-[#8b949e] hover:border-[#58a6ff] hover:text-[#58a6ff]"
      } ${className}`}
    >
      {children}
    </button>
  );
}
