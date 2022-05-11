import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
// import { remark } from 'remark'
// import html from 'remark-html'
import _ from 'lodash'

interface Topic {
  name: string
  count: number
  cssClass: string
  slug: string
}

const articlesDirectory = path.join(process.cwd(), 'articles')

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')

    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    }
  })

  return allArticlesData.sort((a, b) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
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
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const contentHtml = await serialize(matterResult.content)

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}

export async function getTopicArticles(slug: string) {
  const fileNames = fs.readdirSync(articlesDirectory)

  return _.compact(
    fileNames.map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents)

      if (_.includes(matterResult.data.topics, slug)) {
        return { id, ...(matterResult.data as { date: string; title: string }) }
      }
    })
  )
}

export function getTopicSlugs() {
  const fileNames = fs.readdirSync(articlesDirectory)

  const allTopics = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return matterResult.data.topics
  })

  return _.concat(...allTopics).map((name) => {
    return {
      params: {
        slug: name,
      },
    }
  })
}

export function getAllTopics() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const topics: any = {}
  const topicsObj: Topic[] = []

  const allTopics = fileNames.reduce((arr, fileName) => {
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return arr.concat(matterResult.data.topics)
  }, [])

  allTopics.map((topic) => {
    if (topic in topics) {
      topics[topic] += 1
    } else {
      topics[topic] = 1
    }
  })

  for (let topic in topics) {
    topicsObj.push({
      name: _.capitalize(topic.replace(/-/g, ' ')),
      count: topics[topic],
      cssClass: _.camelCase(topic),
      slug: _.kebabCase(topic),
    })
  }

  return topicsObj
}
