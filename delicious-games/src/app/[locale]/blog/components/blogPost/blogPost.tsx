import Image from "next/image";
import Link from "next/link";
import { BlogPostType } from "@/types/types";
import { trimText } from "@/utils/utils";

export default function BlogPost({
  post,
  locale,
}: {
  post: BlogPostType;
  locale: "en" | "cs";
}) {
  const { title, path, date, images, text } = post;

  return (
    <div className="flex flex-col text-center">
      <div className="relative h-full max-h-[300px] overflow-hidden">
        <Link href={`blog/${path}`}>
          <span className="block absolute top-0 left-0 z-10 w-min m-1 bg-pink-600 text-white text-xs text-wrap py-1 px-2.5">
            {date}
          </span>
          <Image
            src={images[0].path}
            alt={images[0].name || title[locale]}
            width={500}
            height={300}
            className="max-h-[284px] h-full w-auto object-cover hover:transition hover:scale-110"
          />
        </Link>
      </div>
      <div className="py-2.5">
        <Link
          href={`blog/${path}`}
          className="text-sky-900 hover:text-pink-600 text-base font-bold"
        >
          {title[locale]}
        </Link>
      </div>
      <p className="max-md:hidden mb-2.5">
        {text[locale][0] &&
          trimText(text[locale][0], 200)
            .replace(/\<[^>]*\>/g, "")
            .replace("/n", "")}
      </p>
      <div className="grow flex items-end">
        <Link
          href={`blog/${path}`}
          className="block h-max p-3 mb-2.5 text-white w-max mx-auto bg-zinc-500 hover:bg-pink-600 uppercase"
        >
          {locale === "cs" ? "Více zde" : "Read more"}
        </Link>
      </div>
    </div>
  );
}
