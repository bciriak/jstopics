import styled from 'styled-components'

import { Container } from '../Common/CommonStyle'

export const TopicListContainer = styled(Container)`
  padding: 2rem 20px;

  h3 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: -0.5rem;
  }

  p {
    text-align: center;
    margin-bottom: 4rem;
  }
`

export const TopicsUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin: 8px;
    padding: 16px 20px;
    border-radius: 8px;
    font-size: 1.2rem;

    a {
      color: black;
      padding: 16px 24px;
      font-weight: 800;
    }
  }
`
