import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src", "content");

export interface Meta {
  slug: string;
  title: string;
  description?: string;
  publishDate: string;
}

export const getPostSlugs = () =>
  fs
    .readdirSync(rootDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

const readPost = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");

  // Guard against unknown slugs and path traversal: both must 404, not 500.
  if (!getPostSlugs().includes(realSlug)) notFound();

  const source = fs.readFileSync(
    path.join(rootDirectory, `${realSlug}.mdx`),
    "utf8"
  );

  return { realSlug, source };
};

export const getPostMeta = (slug: string): Meta => {
  const { realSlug, source } = readPost(slug);
  return { ...matter(source).data, slug: realSlug } as Meta;
};

export const getPostBySlug = async (slug: string) => {
  const { realSlug, source } = readPost(slug);

  const { frontmatter, content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug } as Meta, content };
};

// Sync so callers that only need frontmatter (the posts index, the sitemap)
// avoid compiling every MDX file.
export const getAllPostsMeta = (): Meta[] =>
  getPostSlugs()
    .map(getPostMeta)
    .sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

// Frontmatter dates are ISO (date-only), which parse as UTC midnight. Format in
// UTC so the rendered day never shifts for readers behind UTC.
export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
