import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "src", "content");

interface Meta {
  slug?: string;
  title?: string;
  publishDate: string | number | Date;
}

export const getPostBySlug = async (slug: any) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  const meta = { ...frontmatter, slug: realSlug };

  return { meta: meta as Meta, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta);
  }

  posts.sort(
    (a: any, b: any) => +new Date(b.publishDate) - +new Date(a.publishDate)
  );

  return posts;
};
