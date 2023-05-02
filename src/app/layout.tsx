"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const data = {
  title: "Sena Oz",
  description:
    "I am a management information systems student trying to be a software developer. Live in İstanbul. Student at Boğaziçi University.",
};

export const pages = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let segment = useSelectedLayoutSegment();
  if (segment === null) {
    segment = "";
  }

  return (
    <>
      <html lang="en">
        <head>
          <meta name="description" content={data.description} />
          <title>{data.title}</title>
        </head>
        <body className={inter.className}>
          <header>
            <nav>
              {pages.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={"/" + segment === href ? "link active" : "link"}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </header>

          <main>{children}</main>
        </body>
      </html>
      <Analytics />
    </>
  );
}
