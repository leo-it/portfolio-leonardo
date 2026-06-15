import Image, { type ImageProps } from "next/image";

type PortfolioImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
};

export function isSvgSrc(src: string) {
  return src.endsWith(".svg");
}

export function PortfolioImage({ src, alt, className, fill, sizes, priority }: PortfolioImageProps) {
  if (isSvgSrc(src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
        />
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
