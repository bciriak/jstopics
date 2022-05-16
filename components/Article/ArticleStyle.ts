import styled from 'styled-components'
import { Container } from '../Common/CommonStyle'

export const ArticleContainer = styled(Container)`
  max-width: 720px;
  padding-bottom: 2rem;

  small {
    display: block;
    padding-top: 3rem;
  }

  h1 {
    font-size: 2.3rem;
    text-align: center;
    margin-top: 1rem;
    padding-bottom: 2rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.9rem;
  }

  p:first-of-type {
    font-size: 1.4rem;
  }

  a {
    text-decoration: underline;
    color: black;
  }

  a:active {
    color: black;
  }

  h2 {
    margin: 3rem 0 2rem;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 2em 0;
    padding: 0;
  }

  blockquote {
    padding-left: 1em;
    font-style: italic;
    margin: 3rem 0;
    color: black;
    border-left: 5px solid #ccc;
  }
`
