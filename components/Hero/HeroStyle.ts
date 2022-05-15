import styled from 'styled-components'

import { Wrapper } from '../Common/CommonStyle'

export const HeroWrapper = styled(Wrapper)`
  background: black;
`

export const Content = styled.div`
  padding: 5rem 0;
  color: white;

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    width: 85%;
    color: white;
  }
`

export const Highlight = styled.span`
  text-decoration: underline;
`
