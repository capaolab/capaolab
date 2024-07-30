import React from 'react'
import Link from "next/link";
import Image from "next/image";

function ImageLink({ src, url, alt, width, height, css }) {
  return (
    <Link href={url}>
      <Image
        src={src}
        className={css}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  )
}

export default ImageLink