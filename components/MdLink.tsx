type MdLinkProps = {
  url: string
  text: string
  isBlank: boolean
  isNoReferrer: boolean
}

export function MdLink({
  url,
  text,
  isBlank = true,
  isNoReferrer = true,
}: MdLinkProps) {
  const target = isBlank ? '_blank' : '_self'
  const rel = isNoReferrer ? 'noreferrer' : undefined

  return (
    <a href={url} target={target} rel={rel}>
      {text}
    </a>
  )
}
