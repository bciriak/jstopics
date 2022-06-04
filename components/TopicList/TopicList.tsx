import Link from 'next/link'
import { TopicListContainer, TopicsUnorderedList } from './TopicListStyle'
import { TopicInterface } from '../../types/topic.types'

type ListProps = {
  topics: TopicInterface[]
}

export function TopicList({ topics }: ListProps) {
  return (
    <TopicListContainer>
      <h1>All Topics</h1>
      <p>Here are all of the topics that you can read about</p>
      <TopicsUnorderedList>
        {topics.map((topic) => (
          <li key={topic.slug} className={topic.cssClass}>
            <Link key={topic.slug} href={`/topics/${topic.slug}`}>
              {`${topic.name} (${topic.count})`}
            </Link>
          </li>
        ))}
      </TopicsUnorderedList>
    </TopicListContainer>
  )
}
