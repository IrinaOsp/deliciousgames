import { FOOTER_MENU_LINKS, SocialNetworksLinks } from "@/data/data";
import Link from "next/link";
import { redHat } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-screen bg-zinc-100 mt-auto mb-0">
      <div className="flex flex-wrap gap-5 sm:flex-nowrap container mx-0 pt-[30px] px-5 pb-[10px] lg:mx-auto justify-between items-start lg:min-w-max lg:max-w-7xl lg:gap-5 ">
        {FOOTER_MENU_LINKS.map(({ section, links }) => (
          <div key={section} className="mb-5">
            <h3
              className={`${redHat.variable} uppercase font-bold text-base mb-4 font-redHat text-zinc-600
          after:block after:w-[100px] after:h-[1px] after:bg-pink-600 after:mt-[10px]`}
            >
              {section}
            </h3>
            <ul>
              {links.map(({ page, link }) => (
                <li key={link} className="capitalize hover:text-pink-600">
                  <Link href={link}>{page}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex gap-[10px]">
          <Link
            href={SocialNetworksLinks.FACEBOOK}
            className="flex justify-center items-center bg-sky-800 size-10 rounded-full text-xl hover:bg-pink-600"
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ color: "white" }} />
          </Link>
          <Link
            href={SocialNetworksLinks.TWITTER}
            className="flex justify-center items-center bg-sky-800 size-10 rounded-full text-xl hover:bg-pink-600"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
          </Link>
          <Link
            href={SocialNetworksLinks.INSTAGRAM}
            className="flex justify-center items-center bg-sky-800 size-10 rounded-full text-xl hover:bg-pink-600"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
          </Link>
        </div>
      </div>
      <div className="w-full bg-pink-600">
        <div className="flex justify-between items-center container p-[10px] lg:mx-auto text-white text-sm">
          <p>
            © 2018-2020 Kateřina Suchá - Delicious Games, All rights reserved.
          </p>
          <p>Developed by artbox </p>
        </div>
      </div>
    </footer>
  );
}
