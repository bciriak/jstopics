import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'

import { getArticleData, getSortedArticlesData } from '../../utils/articles'
import Button from '../../components/Button'
import { CodeBlock } from '../../components/CodeBlock'
import { MdLink } from '../../components/MdLink'
import { MdLinkInternal } from '../../components/MdLinkInternal'
import { SubscribeCTA } from '../../components/SubscribeCTA'
import { MdImage } from '../../components/MdImage'
import { Article } from '../../components/Article'
import { Todo } from '../../components/Todo'
import { Note } from '../../components/Note'
import Image from 'next/image'
import { ArticleInterface } from '../../types/article.types'
import { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  Button,
  CodeBlock,
  MdLink,
  MdLinkInternal,
  MdImage,
  SubscribeCTA,
  Todo,
  Note,
}

function ArticlePage({ article }: { article: ArticleInterface }) {
  return (
    <>
      <Head>
        <title key="title">{article.title} | JSTopics</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <Article>
        <Image
          priority
          height={340}
          width={720}
          alt={article.imageAlt}
          src={`/images/covers/${article.image}`}
        />
        <div className="center">
          <small>
            {article.month} {article.day}, {article.year} | {article.readTime}{' '}
            min read
          </small>
        </div>
        <h1>{article.title}</h1>
        <p style={{ fontSize: '1.3rem', lineHeight: '2rem', fontWeight: 300 }}>
          {article.intro}
        </p>
        <hr />
        <MDXRemote {...article.contentHtml} components={components} />
      </Article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticles = getSortedArticlesData()

  return {
    paths: allArticles?.map((post) => `/${post.category}/${post.slug}`) || [],
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
