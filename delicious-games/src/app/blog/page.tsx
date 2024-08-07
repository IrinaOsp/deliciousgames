import { BLOG_POSTS } from "@/data/blogData";
import PageHeading from "../components/UI/pageHeading/pageHeading";
import BlogPost from "./components/blogPost/blogPost";
import { BlogPostType } from "@/types/types";

export default function Blog({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { journal_blog_tag, journal_blog_search } = searchParams;

  const getBlogPosts: () => BlogPostType[] = () => {
    if (journal_blog_tag) {
      return BLOG_POSTS.filter(
        (post) => post.tags && post.tags.includes(journal_blog_tag)
      );
    }
    if (journal_blog_search) {
      return BLOG_POSTS.filter(
        (post) =>
          post.title
            .toLowerCase()
            .includes(journal_blog_search.toLowerCase()) ||
          post.text
            .join(" ")
            .toLowerCase()
            .includes(journal_blog_search.toLowerCase())
      );
    }
    return BLOG_POSTS;
  };

  return (
    <div className="max-w-7xl mx-auto p-5 xl:px-0 xl:pr-5">
      <PageHeading title={"Blog"} />
      <div className="grid grid-cols-2 auto-rows-fr gap-x-2.5 gap-y-5">
        {getBlogPosts().map((post) => (
          <BlogPost key={post.path} post={post} />
        ))}
      </div>
    </div>
  );
}
