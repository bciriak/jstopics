import Link from 'next/link'

import styles from './ArticleListItemStyle.module.scss'
import { ArticleInterface } from '../../types/article.types'

export function ArticleListItem({ article }: { article: ArticleInterface }) {
  return (
    <li className={styles.container}>
      <div className={styles.articleItemHead}>
        <div className={styles.articleItemDate}>
          <span>
            {article.month} {article.day}
          </span>
          <span>{article.year}</span>
        </div>
        <div className={styles.articleItemTitle}>
          <span>{article.readTime} min read</span>
          <Link href={`/articles/${article.id}`} passHref>
            <a>
              <h2>{article.title}</h2>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.articleItemExcerpt}>
        <p>{article.excerpt}</p>
      </div>
    </li>
  )
}
