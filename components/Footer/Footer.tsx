import {
  FooterWrapper,
  FooterContainer,
  Copyright,
  SocialLinks,
} from './FooterStyle'
import { SubscribeCTA } from '../SubscribeCTA'

export function Footer() {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <FooterWrapper>
      <FooterContainer>
        <SocialLinks>
          <p>Connect with me on social media ✨</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/JSTopics-231248317757123/"
                target="_blank"
                rel="noreferrer"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/JsTopics"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </li>
          </ul>
        </SocialLinks>

        <SubscribeCTA />

        <Copyright>©{currentYear()} JSTopics. All rights reserved.</Copyright>
      </FooterContainer>
    </FooterWrapper>
  )
}
