import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Button from '../components/Button'

const components = { Button }

export default function TestPage({ source }: { source: any }) {
	return (
		<div>
			<MDXRemote {...source} components={components} />
		</div>
	)
}

export async function getStaticProps() {
	const source = 'Some **mdx** text, with a component <Button />'
	const mdxSource = await serialize(source)
	return { props: { source: mdxSource } }
}
