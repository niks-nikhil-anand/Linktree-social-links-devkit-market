import Image, { type ImageProps } from "next/image";

export function LinkLogo({ src }: { src: ImageProps["src"] }) {
  return (
    <Image
      className="link-logo"
      src={src}
      alt=""
      aria-hidden="true"
      width={36}
      height={36}
      sizes="36px"
    />
  );
}
