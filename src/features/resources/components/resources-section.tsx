import { getTranslations } from "next-intl/server";

const RESOURCES = [
  {
    href: "https://opensource.guide/how-to-contribute/",
    titleKey: "resource1Title",
    descKey: "resource1Desc",
  },
  {
    href: "https://github.com/firstcontributions/first-contributions",
    titleKey: "resource2Title",
    descKey: "resource2Desc",
  },
  {
    href: "https://goodfirstissue.dev",
    titleKey: "resource3Title",
    descKey: "resource3Desc",
  },
  {
    href: "https://up-for-grabs.net",
    titleKey: "resource4Title",
    descKey: "resource4Desc",
  },
  {
    href: "https://www.codetriage.com",
    titleKey: "resource5Title",
    descKey: "resource5Desc",
  },
  {
    href: "https://ovio.org",
    titleKey: "resource6Title",
    descKey: "resource6Desc",
  },
] as const;

export async function ResourcesSection() {
  const t = await getTranslations();

  return (
    <section className="py-12 border-t border-[#30363d]">
      <h2 className="text-2xl font-bold mb-5">{t("resourcesTitle")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {RESOURCES.map((resource) => (
          <a
            key={resource.titleKey}
            href={resource.href}
            target="_blank"
            rel="noopener"
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 no-underline transition-all duration-150 hover:border-[#58a6ff] hover:shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
          >
            <h3 className="text-[#58a6ff] text-[0.95rem] mb-1">
              {t(resource.titleKey)}
            </h3>
            <p className="text-[#8b949e] text-sm">{t(resource.descKey)}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
