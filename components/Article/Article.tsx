import Script from 'next/script'

import { Wrapper } from '../Common/CommonStyle'
import { ArticleContainer } from './ArticleStyle'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return (
    <Wrapper>
      <ArticleContainer>
        {children}
        <div className="giscus" />
      </ArticleContainer>
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
    </Wrapper>
  )
}
