import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'

import { getArticleData, getSortedArticlesData } from '../../utils/articles'
import { MdLink } from 'components/MdLink'
import { MdLinkInternal } from 'components/MdLinkInternal'
import { MdImage } from 'components/MdImage'
import { Article } from 'components/Article'
import { ArticleInterface } from '../../types/article.types'
import { MDXComponents } from 'mdx/types'
import { Quiz } from 'components/Quiz'
import { ArticleHeader } from 'components/ArticleHeader'
import { Comments } from 'components/Comments'
import { Note } from 'components/Note'

const components: MDXComponents = {
  MdLink,
  MdLinkInternal,
  MdImage,
  Note,
}

function ArticlePage({ article }: { article: ArticleInterface }) {
  const metaTitle = `${article.title} | JSTopics`

  return (
    <div style={{ width: '680px' }} className="mx-auto">
      <Head>
        <title key="title">{metaTitle}</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <ArticleHeader article={article} />
      <Article>
        <MDXRemote {...article.contentHtml} components={components} />
      </Article>
      {article.quizId && <Quiz quizId={article.quizId} />}
      <Comments />
    </div>
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
