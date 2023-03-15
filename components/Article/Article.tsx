import { useRef } from 'react'
import { useScript } from '../../hooks/useScript'

import { ByeBye } from '../ByeBye'
import styles from './ArticleStyle.module.scss'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  const script = useRef<HTMLDivElement>(null)
  useScript('https://giscus.app/client.js', script)

  return (
    <div className="wrapper">
      <div className={`container ${styles.articleContainer}`}>
        {children}
        <ByeBye />
        <div className={`giscus ${styles.comments}`} />
      </div>
      <div ref={script}></div>
    </div>
  )
}
