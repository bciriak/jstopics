import { GetStaticProps } from 'next'
import { getSortedArticlesData } from '../utils/articles'
import { ArticleList } from '../components/ArticleList'
import { ArticleInterface } from '../types/article'

export default function AllPosts({
	allArticles,
}: {
	allArticles: ArticleInterface[]
}) {
	return <div>{allArticles && <ArticleList articles={allArticles} />}</div>
}

export const getStaticProps: GetStaticProps = async () => {
	const allArticles = getSortedArticlesData()

	return {
		props: {
			allArticles,
		},
	}
}
