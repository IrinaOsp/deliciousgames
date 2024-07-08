/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Titillium_Web } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons/faHeartCircleCheck";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function NavLinks() {
  return (
    <ul
      className={`${titillium.variable} list-none flex items-center text-slate-300 font-titillium uppercase text-base`}
    >
      <li className="flex items-center mr-4 hover:text-slate-100 font-bold text-lg">
        <Link href="/catalog" className="inline-flex items-center">
          <FontAwesomeIcon icon={faBars} className="w-5 inline mr-2" />
          <span className="pr-4 border-r-[1px] border-dotted">Our Games</span>
        </Link>
      </li>
      <li className="ml-5 hover:text-slate-100 group">
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
      <li className="ml-5 hover:text-slate-100 group">
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
      <li className="ml-5 hover:text-slate-100 group">
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
      <li className="ml-5 hover:text-slate-100 group">
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
  );
}
