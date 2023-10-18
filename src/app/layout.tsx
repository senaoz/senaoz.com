import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sena Oz",
  description:
    "I am a management information systems student trying to be a software developer. Live in İstanbul. Student at Boğaziçi University.",
};

const pages: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <nav>
              {pages.map(({ href, label }) => (
                <Link key={href} href={href} className={"nav-item"}>
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
