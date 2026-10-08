import { skills } from "@/resume";
import { Meta } from "./mdx";
import { siteDescription, siteName, siteUrl, socialLinks } from "./site";

const personId = `${siteUrl}/#person`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: siteName,
  url: `${siteUrl}/`,
  jobTitle: "Software Engineer",
  description: siteDescription,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Boğaziçi University",
    url: "https://bogazici.edu.tr",
  },
  knowsAbout: skills.flatMap(({ list }) => list),
  sameAs: socialLinks,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: ["Sena Öz", "senaoz"],
  url: `${siteUrl}/`,
  inLanguage: "en",
  publisher: { "@id": personId },
};

const author = { "@type": "Person", "@id": personId, name: siteName };

export const blogSchema = (posts: Meta[]) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${siteUrl}/posts#blog`,
  name: `${siteName} — Posts`,
  url: `${siteUrl}/posts`,
  inLanguage: "en",
  author,
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${siteUrl}/posts/${post.slug}`,
    datePublished: post.publishDate,
  })),
});

export const blogPostingSchema = (post: Meta) => {
  const url = `${siteUrl}/posts/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.publishDate,
    inLanguage: "en",
    author,
    publisher: author,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@type": "Blog", "@id": `${siteUrl}/posts#blog` },
  };
};
