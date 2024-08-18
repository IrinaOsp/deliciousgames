import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogData";
import RelatedProducts from "./relatedProducts/RelatedProducts";
import Blockquote from "../../components/UI/blockquote/blockquote";
import PageHeading from "../../components/UI/pageHeading/pageHeading";

export default function BlogPage({
  params,
}: {
  params: { title: string; locale: "en" | "cs" };
}) {
  const { title, locale } = params;
  const blogPost = BLOG_POSTS.find((post) => post.path === title);

  if (!blogPost) {
    redirect("/not-found");
  }

  const getParagraphs = (i: number) => {
    return blogPost.text[locale][i]
      .split("/n")
      .map((parag, id) =>
        parag.startsWith("blockquote: ") ? (
          <Blockquote
            text={parag.slice("blockquote: ".length)}
            key={id + parag}
          />
        ) : (
          <p
            key={id + parag[i]}
            className="pb-2.5 text-[15px]"
            dangerouslySetInnerHTML={{ __html: parag }}
          ></p>
        )
      );
  };

  return (
    <div className="py-5 pr-5 mr-0 ml-auto max-w-[760px] blog-post">
      <PageHeading title={blogPost.title[locale]} />
      <div className="relative">
        <span className="block absolute top-0 left-0 z-10 w-min m-1 bg-pink-600 text-white text-xs text-wrap py-1 px-2.5">
          {blogPost.date}
        </span>
        <Image
          src={blogPost.images[0].path}
          alt={blogPost.images[0].name || blogPost.title[locale]}
          width={740}
          height={400}
          className="w-full h-48 object-cover mb-5"
        />
      </div>
      {blogPost.text[locale][0] && <div>{getParagraphs(0)}</div>}
      {blogPost.images.length > 1 &&
        blogPost.images.map(
          (img, ind) =>
            ind !== 0 && (
              <div key={img.path}>
                <Image
                  src={img.path}
                  alt={img.name || blogPost.title[locale]}
                  width={740}
                  height={400}
                  className="mb-2.5"
                />
                {img.name && (
                  <p className="italic text-center text-[15px] mb-2.5">
                    {img.name}
                  </p>
                )}
                {blogPost.text[locale][ind] && getParagraphs(ind)}
              </div>
            )
        )}
      {blogPost.text[locale][blogPost.images.length] &&
        blogPost.text[locale].map(
          (_, id) =>
            id >= blogPost.images.length && (
              <div key={id}>{getParagraphs(id)}</div>
            )
        )}
      {blogPost.tags?.[0] && (
        <div className="flex gap-2 justify-center my-3.5 text-center text-[13px]">
          <span className="font-bold">Tags: </span>
          {blogPost.tags.map((tag) => (
            <Link
              href={`/blog?journal_blog_tag=${tag}`}
              key={tag}
              className="rounded-xl px-2 bg-sky-800 text-white hover:text-pink-600 hover:bg-neutral-500"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
      {blogPost.relatedProductsPaths && (
        <RelatedProducts productPaths={blogPost.relatedProductsPaths} />
      )}
    </div>
  );
}
