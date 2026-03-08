"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "pt" ? "en" : "pt";

  function handleToggle() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={handleToggle}
      title={locale === "pt" ? "Switch to English" : "Mudar para Portugues"}
      className="px-3.5 py-1.5 border border-[#30363d] rounded-lg bg-[#21262d] text-[#e6edf3] text-xs font-bold cursor-pointer transition-all duration-150 tracking-wide hover:border-[#58a6ff] hover:text-[#58a6ff]"
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
