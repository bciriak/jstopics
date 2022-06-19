import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface ArticleInterface {
  title: string
  date: string
  day: string
  month: string
  year: string
  excerpt: string
  id: string
  category: string
  slug: string
  readTime: number
  image: string
  imageAlt: string
  intro: string
  contentHtml: MDXRemoteSerializeResult
}
