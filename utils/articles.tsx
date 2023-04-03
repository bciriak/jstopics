import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import capitalize from 'lodash/capitalize'
import camelCase from 'lodash/camelCase'
import kebabCase from 'lodash/kebabCase'
import compact from 'lodash/compact'
import uniq from 'lodash/uniq'
import moment from 'moment'

import { ArticleInterface } from '../types/article.types'

interface Topic {
  name: string
  count: number
  cssClass: string
  slug: string
}

const articlesDirectory = path.join(process.cwd(), 'articles')

function getArticleInfo(fileName: string, isSlug = false) {
  if (isSlug) {
    fileName = fileName + '.mdx'
  }

  const id = fileName.replace(/\.mdx$/, '')
  const fullPath = path.join(articlesDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const readTime =
    getReadTime(matterResult.content) < 15
      ? getReadTime(matterResult.content)
      : 15
  const formattedDate = getFormattedDate(
    moment(matterResult.data.date, 'YYYY-MM-DD')
  )

  return { id, readTime, formattedDate, matterResult }
}

function getFormattedDate(date: moment.Moment) {
  const day = date.format('DD')
  const month = date.format('MMM').toUpperCase()
  const year = date.format('YYYY')

  return { day, month, year }
}

function getReadTime(content: string) {
  return Math.floor(content.split(' ').length / 150)
}

function sortArticlesByDate(articles: ArticleInterface[]) {
  return articles.sort((a, b) => {
    if (moment(a.date) < moment(b.date)) {
      return 1
    } else if (moment(a.date) > moment(b.date)) {
      return -1
    } else {
      return 0
    }
  })
}

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map((fileName) => {
    const articleInfo = getArticleInfo(fileName)

    return {
      ...(articleInfo.matterResult.data as ArticleInterface),
      ...articleInfo.formattedDate,
      slug: fileName.replace(/\.mdx$/, ''),
      id: articleInfo.id,
      readTime: articleInfo.readTime,
    }
  })

  return sortArticlesByDate(allArticlesData)
}

export function getAllArticleSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ''),
      },
    }
  })
}

export async function getArticleData(slug: string) {
  const articleInfo = getArticleInfo(slug, true)
  const contentHtml = await serialize(articleInfo.matterResult.content)

  return {
    ...(articleInfo.matterResult.data as ArticleInterface),
    ...articleInfo.formattedDate,
    slug,
    contentHtml,
    readTime: articleInfo.readTime,
  }
}

export async function getTopicArticles(slug: string) {
  const fileNames = fs.readdirSync(articlesDirectory)

  const articles = compact(
    fileNames.map((fileName) => {
      const articleInfo = getArticleInfo(fileName)

      if (articleInfo.matterResult.data.category === slug) {
        return {
          ...(articleInfo.matterResult.data as ArticleInterface),
          ...articleInfo.formattedDate,
          id: articleInfo.id,
          readTime: articleInfo.readTime,
          slug,
        }
      }
    })
  )

  return sortArticlesByDate(articles)
}

export function getTopic(slug: string) {
  return {
    name: capitalize(slug.replace(/-/g, ' ')),
    cssClass: camelCase(slug),
    slug: kebabCase(slug),
  }
}

export function getTopicsSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory)

  const allTopics = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return matterResult.data.category
  })

  return uniq(allTopics).map((name) => {
    return {
      params: {
        slug: name,
        title: name.replace('-', ' '),
      },
    }
  })
}

export function getAllCategories() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const topics: any = {}
  const topicsObj: Topic[] = []

  const allTopics = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return matterResult.data.category
  })

  allTopics.map((topic) => {
    if (topic in topics) {
      topics[topic] += 1
    } else {
      topics[topic] = 1
    }
  })

  for (let topic in topics) {
    topicsObj.push({
      name: capitalize(topic.replace(/-/g, ' ')),
      count: topics[topic],
      cssClass: camelCase(topic),
      slug: kebabCase(topic),
    })
  }

  return topicsObj
}
