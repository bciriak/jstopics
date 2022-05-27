import Image from 'next/image'

type MdImageProps = {
  url: string
  alt: string
}

export function MdImage({ url, alt }: MdImageProps) {
  return (
    <Image
      src={`/images/articles/${url}`}
      layout="fill"
      objectFit="contain"
      alt={alt}
    />
  )
}
