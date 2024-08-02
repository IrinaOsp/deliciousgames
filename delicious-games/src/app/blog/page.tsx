import { BLOG_POSTS } from "@/data/blogData";
import PageHeading from "../components/UI/pageHeading/pageHeading";
import BlogPost from "./components/blogPost/blogPost";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto p-5 xl:px-0">
      <PageHeading title={"Blog"} />
      <div className="flex flex-wrap gap-0">
        {BLOG_POSTS.map((post) => (
          <BlogPost key={post.path} post={post} />
        ))}
      </div>
    </div>
  );
}
