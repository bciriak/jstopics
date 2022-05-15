import { ArticleListItem } from '../ArticleListItem'
import { ArticleListContainer } from './ArticleListStyle'
import { ArticleInterface } from '../../types/article'

export function ArticleList({ articles }: { articles: ArticleInterface[] }) {
  return (
    <ArticleListContainer>
      <ul>
        {articles.map((article) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ul>
    </ArticleListContainer>
  )
}
