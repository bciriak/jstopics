import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Layout from '../../components/Layout'
import { getAllArticleSlugs, getArticleData } from '../../utils/articles'
import Button from '../../components/Button'

const components = { Button }

export default function Article({
	articleData,
}: {
	articleData: {
		title: string
		date: string
		contentHtml: MDXRemoteSerializeResult
	}
}) {
	return (
		<Layout>
			<Head>
				<title>{articleData.title}</title>
			</Head>
			<article>
				<h1>{articleData.title}</h1>
				<small>{articleData.date}</small>
				{/* <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} /> */}
				<MDXRemote {...articleData.contentHtml} components={components} />
			</article>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllArticleSlugs()
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const articleData = await getArticleData(params?.slug as string)
	return {
		props: {
			articleData,
		},
	}
}
