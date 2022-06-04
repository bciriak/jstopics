import styles from './ArticleListStyle.module.scss'
import { ArticleListItem } from '../ArticleListItem'
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
    <div className={`container ${styles.container}`}>
      {topic ? (
        <h1>
          <span className={topic.cssClass}>{topic.name}</span> articles
        </h1>
      ) : (
        <h1>
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
