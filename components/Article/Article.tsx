import Script from 'next/script'

import { ByeBye } from '../ByeBye'
import styles from './ArticleStyle.module.scss'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return (
    <div className="wrapper">
      <div className={`container ${styles.articleContainer}`}>
        {children}
        <ByeBye />
        <div className={`giscus ${styles.comments}`} />
      </div>
      <Script
        src="https://giscus.app/client.js"
        data-repo="bciriak/jstopics"
        data-repo-id="R_kgDOHV9ZQA"
        data-category="Announcements"
        data-category-id="DIC_kwDOHV9ZQM4CPITS"
        data-mapping="url"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossOrigin="anonymous"
        async
      ></Script>
    </div>
  )
}
