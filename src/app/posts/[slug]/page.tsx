import { Metadata } from "next";
import {
  formatDate,
  getPostBySlug,
  getPostSlugs,
} from "../../../../lib/mdx";
import { siteName } from "../../../../lib/site";
import { blogPostingSchema } from "../../../../lib/schema";
import { JsonLd } from "@/components/json-ld";

interface Params {
  slug: string;
}

export const generateStaticParams = async () =>
  getPostSlugs().map((slug) => ({ slug }));

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { meta } = await getPostBySlug(params.slug);
  const url = `/posts/${meta.slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: meta.title,
      description: meta.description,
      publishedTime: new Date(meta.publishDate).toISOString(),
      authors: [siteName],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
    },
  };
}

const PostPage = async ({ params }: { params: Params }) => {
  const { content, meta } = await getPostBySlug(params.slug);

  return (
    <div className="content">
      <JsonLd data={blogPostingSchema(meta)} />
      <time dateTime={meta.publishDate}>{formatDate(meta.publishDate)}</time>
      {content}
    </div>
  );
};

export default PostPage;
