import { FOOTER_MENU_LINKS, SocialNetworksLinks } from "@/data/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PageHeading from "../UI/pageHeading/pageHeading";
import { getDictionary } from "@/dictionaries";

export default async function Footer({ locale }: { locale: string }) {
  const dict = await getDictionary(locale, "footer");

  return (
    <footer className="w-full bg-zinc-100 mt-auto mb-0">
      <div className="flex flex-wrap gap-5 sm:flex-nowrap container mx-0 pt-[30px] px-5 pb-[10px] lg:mx-auto justify-between items-start lg:min-w-max lg:max-w-7xl lg:gap-5 ">
        {FOOTER_MENU_LINKS.map(({ section, links }) => (
          <div key={section} className="mb-5">
            <PageHeading
              title={dict[section]}
              headingLvl={3}
              styles={{ fontSize: "16px" }}
            />
            <ul>
              {links.map(({ page, link }) => (
                <li key={link} className="capitalize hover:text-pink-600">
                  <Link href={`/${link}`}>{dict[page]}</Link>
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
        <div className="flex flex-wrap gap-5 justify-between items-center container p-[10px] max-w-7xl mx-auto text-white text-sm">
          <p>
            © 2018-2020 Kateřina Suchá - Delicious Games, All rights reserved.
          </p>
          <p className="text-right">Developed by artbox </p>
        </div>
      </div>
    </footer>
  );
}
