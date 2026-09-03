import { MetadataRoute } from "next";
import { getAllPostsMeta } from "../../lib/mdx";
import { siteUrl } from "../../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostsMeta();
  const latest = posts[0] ? new Date(posts[0].publishDate) : new Date();

  return [
    { url: `${siteUrl}/`, lastModified: latest },
    { url: `${siteUrl}/posts`, lastModified: latest },
    ...posts.map((post) => ({
      url: `${siteUrl}/posts/${post.slug}`,
      lastModified: new Date(post.publishDate),
    })),
  ];
}
