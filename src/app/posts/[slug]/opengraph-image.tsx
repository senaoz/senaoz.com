import { ImageResponse } from "next/server";
import { getPostMeta, getPostSlugs } from "../../../../lib/mdx";
import { siteName } from "../../../../lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const generateStaticParams = async () =>
  getPostSlugs().map((slug) => ({ slug }));

export default function Image({ params }: { params: { slug: string } }) {
  const meta = getPostMeta(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "rgb(245, 245, 245)",
          borderBottom: "24px solid rgb(232, 180, 44)",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "rgb(47, 47, 47)",
            lineHeight: 1.25,
          }}
        >
          {meta.title}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "rgb(87, 87, 87)" }}>
          {siteName}
        </div>
      </div>
    ),
    size
  );
}
