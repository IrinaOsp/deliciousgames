"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons/faHeartCircleCheck";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

export default function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          className={`p-3 list-none text-nowrap flex flex-col items-start lg:flex-row lg:items-center text-slate-300 uppercase text-base
          h-full lg:bg-none bg-gradient-to-br from-[#29323c] to-[#485563] shadow-[0_15px_90px_-10px_rgba(0,0,0,0.2)]
          `}
        >
          <li className="flex items-center mr-4 px-2 py-[10px] hover:text-slate-100 font-bold text-lg">
            <Link href="/catalog" className="inline-flex items-center">
              <FontAwesomeIcon icon={faBars} className="w-5 inline mr-2" />
              <span className="pr-4 border-r-[1px] border-dotted">
                Our Games
              </span>
            </Link>
          </li>
          <li className="lg:lg:ml-5 p-2 hover:text-slate-100 group">
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              className="w-4 inline mr-1 group-hover:text-pink-500"
            />
            <Link
              href="/about-us"
              className="hover:underline hover:decoration-pink-500 underline-offset-2"
            >
              About Us
            </Link>
          </li>
          <li className="lg:lg:ml-5 p-2 hover:text-slate-100 group">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="w-4 inline mr-1 group-hover:text-pink-500"
            />
            <Link
              href="/retailers"
              className="hover:underline hover:decoration-pink-500 underline-offset-2"
            >
              {" "}
              Sellers
            </Link>
          </li>
          <li className="lg:lg:ml-5 p-2 hover:text-slate-100 group">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-4 inline mr-1 group-hover:text-pink-500"
            />
            <Link
              href="/contact"
              className="hover:underline hover:decoration-pink-500 underline-offset-2"
            >
              {" "}
              Contact
            </Link>
          </li>
          <li className="lg:lg:ml-5 p-2 hover:text-slate-100 group">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="w-4 inline mr-1 group-hover:text-pink-500"
            />
            <Link
              href="/blog"
              className="hover:underline hover:decoration-pink-500 underline-offset-2"
            >
              Author's blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
