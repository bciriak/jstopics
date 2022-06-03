import { GetStaticProps } from 'next'
import { getSortedArticlesData } from '../utils/articles'
import { ArticleList } from '../components/ArticleList'
import { ArticleInterface } from '../types/article.types'

export default function AllPosts({
  allArticles,
}: {
  allArticles: ArticleInterface[]
}) {
  return (
    <div>
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
