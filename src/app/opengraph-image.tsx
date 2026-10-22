import { ImageResponse } from "next/og";
import { siteDescription, siteName } from "../../lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteName} — Software Engineer`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "rgb(245, 245, 245)",
          borderBottom: "24px solid rgb(232, 180, 44)",
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 700, color: "rgb(47, 47, 47)" }}>
          {siteName}
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 24,
            color: "rgb(87, 87, 87)",
            lineHeight: 1.4,
          }}
        >
          {siteDescription}
        </div>
      </div>
    ),
    size
  );
}
