"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavLinks from "./navLinks/navLinks";
import LangSwitch from "./langSwitch/langSwitch";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = (): void => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stickyHeaderStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: isScrolled ? "rgb(44, 54, 64)" : "transparent",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <header
      style={stickyHeaderStyle}
      className={`bg-transparent w-full z-50 fixed top-0 ${
        isScrolled ? "shadow-[0_5px_30px_-5px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <div className="bg-slate-800 flex flex-wrap lg:flex-nowrap relative container mx-0 lg:mx-auto justify-start items-center min-w-full lg:min-w-max lg:max-w-7xl lg:gap-5 h-[85px] lg:h-[140px]">
        <div className="bg-white mt-auto mb-0 size-12 lg:h-full lg:w-[180px] inline-flex justify-center items-center">
          <Link href="/" className="block">
            <Image
              src="/icons/DGlogo-black-150x150-150x156.png"
              alt="Delicious Games"
              title="Delicious Games"
              width={111}
              height={116}
              className="lg:w-28 lg:h-32 size-6"
            />
          </Link>
        </div>
        <nav className="mr-auto flex-1">
          <NavLinks />
        </nav>
        <LangSwitch />
      </div>
    </header>
  );
}
