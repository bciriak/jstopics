import Link from 'next/link'

import { Container } from './ArticleListItemStyle'
import { ArticleInterface } from '../../types/article'

export function ArticleListItem({ article }: { article: ArticleInterface }) {
  return (
    <Container>
      <div className="article-item-head">
        <div className="article-item-date">
          <span>
            {article.month} {article.day}
          </span>
          <span>{article.year}</span>
        </div>
        <div className="article-item-title">
          <span>{article.readTime} min read</span>
          <Link href={`/articles/${article.id}`} passHref>
            <a>
              <h2>{article.title}</h2>
            </a>
          </Link>
        </div>
      </div>
      <div className="article-item-excerpt">
        <p>{article.excerpt}</p>
      </div>
    </Container>
  )
}
