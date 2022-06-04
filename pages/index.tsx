import { GetStaticProps } from 'next'
import Head from 'next/head'

import { getSortedArticlesData } from '../utils/articles'
import { Hero } from '../components/Hero'
import { ArticleList } from '../components/ArticleList'
import { ArticleInterface } from '../types/article.types'

export default function Home({
  allArticlesData,
}: {
  allArticlesData: ArticleInterface[]
}) {
  return (
    <>
      <Head>
        <title>JSTopics | Learn JavaScript, TypeScript, React & more</title>
        <meta
          name="description"
          content="JSTopics is place where you can learn and read about topics related to JavaScript, TypeScript, React and similar."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      {allArticlesData && (
        <ArticleList
          articles={allArticlesData}
          topic={{ name: 'All', slug: 'all', cssClass: 'all' }}
        />
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allArticlesData = getSortedArticlesData()

  return {
    props: {
      allArticlesData,
    },
  }
}
