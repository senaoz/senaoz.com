// Escapes `<` so a stray "</script>" in any string can't break out of the tag.
const serialize = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");

export const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: serialize(data) }}
  />
);
