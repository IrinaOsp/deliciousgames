import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navLinks/navLinks";
import LangSwitch from "./langSwitch/langSwitch";

export default function Header() {
  return (
    <header className="bg-[#333335] w-full z-50 fixed top-0">
      <div className="flex flex-wrap relative container mx-auto justify-between items-center">
        <div className="bg-white h-full">
          <Link href="/">
            <Image
              src="/icons/DGlogo-black-150x150-150x156.png"
              alt="Delicious Games"
              title="Delicious Games"
              width={180}
              height={140}
            />
          </Link>
        </div>
        <nav className="space-x-2 sm:space-x-4 ml-8 flex items-center justify-center">
          <NavLinks />
        </nav>
        <LangSwitch />
      </div>
    </header>
  );
}
