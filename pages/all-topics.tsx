import { GetStaticProps } from 'next'
import { getAllCategories } from '../utils/articles'
import { TopicList } from '../components/TopicList'
import Head from 'next/head'

export default function AllTopics({
  allTopics,
}: {
  allTopics: { name: string; count: number; cssClass: string; slug: string }[]
}) {
  return (
    <>
      <Head>
        <title key="title">List of all topics you can find at JSTopics</title>
        <meta
          name="description"
          content="All topic categories are listed here. From JavaScript, Reactjs to Nodejs and more."
        />
      </Head>
      <TopicList topics={allTopics} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allTopics = getAllCategories()

  return {
    props: {
      allTopics,
    },
  }
}
