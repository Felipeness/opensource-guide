import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero";
import { LangToggle } from "@/components/lang-toggle";
import { Footer } from "@/components/footer";
import { ResourcesSection } from "@/features/resources/components/resources-section";
import { TipsSection } from "@/features/tips/components/tips-section";
import { FiltersPanel } from "@/features/search/components/filters-panel";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero langToggle={<LangToggle />} />
      <main className="max-w-[1200px] mx-auto px-5 py-8">
        <Suspense>
          <FiltersPanel />
        </Suspense>
        <ResourcesSection />
        <TipsSection />
      </main>
      <Footer />
    </>
  );
}
