import Link from 'next/link'

import { TopicInterface } from '../types/topic.types'

type ListProps = {
  topics: TopicInterface[]
}

export function TopicList({ topics }: ListProps) {
  return (
    <div className={`container py-10`}>
      <h1 className="text-4xl text-center font-bold -mb-2 mt-4">All Topics</h1>
      <p className="text-base text-center mb-12">
        Here are all of the topics that you can read about
      </p>
      <ul className="flex flex-wrap">
        {topics.map((topic) => (
          <li
            key={topic.slug}
            className={`list-none rounded-lg text-xl m-2 px-8 py-4 ${topic.cssClass}`}
          >
            <Link
              className="text-black font-extrabold no-underline hover:no-underline"
              key={topic.slug}
              href={`/${topic.slug}`}
            >
              {`${topic.name} (${topic.count})`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
