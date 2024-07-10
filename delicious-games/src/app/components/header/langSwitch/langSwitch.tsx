"use client";

import Image from "next/image";
import { useState } from "react";

export default function LangSwitch() {
  const [language, setLanguage] = useState<"en" | "cz">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "cz" : "en");
  };

  return (
    <div className="h-8 lg:auto flex mr-2 order-first lg:order-none w-full lg:w-auto">
      <button
        onClick={toggleLanguage}
        className="inline-flex self-center justify-center items-center w-18 mx-auto lg:ml-1 text-xs text-slate-300 hover:text-slate-100 uppercase"
      >
        <Image
          src={language === "en" ? "/icons/EN.png" : "/icons/CZ.png"}
          alt="Language Flag"
          width="16"
          height="11"
          className="mr-1"
        />
        {language === "en" ? "English" : "Čeština"}
      </button>
    </div>
  );
}
