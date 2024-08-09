"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../../../../../i18nconfig";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [language, setLanguage] = useState<string>(currentLocale);
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const handleLangChange = (lang: "en" | "cs") => {
    console.log(lang);
    setLanguage(lang);
    const newLocale = lang;

    // set cookie
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  const toggleDropDownVisibility = (isVisible?: boolean) => {
    setDropDownVisible(
      typeof isVisible === "boolean" ? isVisible : !isDropDownVisible
    );
  };

  return (
    <div
      onClick={() => toggleDropDownVisibility()}
      onMouseEnter={() => toggleDropDownVisibility(true)}
      onMouseLeave={() => toggleDropDownVisibility(false)}
      className="relative h-[30px] lg:h-9 lg:auto flex mr-2 order-first lg:order-none w-full lg:w-auto"
    >
      <button className="inline-flex self-center justify-center items-center w-max mx-auto lg:ml-1 text-xs text-slate-300 hover:text-slate-100 uppercase">
        <Image
          src={language === "en" ? "/icons/EN.png" : "/icons/CZ.png"}
          alt="Language Flag"
          width="16"
          height="11"
          className="mr-1"
        />
        {language === "en" ? "English" : "Čeština"}
        <FontAwesomeIcon icon={faCaretDown} className="text-xs ml-1" />
      </button>
      <div
        className={`${
          isDropDownVisible ? "block" : "hidden"
        } absolute top-7 lg:top-8 left-1/2 max-md:-translate-x-1/2 md:top-5 md:-left-1/2 w-18 p-[5px] text-lg bg-white rounded-[3px] shadow-lg`}
      >
        <ul className="flex flex-col">
          <li
            onClick={() => handleLangChange("en")}
            className="flex items-center gap-1.5 w-max p-2.5 cursor-pointer hover:bg-pink-600"
          >
            <span className="">
              <Image
                src="/icons/EN.png"
                alt="Language Flag"
                width="16"
                height="11"
                className="mr-1"
              />
            </span>
            <span>English</span>
          </li>
          <li
            onClick={() => handleLangChange("cs")}
            className="flex items-center gap-1.5 w-max p-2.5 cursor-pointer hover:bg-pink-600"
          >
            <span>
              <Image
                src="/icons/CZ.png"
                alt="Language Flag"
                width="16"
                height="11"
                className="mr-1"
              />
            </span>
            <span>Čeština</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
