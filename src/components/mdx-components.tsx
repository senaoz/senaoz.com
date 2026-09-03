import Image from "next/image";

interface MdxImageProps {
  src?: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

// The post body is ~120% of the text column (see `.content img` in globals.css).
const sizes = "(max-width: 1000px) 120vw, 1200px";

export const PostImage = ({ src, alt = "", width, height }: MdxImageProps) => {
  // next/image needs intrinsic dimensions to reserve space; without them fall
  // back to a plain img rather than dropping the image.
  if (!src || !width || !height) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} loading="lazy" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={Number(width)}
      height={Number(height)}
      sizes={sizes}
    />
  );
};

export const mdxComponents = { PostImage, img: PostImage };
