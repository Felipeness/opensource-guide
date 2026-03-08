import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Open Source Guide - Find Good First Issues"
      : "Open Source Guide - Encontre Good First Issues",
    description: isEn
      ? "Find beginner-friendly issues in open source projects. Filter by language, popularity and find your first contribution."
      : "Encontre issues para iniciantes em projetos open source. Filtre por linguagem, popularidade e encontre sua primeira contribuição.",
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pt" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NuqsAdapter>{children}</NuqsAdapter>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
