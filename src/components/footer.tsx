import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-[#30363d] py-6 text-center text-[#8b949e] text-sm">
      <div className="max-w-[1200px] mx-auto px-5">
        <p>
          <span>{t("footerText")} </span>
          <a
            href="https://github.com/Felipeness/opensource-guide"
            target="_blank"
            rel="noopener"
            className="text-[#58a6ff] no-underline hover:underline"
          >
            {t("footerContribute")}
          </a>
        </p>
        <p className="mt-1 text-xs text-[#6e7681]">
          <span>{t("footerApi")} </span>
          <a
            href="https://docs.github.com/en/rest/search"
            target="_blank"
            rel="noopener"
            className="text-[#58a6ff] no-underline hover:underline"
          >
            GitHub Search API
          </a>
          . <span>{t("footerLimit")}</span>
        </p>
      </div>
    </footer>
  );
}
