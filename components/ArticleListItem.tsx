import Link from 'next/link'

import { ArticleInterface } from '../types/article.types'

export function ArticleListItem({ article }: { article: ArticleInterface }) {
  return (
    <li className="pb-10 list-none">
      <div className="flex">
        <div
          style={{ width: '10%' }}
          className="flex flex-col text-center pt-7"
        >
          <span className="text-sm font-bold">
            {article.month} {article.day}
          </span>
          <span className="text-sm">{article.year}</span>
        </div>
        <div>
          <span className="text-xs">{article.readTime} min read</span>
          <Link
            className=" hover:no-underline no-underline"
            href={`/${article.category}/${article.id}`}
            passHref
          >
            <h2 className="text-black text-2xl font-bold my-0 hover:bg-amber-300 px-2 -mx-2">
              {article.title}
            </h2>
          </Link>
        </div>
      </div>
      <div style={{ paddingLeft: '10%' }} className="pl-3 -mt-2">
        <p className="w-3/4 leading-normal text-base my-0">{article.excerpt}</p>
      </div>
    </li>
  )
}
