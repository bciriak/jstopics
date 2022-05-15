import { FooterWrapper, FooterContainer } from './FooterStyle'
import { SubscribeCTA } from '../SubscribeCTA'

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div>
          <p>Connect with me on social media</p>
        </div>

        <SubscribeCTA />

        <p>© 2022 JSTopics. All rights reserved.</p>
      </FooterContainer>
    </FooterWrapper>
  )
}
