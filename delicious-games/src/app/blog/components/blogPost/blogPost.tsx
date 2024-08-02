import Image from "next/image";
import Link from "next/link";
import { BlogPostType } from "@/types/types";
import { trimText } from "@/utils/utils";

export default function BlogPost({ post }: { post: BlogPostType }) {
  const { title, path, date, images, text } = post;

  return (
    <div className="text-center p-2.5 max-w-[500px] w-1/2">
      <div className="relative h-[300px] overflow-hidden">
        <Link href={`blog/${path}`}>
          <span className="block absolute top-0 left-0 z-10 w-min m-1 bg-pink-600 text-white text-xs text-wrap py-1 px-2.5">
            {date}
          </span>
          <Image
            src={images[0]}
            alt={title}
            width={500}
            height={300}
            className="h-full w-auto object-cover hover:transition hover:scale-110"
          />
        </Link>
      </div>
      <div className="py-2.5">
        <Link
          href={`blog/${path}`}
          className="text-sky-900 hover:text-pink-600 text-base font-bold"
        >
          {title}
        </Link>
      </div>
      <p className="mb-2.5">{trimText(text[0], 200)}</p>
      <div>
        <Link
          href={`blog/${path}`}
          className="block p-3 text-white w-max mx-auto bg-zinc-500 hover:bg-pink-600 uppercase"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
