import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Script from 'next/script'

import { getTopic, getTopicArticles, getTopicSlugs } from '../../utils/articles'
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
        <title key="title">Browse all of the {topic.name} articles</title>
        <meta
          name="description"
          content={`Here you can look at all of the ${topic.name} topics covered in JSTopics articles.`}
        />
      </Head>

      <ArticleList articles={articlesData} topic={topic} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTopicSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articlesData = await getTopicArticles(params?.slug as string)
  const topic = getTopic(params?.slug as string)

  return {
    props: {
      articlesData,
      topic,
    },
  }
}
