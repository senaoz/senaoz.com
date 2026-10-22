import { getAllPostsMeta } from "../../../lib/mdx";
import { siteDescription, siteName, siteUrl } from "../../../lib/site";

const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[
      c
    ] as string)
  );

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPostsMeta();

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/posts/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      ${post.description ? `<description>${escapeXml(post.description)}</description>` : ""}
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
