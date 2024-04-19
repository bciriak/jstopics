import { ArticleListItem } from './ArticleListItem'
import { ArticleInterface } from '../types/article.types'

export function ArticleList({
  articles,
  topic = undefined,
}: {
  articles: ArticleInterface[]
  topic:
    | {
        name: string
        cssClass: string
        slug: string
      }
    | undefined
}) {
  return (
    <div className={`container py-8`}>
      {topic ? (
        <h1 className="text-center text-4xl font-bold my-6">
          <span className={`${topic.cssClass} px-3 py-2 rounded-xl`}>
            {topic.name}
          </span>{' '}
          articles
        </h1>
      ) : (
        <h1 className="text-center text-4xl font-bold my-6">
          <span>All</span> articles
        </h1>
      )}
      <ul>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  )
}
