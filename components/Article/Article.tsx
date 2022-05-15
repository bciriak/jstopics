import { Wrapper } from '../Common/CommonStyle'
import { ArticleContainer } from './ArticleStyle'

type ArticleProps = {
  children: React.ReactNode
}

export function Article({ children }: ArticleProps) {
  return (
    <Wrapper>
      <ArticleContainer>{children}</ArticleContainer>
    </Wrapper>
  )
}
