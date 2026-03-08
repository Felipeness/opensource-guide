import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

type HeroProps = {
  langToggle: ReactNode;
};

export async function Hero({ langToggle }: HeroProps) {
  const t = await getTranslations();

  return (
    <header className="py-15 pb-10 text-center border-b border-[#30363d] bg-gradient-to-b from-[#0d1117] to-[#161b22]">
      <div className="max-w-[1200px] mx-auto px-5 relative">
        <div className="absolute top-0 right-5">{langToggle}</div>
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-br from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="text-xl text-[#e6edf3] mt-2 font-medium">
          {t("subtitle")}
        </p>
        <p className="text-[#8b949e] mt-3 max-w-[600px] mx-auto text-[0.95rem]">
          {t.rich("description", {
            strong: (chunks) => <strong className="text-[#e6edf3]">{chunks}</strong>,
          })}
        </p>
      </div>
    </header>
  );
}
