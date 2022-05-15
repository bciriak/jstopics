import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { getAllArticleSlugs, getArticleData } from '../../utils/articles'
import Button from '../../components/Button'
import { CodeBlock } from '../../components/CodeBlock'
import { Article } from '../../components/Article'
import Image from 'next/image'

const components = { Button, CodeBlock }

export default function ArticlePage({
  articleData,
}: {
  articleData: {
    title: string
    date: string
    year: number
    readTime: number
    contentHtml: MDXRemoteSerializeResult
  }
}) {
  return (
    <>
      <Head>
        <title>{articleData.title}</title>
      </Head>
      <Article>
        <Image
          height="750px"
          width="1500px"
          alt="5 ways"
          src="/images/covers/5-ways-to-install-nodejs-in-2019.jpeg"
        />
        <div className="center">
          <small>
            {articleData.date}, {articleData.year} | {articleData.readTime} min
            read
          </small>
        </div>
        <h1>{articleData.title}</h1>
        <MDXRemote {...articleData.contentHtml} components={components} />
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
  const articleData = await getArticleData(params?.slug as string)
  return {
    props: {
      articleData,
    },
  }
}
