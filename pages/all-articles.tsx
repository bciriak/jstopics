import { GetStaticProps } from 'next'
import { getSortedArticlesData } from '../utils/articles'
import { ArticleList } from '../components/ArticleList'
import { ArticleInterface } from '../types/article.types'
import Head from 'next/head'

export default function AllArticles({
  allArticles,
}: {
  allArticles: ArticleInterface[]
}) {
  return (
    <div>
      <Head>
        <title key="title">List of all of JSTopics articles | JSTopics</title>
        <meta
          name="description"
          content="Browse list of all of JSTopics articles on JavaScript, TypeScript, React and related."
        />
      </Head>
      {allArticles && (
        <ArticleList
          articles={allArticles}
          topic={{ name: 'All', slug: 'all', cssClass: 'all' }}
        />
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allArticles = getSortedArticlesData()

  return {
    props: {
      allArticles,
    },
  }
}
