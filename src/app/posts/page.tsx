import Link from "next/link";
import { getAllPostsMeta } from "../../../lib/mdx";

const Posts = async () => {
  let posts = await getAllPostsMeta();

  return (
    <>
      <h1 className="title">Posts</h1>
      <div className="container">
        {posts?.map((post) => {
          let date = new Date(post.publishDate);
          let dateString = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              style={{
                textDecoration: "none",
              }}
            >
              <div className="post">
                <time>{dateString}</time>
                <h3 style={{ paddingBottom: 0 }}>{post.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
