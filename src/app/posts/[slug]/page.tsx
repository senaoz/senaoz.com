import { getPostBySlug } from "../../../../lib/mdx";

const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const PostPage = async ({ params }) => {
  const { content } = await getPageContent(params.slug);

  return <div className="content">{content}</div>;
};

export default PostPage;
