import React from 'react'
import Link from "next/link";
import Image from "next/image";
import classes from "./elements.module.css";

interface ImageLinkProps {
  src: string;
  url: string;
  alt: string;
  width: number;
  height: number;
}

function ImageLink({ src, url, alt, width, height }: ImageLinkProps) {
  return (
    <Link href={url} className={classes.imageLink}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  )
}

export default ImageLink