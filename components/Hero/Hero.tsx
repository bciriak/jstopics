import { Container } from '../Common/CommonStyle'
import { HeroWrapper, Content, Highlight } from './HeroStyle'
import { SubscribeCTA } from '../SubscribeCTA'

export function Hero() {
  return (
    <HeroWrapper>
      <Container>
        <Content>
          <h1>
            JSTopics is all about <Highlight>JavaScript</Highlight>, TypeScript,
            React and all things related.
          </h1>

          <SubscribeCTA />
        </Content>
      </Container>
    </HeroWrapper>
  )
}
