import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <h1 className="title">Page not found</h1>
      <p>
        That page doesn&apos;t exist. Try the{" "}
        <Link href="/">homepage</Link> or browse the{" "}
        <Link href="/posts">posts</Link>.
      </p>
    </>
  );
}
