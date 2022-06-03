import { ArticleListItem } from '../ArticleListItem'
import { ArticleListContainer } from './ArticleListStyle'
import { ArticleInterface } from '../../types/article.types'

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
    <ArticleListContainer>
      {topic ? (
        <h3>
          <span className={topic.cssClass}>{topic.name}</span> articles
        </h3>
      ) : (
        <h3>
          <span>All</span> articles
        </h3>
      )}
      <ul>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </ArticleListContainer>
  )
}
