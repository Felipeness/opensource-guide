import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-all duration-150 hover:border-[#58a6ff] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}
