const fallbackUrl = "https://senaoz.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl
).replace(/\/$/, "");

export const siteName = "Sena Oz";

export const siteTitle = "Sena Oz";

export const siteDescription =
  "I am a Software Engineer passionate about creating impactful products.";

export const socialLinks = [
  "https://www.linkedin.com/in/zsenaoz/",
  "https://github.com/senaoz",
];
