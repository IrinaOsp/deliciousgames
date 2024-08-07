import Link from "next/link";
import { StrapiImage } from "../UI/StrapiImage/StrapiImage";
import { Routes } from "@/data/data";
import { Product } from "@/types/types";

export default function GameBox({ el }: { el: Product }) {
  return (
    <Link
      href={`${Routes.CATALOGUE}/${el.path}`}
      key={el.title}
      className="group"
    >
      <div className="w-max max-w-full">
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
      </div>
    </Link>
  );
}
