import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'

import { getArticleData, getSortedArticlesData } from '../../utils/articles'
import Button from '../../components/Button/Button'
import { CodeBlock } from '../../components/CodeBlock'
import { MdLink } from '../../components/MdLink'
import { MdLinkInternal } from '../../components/MdLinkInternal'
import { MdImage } from '../../components/MdImage'
import { Article } from '../../components/Article'
import { Todo } from '../../components/Todo'
import { Note } from '../../components/Note'
import { ArticleInterface } from '../../types/article.types'
import { MDXComponents } from 'mdx/types'
import { Quiz } from '../../components/Quiz'
import { Video } from '../../components/Video'
import { ArticleHeader } from '../../components/ArticleHeader/ArticleHeader'
import { useState } from 'react'
import styled from 'styled-components'
import { Comments } from '../../components/Comments/Comments'

const components: MDXComponents = {
  Button,
  CodeBlock,
  MdLink,
  MdLinkInternal,
  MdImage,
  Todo,
  Note,
}

const Buttons = styled.div`
  margin: 0 auto 30px;
  display: flex;
  justify-content: center;
`

const ArticlePageContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

function ArticlePage({ article }: { article: ArticleInterface }) {
  const metaTitle = `${article.title} | JSTopics`
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  return (
    <ArticlePageContainer>
      <Head>
        <title key="title">{metaTitle}</title>
        <meta name="description" content={article.excerpt} />
      </Head>
      <ArticleHeader article={article} />
      <Buttons>
        <button onClick={() => setIsVideoVisible(true)}>Give me video</button>
        <button onClick={() => setIsVideoVisible(false)}>
          Give me article
        </button>
      </Buttons>
      {isVideoVisible ? (
        <Video />
      ) : (
        <Article>
          <MDXRemote {...article.contentHtml} components={components} />
        </Article>
      )}
      {/*<div className="container">*/}
      {article.quizId && <Quiz quizId={article.quizId} />}
      <Comments />
      {/*</div>*/}
    </ArticlePageContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticles = getSortedArticlesData()

  return {
    paths: allArticles?.map((post) => `/${post.category}/${post.slug}`) || [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticleData(params?.slug as string)

  return {
    props: {
      article,
    },
  }
}

export default ArticlePage
