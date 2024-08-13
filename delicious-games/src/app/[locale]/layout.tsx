import type { Metadata } from "next";
import { dir } from "i18next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { titillium } from "./fonts";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Breadcrumbs from "./components/breadcrumbs/breadcrumbs";
import { config } from "@fortawesome/fontawesome-svg-core";
import initTranslations from "../i18n";
import i18nConfig from "../../../i18nconfig";
import TranslationsProvider from "../providers/TranslationsProvider";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Delicious Games",
  description: "Boardgames for all tastes",
};

const i18nNamespaces = ["header", "catalog"];

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={`${titillium.className} min-h-screen flex flex-col bg-slate-50`}
      >
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Header />
          <Breadcrumbs />
          <main className="w-full mx-auto text-zinc-600">{children}</main>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
