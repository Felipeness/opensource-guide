import type { CSSProperties, ReactNode } from "react";

type BadgeVariant = "default" | "secondary" | "outline";

type BadgeProps = {
  variant?: BadgeVariant;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
  onRemove?: () => void;
};

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-[rgba(88,166,255,0.1)] text-[#58a6ff] border border-[rgba(88,166,255,0.3)]",
  secondary:
    "bg-[#21262d] text-[#8b949e] border border-[#30363d]",
  outline:
    "bg-transparent text-[#8b949e] border border-[#30363d]",
};

export function Badge({
  variant = "default",
  style,
  className = "",
  children,
  onRemove,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-2xl text-xs font-medium ${variantStyles[variant]} ${className}`}
      style={style}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="bg-transparent border-none text-current cursor-pointer text-sm leading-none p-0 ml-0.5 hover:text-[#f85149]"
        >
          &times;
        </button>
      )}
    </span>
  );
}
