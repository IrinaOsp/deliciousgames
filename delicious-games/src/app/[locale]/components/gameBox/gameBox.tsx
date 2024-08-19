import Link from "next/link";
import { StrapiImage } from "../UI/StrapiImage/StrapiImage";
import { Routes } from "@/data/data";
import { Product } from "@/types/types";
import Image from "next/image";

export default function GameBox({ el }: { el: Product }) {
  return (
    <Link
      href={`/${Routes.CATALOGUE}/${el.path}`}
      key={el.title}
      className="group"
    >
      <div className="w-max max-w-full relative">
        <StrapiImage
          src={el.img}
          alt={el.title}
          className="w-full md:max-w-80 group-hover:scale-110 transition-all"
          width={303}
          height={303}
        />
        <p className="text-center uppercase text-[17px] font-bold group-hover:text-pink-600">
          {el.title}
        </p>
        {el.gameTag && (
          <div
            className={`flex items-center absolute top-3 right-0 w-max font-bold leading-3 text-white rounded-full p-2.5 ${
              el.gameTag.toLowerCase() === "new" ||
              el.gameTag.toLowerCase() === "novinka"
                ? "bg-green-500"
                : "bg-pink-600 px-5"
            }`}
          >
            {(el.gameTag.toLowerCase() === "new" ||
              el.gameTag.toLowerCase() === "novinka") && (
              <span className="block size-3.5  mr-1">
                <Image src="/icons/tag.svg" alt="new" width={14} height={14} />
              </span>
            )}
            <span className="block uppercase text-xs">{el.gameTag}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
