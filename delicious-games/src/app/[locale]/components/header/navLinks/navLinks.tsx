"use client";

/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeartCircleCheck,
  faPenToSquare,
  faPhone,
  faTimes,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { MENU_LINKS } from "@/data/data";
import CatalogLinks from "../catalogLinks/catalogLinks";
import PlusButton from "../../UI/plusButton/plusButton";
import DropDownMenu from "../dropDownMenu/dropDownMenu";
import { useTranslation } from "react-i18next";

const MENU_ICONS: IconDefinition[] = [
  faBars,
  faHeartCircleCheck,
  faCartShopping,
  faPhone,
  faPenToSquare,
];

export default function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const mobileMenu = useRef<null | HTMLDivElement>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", closeOpenedMenu);
    window.addEventListener("touchstart", closeOpenedMenu);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("mousedown", closeOpenedMenu);
      window.addEventListener("touchstart", closeOpenedMenu);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeOpenedMenu = (e: MouseEvent | TouchEvent) => {
    if (
      isMenuOpen &&
      mobileMenu.current &&
      !mobileMenu.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isMenuOpen) setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="lg:hidden text-right">
        <button
          onClick={toggleMenu}
          className="text-slate-300 hover:text-slate-100 focus:outline-none ml-auto mr-3.5"
        >
          <FontAwesomeIcon icon={faBars} className="size-6" />
        </button>
      </div>

      <div
        ref={mobileMenu}
        className={`${
          isMenuOpen ? "block translate-x-0" : "translate-x-[-100%]"
        } fixed lg:static lg:translate-x-0 z-50 max-w-full h-full top-0 left-0 w-[85%] md:w-[40%]
        transform transition-all duration-350 ease-in-out`}
      >
        <div className="lg:hidden flex items-center justify-between text-slate-300 bg-cyan-800 text-lg p-3">
          <span>MENU</span>
          <FontAwesomeIcon
            icon={faTimes}
            className="size-6"
            onClick={toggleMenu}
          />
        </div>

        <ul
          className={`max-lg:overflow-y-auto max-lg:overflow-x-clip p-3 list-none text-nowrap flex flex-col items-start lg:flex-row lg:items-center text-slate-300 uppercase text-base
          h-full bg-gradient-to-br max-lg:from-[#29323c] max-lg:to-[#485563] max-lg:shadow-[0_15px_90px_-10px_rgba(0,0,0,0.2)]
          lg:w-max`}
        >
          {MENU_LINKS.map(({ page, link }, ind) =>
            ind === 0 ? (
              <li
                key={page}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${
                  isMenuOpen && "w-full justify-between"
                } relative flex flex-wrap items-center mr-4 px-2 py-[10px] hover:text-slate-100 font-bold text-lg`}
              >
                <Link
                  href={link}
                  className={`${
                    isMenuOpen && "p-2.5"
                  } inline-flex items-center`}
                >
                  <FontAwesomeIcon
                    icon={MENU_ICONS[ind]}
                    className="w-5 inline mr-2"
                  />
                  <span className="pr-4 border-r-[1px] border-dotted">
                    {t(link.slice(1))}
                  </span>
                </Link>
                {isMenuOpen && (
                  <PlusButton
                    state={isCatalogOpen}
                    dispatch={setIsCatalogOpen}
                  />
                )}
                {isMenuOpen && isCatalogOpen && <CatalogLinks />}
                {isDropdownVisible && (
                  <DropDownMenu
                    setDropDownMenuVisibility={setDropdownVisible}
                  />
                )}
              </li>
            ) : (
              <li
                key={page}
                className="lg:lg:ml-5 p-2 hover:text-slate-100 group"
              >
                <FontAwesomeIcon
                  icon={MENU_ICONS[ind]}
                  className="w-4 inline mr-1 group-hover:text-pink-500"
                />
                <Link
                  href={link}
                  className="hover:underline hover:decoration-pink-500 underline-offset-2"
                >
                  {t(link.slice(1))}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
