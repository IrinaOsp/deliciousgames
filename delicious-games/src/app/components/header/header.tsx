import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navLinks/navLinks";
import LangSwitch from "./langSwitch/langSwitch";

export default function Header() {
  return (
    <header className="bg-slate-800 w-full z-50 fixed top-0 shadow-[0_5px_30px_-5px_rgba(0,0,0,0.15)]">
      <div className="flex flex-wrap relative container mx-auto justify-start items-center gap-5 h-[140px]">
        <div className="bg-white h-full w-[180px] inline-flex justify-center items-center">
          <Link href="/" className="block">
            <Image
              src="/icons/DGlogo-black-150x150-150x156.png"
              alt="Delicious Games"
              title="Delicious Games"
              width={111}
              height={116}
            />
          </Link>
        </div>
        <nav>
          <NavLinks />
        </nav>
        <LangSwitch />
      </div>
    </header>
  );
}
