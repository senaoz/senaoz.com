import { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPostsMeta } from "../../../lib/mdx";
import { blogSchema } from "../../../lib/schema";
import { JsonLd } from "@/components/json-ld";

const postsDescription =
  "Writing on software engineering, AI-assisted development, and life as a student developer.";

export const metadata: Metadata = {
  title: "Posts",
  description: postsDescription,
  alternates: { canonical: "/posts" },
  openGraph: {
    type: "website",
    url: "/posts",
    title: "Posts",
    description: postsDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Posts",
    description: postsDescription,
  },
};

const Posts = () => {
  const posts = getAllPostsMeta();

  return (
    <>
      <JsonLd data={blogSchema(posts)} />
      <h1 className="title">Posts</h1>
      <div className="container">
        {posts?.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.slug}
            style={{
              textDecoration: "none",
            }}
          >
            <article className="post">
              <time dateTime={post.publishDate}>
                {formatDate(post.publishDate)}
              </time>
              <h2 style={{ paddingBottom: 0 }}>{post.title}</h2>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Posts;
