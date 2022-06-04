import Link from 'next/link'

import styles from './TopicListStyle.module.scss'
import { TopicInterface } from '../../types/topic.types'

type ListProps = {
  topics: TopicInterface[]
}

export function TopicList({ topics }: ListProps) {
  return (
    <div className={`container ${styles.topicListContainer}`}>
      <h1>All Topics</h1>
      <p>Here are all of the topics that you can read about</p>
      <ul className={styles.topicsUnorderedList}>
        {topics.map((topic) => (
          <li key={topic.slug} className={topic.cssClass}>
            <Link key={topic.slug} href={`/topics/${topic.slug}`}>
              {`${topic.name} (${topic.count})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
