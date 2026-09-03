import { MetadataRoute } from "next";
import { siteDescription, siteName, siteTitle } from "../../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteTitle,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "rgb(245, 245, 245)",
    theme_color: "rgb(232, 180, 44)",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
