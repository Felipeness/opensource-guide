import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "default";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[#58a6ff] text-white hover:bg-[#79c0ff] border-transparent",
  secondary:
    "bg-[#21262d] text-[#e6edf3] border border-[#30363d] hover:border-[#58a6ff] hover:text-[#58a6ff]",
  ghost:
    "bg-transparent text-[#6e7681] border border-[#30363d] hover:text-[#f85149] hover:border-[#f85149]",
  outline:
    "bg-transparent text-[#e6edf3] border border-[#30363d] hover:border-[#58a6ff] hover:text-[#58a6ff]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-1.5 text-xs",
};

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
