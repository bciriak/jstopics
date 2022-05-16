import { Container, Highlight } from '../Common/CommonStyle'
import { HeroWrapper, Content } from './HeroStyle'
import { SubscribeCTA } from '../SubscribeCTA'

export function Hero() {
  return (
    <HeroWrapper>
      <Container>
        <Content>
          <h1>
            JSTopics is all about{' '}
            <Highlight>JavaScript, TypeScript, React</Highlight> and all things
            related.
          </h1>

          <SubscribeCTA />
        </Content>
      </Container>
    </HeroWrapper>
  )
}
