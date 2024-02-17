import Image from 'next/image'
import styled from 'styled-components'
import { ArticleInterface } from '../../types/article.types'
import styles from './ArticleHeader.module.scss'


const Avatar = styled.div`
    padding-top: 1rem;

    img {
        width: 80px;
        border-radius: 100px;
    }
`

type Props = {
  article: ArticleInterface
}

export function ArticleHeader({ article }: Props) {
  return (
    <div className={`${styles.articleHeader} container`}>
      <Image
        priority
        height={340}
        width={720}
        alt={article.imageAlt}
        src={`/images/covers/${article.image}`}
      />
      <div className='center'>
        <Avatar>
          <Image
            src='/bciriak.jpeg'
            alt='BCiriak Avatar'
            width={80}
            height={80}
          />
        </Avatar>
        <b>by BCiriak</b>
        <small>
          {article.month} {article.day}, {article.year} | {article.readTime}{' '}
          min read
        </small>
      </div>
      <h1>{article.title}</h1>
      <p style={{ fontSize: '1.3rem', lineHeight: '2rem', fontWeight: 300 }}>
        {article.intro}
      </p>
      <hr />
    </div>
  )
}
