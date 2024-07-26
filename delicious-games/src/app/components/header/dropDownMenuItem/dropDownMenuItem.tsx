import { useState } from "react";
import Link from "next/link";
import { StrapiImage } from "../../UI/StrapiImage/StrapiImage";
import { Routes } from "@/data/data";

export default function DropDownMenuItem({
  title,
  link,
  img,
}: {
  title: string;
  link: string;
  img: string;
}) {
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <>
      <li
        key={title}
        onMouseEnter={() => setIsImageVisible(true)}
        onMouseLeave={() => setIsImageVisible(false)}
        className="p-2.5 text-zinc-800 hover:bg-pink-600"
      >
        <Link
          href={`${Routes.CATALOGUE}/${link}`}
          className="min-w-min font-normal capitalize"
        >
          {title.toLowerCase()}
        </Link>
      </li>
      {isImageVisible && (
        <StrapiImage
          src={img}
          alt={title}
          className="absolute top-0 left-full max-h-full w-auto size-[432px]"
          width={305}
          height={305}
          onMouseEnter={() => setIsImageVisible(true)}
        />
      )}
    </>
  );
}
