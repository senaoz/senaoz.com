export async function generateStaticParams() {
  // Generate two pages at build time and the rest (3-100) on-demand
  return [
    { postSlug: "deneme", title: "Heheh" },
    { postSlug: "2", title: "2" },
  ];
}

export default function PostPage({
  params,
}: {
  params: { postSlug: string; title: string };
}) {
  return (
    <>
      <h2>{params.title}</h2>
      {params.postSlug}
    </>
  );
}
