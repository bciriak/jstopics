import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'

import { getAllArticleSlugs, getArticleData } from '../../utils/articles'
import Button from '../../components/Button'
import { CodeBlock } from '../../components/CodeBlock'
import { MdLink } from '../../components/MdLink'
import { MdLinkInternal } from '../../components/MdLinkInternal'
import { MdImage } from '../../components/MdImage'
import { Article } from '../../components/Article'
import Image from 'next/image'
import { ArticleInterface } from '../../types/article'

const components = { Button, CodeBlock, MdLink, MdLinkInternal, MdImage }

function ArticlePage({ article }: { article: ArticleInterface }) {
	return (
		<>
			<Head>
				<title>{article.title}</title>
			</Head>
			<Article>
				<Image
					height='750px'
					width='1500px'
					alt={article.imageAlt}
					src={`/images/covers/${article.image}`}
				/>
				<div className='center'>
					<small>
						{article.month} {article.day}, {article.year} | {article.readTime}{' '}
						min read
					</small>
				</div>
				<h1>{article.title}</h1>
				<p>{article.intro}</p>
				<hr />
				<MDXRemote {...article.contentHtml} components={components} />
			</Article>
		</>
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
	const article = await getArticleData(params?.slug as string)
	return {
		props: {
			article,
		},
	}
}

export default ArticlePage
