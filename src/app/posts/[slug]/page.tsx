import { getPostBySlug } from "../../../../lib/mdx";

interface Params {
  slug?: string;
}

interface Meta {
  slug?: string;
  title?: string;
  publishDate?: string | Date;
}

export async function generateMetadata({ params }: { params: Params }) {
  const { meta } = await getPageContent(params.slug);
  return {
    title: (meta as Meta).title,
    publishDate: (meta as Meta).publishDate,
  };
}

const getPageContent = async (slug: any) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

const PostPage = async ({ params }: { params: Params }) => {
  const { content, meta } = await getPageContent(params.slug);

  return (
    <div className="content">
      <time>{meta.publishDate}</time>
      {content}
    </div>
  );
};

export default PostPage;
