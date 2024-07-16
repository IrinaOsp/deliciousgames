import type { Metadata } from "next";
import "./globals.css";
import { titillium } from "./fonts";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Delicious Games",
  description: "Boardgames for all tastes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titillium.className} pt-[140px] min-h-screen flex flex-col bg-slate-50`}
      >
        <Header />
        <main className="w-full mx-auto text-zinc-600">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
