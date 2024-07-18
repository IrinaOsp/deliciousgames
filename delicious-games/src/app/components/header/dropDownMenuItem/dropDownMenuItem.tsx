import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        className="w-64 p-2.5 text-zinc-800 hover:bg-pink-600"
      >
        <Link href={link} className="w-72">
          {title}
        </Link>
      </li>
      {isImageVisible && (
        <Image
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
