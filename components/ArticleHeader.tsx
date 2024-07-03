import Image from 'next/image'
import { ArticleInterface } from '../types/article.types'
import { Heading1 } from 'components/ui/heading1'
import { HorizontalRule } from './ui/horizontalRule'

type Props = {
  article: ArticleInterface
}

export function ArticleHeader({ article }: Props) {
  const replaceAsterisks = (input: string): string => {
    let count = 0 // To keep track of the occurrences
    return input.replace(/\*\*/g, () => {
      count++
      return count % 2 === 1 ? '<b>' : '</b>'
    })
  }

  return (
    <div>
      <Image
        priority
        height={340}
        width={720}
        alt={article.imageAlt}
        src={`/images/covers/${article.image}`}
      />
      <div className="text-center">
        <div className="pt-4 flex justify-center">
          <Image
            src="/bciriak.jpeg"
            alt="BCiriak Avatar"
            className="rounded-full"
            width={80}
            height={80}
          />
        </div>
        <b className="text-gray-700">by BCiriak</b>
        <small className="block tracking-wide text-gray-600 py-1">
          {article.month} {article.day}, {article.year} | {article.readTime} min
          read
        </small>
      </div>
      <Heading1>{article.title}</Heading1>
      <p className="text-xl font-light leading-snug">{article.intro}</p>
      <HorizontalRule />
    </div>
  )
}
