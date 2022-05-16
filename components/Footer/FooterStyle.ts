import styled from 'styled-components'

import { Container, Wrapper } from '../Common/CommonStyle'

export const FooterWrapper = styled(Wrapper)`
  background: black;
  color: white;
`

export const FooterContainer = styled(Container)`
  padding: 3rem 20px 0.5rem;
`

export const SocialLinks = styled.div`
  font-size: 1.2rem;
  font-weight: 300;

  ul {
    li {
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: bold;
      display: inline;
      a {
        color: white;
        text-decoration: underline;
      }
    }
  }
`

export const Copyright = styled.p`
  text-align: right;
  font-weight: 100;
  font-size: 12px;
`
