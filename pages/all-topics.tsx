import { GetStaticProps } from 'next'
import { getAllTopics } from '../utils/articles'
import { TopicList } from '../components/TopicList'

export default function AllTopics({
  allTopics,
}: {
  allTopics: { name: string; count: number; cssClass: string; slug: string }[]
}) {
  return <TopicList topics={allTopics} />
}

export const getStaticProps: GetStaticProps = async () => {
  const allTopics = getAllTopics()

  return {
    props: {
      allTopics,
    },
  }
}
