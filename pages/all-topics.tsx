import { GetStaticProps } from 'next'
import { getAllTopics } from '../utils/articles'
import Link from 'next/link'

export default function AllTopics({
  allTopics,
}: {
  allTopics: { name: string; count: number; cssClass: string; slug: string }[]
}) {
  return (
    <div>
      This is AllTopics!
      <ul>
        {allTopics.map(({ name, count, cssClass, slug }) => (
          <Link key={name} href={`/topics/${slug}`}>
            <a>
              <li className={cssClass}>
                {name} ({count})
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allTopics = getAllTopics()

  return {
    props: {
      allTopics,
    },
  }
}
