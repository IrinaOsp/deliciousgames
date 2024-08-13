"use client";

import { createContext } from "react";
import { usePathname } from "next/navigation";
import AsidePanel from "./components/aside/asidePanel";

export const SearchContext = createContext({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div
      className={`flex mx-auto ${
        pathname.endsWith("/blog") ? "max-w-7xl" : "max-w-[1000px]"
      }`}
    >
      <SearchContext.Provider value={{}}>
        <div className="md:w-[calc(100%-240px)] max-w-full">{children}</div>
        <AsidePanel />
      </SearchContext.Provider>
    </div>
  );
}
