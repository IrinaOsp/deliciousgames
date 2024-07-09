import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navLinks/navLinks";
import LangSwitch from "./langSwitch/langSwitch";

export default function Header() {
  return (
    <header className="bg-slate-800 w-full z-50 fixed top-0 shadow-[0_5px_30px_-5px_rgba(0,0,0,0.15)]">
      <div className="flex flex-wrap lg:flex-nowrap relative container mx-0 lg:mx-auto justify-start items-center min-w-full lg:min-w-max lg:max-w-7xl lg:gap-5 h-[85px] lg:h-[140px]">
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
