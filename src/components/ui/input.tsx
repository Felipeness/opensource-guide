import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-4 py-2.5 bg-[#161b22] border border-[#30363d] rounded-lg text-[#e6edf3] text-sm outline-none transition-colors duration-150 focus:border-[#58a6ff] placeholder:text-[#6e7681] ${className}`}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
