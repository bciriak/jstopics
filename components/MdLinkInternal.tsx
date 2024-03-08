type MdLinkProps = {
	url: string
	text: string
}

export function MdLinkInternal({ url, text }: MdLinkProps) {
	return <a href={url}>{text}</a>
}
