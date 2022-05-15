import styled from 'styled-components'

export const Container = styled.li`
  padding: 2rem 0;

  .article-item-head {
    display: flex;

    h2 {
      padding: 0;
      margin: 0;
      color: black;
    }

    .article-item-title {
      margin-top: -20px;

      span {
        font-size: 12px;
        font-weight: 400;
      }
    }

    .article-item-date {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 14px;

      span {
        display: block;
        font-weight: 200;
      }
      span:first-child {
        font-weight: bold;
      }
    }
  }

  .article-item-excerpt {
    padding-left: 10%;
    p {
      width: 70%;
      margin-top: 0;
      line-height: 1.4rem;
    }
  }
`
