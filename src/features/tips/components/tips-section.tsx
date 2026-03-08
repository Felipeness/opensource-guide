import { getTranslations } from "next-intl/server";

const TIPS = [
  { titleKey: "tip1Title", descKey: "tip1Desc" },
  { titleKey: "tip2Title", descKey: "tip2Desc" },
  { titleKey: "tip3Title", descKey: "tip3Desc" },
  { titleKey: "tip4Title", descKey: "tip4Desc" },
  { titleKey: "tip5Title", descKey: "tip5Desc" },
  { titleKey: "tip6Title", descKey: "tip6Desc" },
] as const;

export async function TipsSection() {
  const t = await getTranslations();

  return (
    <section className="py-8 pb-12">
      <h2 className="text-2xl font-bold mb-5">{t("tipsTitle")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {TIPS.map((tip, index) => (
          <div
            key={tip.titleKey}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 pl-14 relative"
          >
            <span className="absolute left-4 top-4 w-7 h-7 bg-[#58a6ff] text-white rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </span>
            <h3 className="text-[0.95rem] mb-1">{t(tip.titleKey)}</h3>
            <p className="text-[#8b949e] text-sm">{t(tip.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
