import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import {
  getTopic,
  getTopicArticles,
  getTopicsSlugs,
} from '../../utils/articles'
import { ArticleList } from '../../components/ArticleList'
import { ArticleInterface } from '../../types/article.types'

export default function Topic({
  articlesData,
  topic,
}: {
  articlesData: ArticleInterface[]
  topic: {
    name: string
    cssClass: string
    slug: string
  }
}) {
  return (
    <div>
      <Head>
        <title key="title">
          Browse all of the our JavaScript related topics
        </title>
        <meta
          name="description"
          content={`Here you can look at all of the topics covered in JSTopics articles.`}
        />
      </Head>

      <ArticleList articles={articlesData} topic={topic} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTopicsSlugs()

  return {
    paths: paths.map((category) => `/${category.params.slug}`) || [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesData = await getTopicArticles(params?.category as string)
  const topic = getTopic(params?.category as string)

  return {
    props: {
      articlesData,
      topic,
    },
  }
}
