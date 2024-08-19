import { useState } from "react";
import Link from "next/link";
import PlusButton from "../../UI/plusButton/plusButton";
import { StrapiImage } from "../../UI/StrapiImage/StrapiImage";

export default function CatalogLink({
  title,
  link,
  img,
}: {
  title: string;
  link: string;
  img: string;
}) {
  const [isItemOpened, setIsItemOpened] = useState(false);

  return (
    <li
      key={title}
      className="w-full flex flex-wrap justify-between py-1 text-slate-300 hover:text-slate-100"
    >
      <Link
        href={"/catalog/" + link}
        className="cursor-pointer block pr-2 w-full max-w-[calc(100%-20px)] uppercase overflow-x-hidden text-ellipsis text-[13px]"
      >
        {title}
      </Link>
      <PlusButton state={isItemOpened} dispatch={setIsItemOpened} />
      {isItemOpened && (
        <StrapiImage
          src={img}
          alt={title}
          className="w-full"
          width={305}
          height={305}
        />
      )}
    </li>
  );
}
