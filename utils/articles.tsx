import path from 'path'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

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

	// const processedContent = await remark()
	// 	.use(html)
	// 	.process(matterResult.content)
	// const contentHtml = processedContent.toString()

	const contentHtml = await serialize(matterResult.content)

	// Combine the data with the slug and contentHtml
	return {
		slug,
		contentHtml,
		...(matterResult.data as { date: string; title: string }),
	}
}
