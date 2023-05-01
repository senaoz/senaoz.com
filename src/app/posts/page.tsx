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
          const options = { year: "numeric", month: "long", day: "numeric" };
          let dateString = date.toLocaleDateString("en-US", options);

          return (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              style={{
                textDecoration: "none",
              }}
            >
              <div className="post">
                <h3 className="list-item-title">{post.title}</h3>
                <time>{dateString}</time>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
