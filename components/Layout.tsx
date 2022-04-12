import Footer from './Footer'
import Header from './Header'

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode
	home?: boolean
}) {
	return (
		<div>
			<Header />
			{home ? (
				<>
					<h1>BCiriak</h1>
				</>
			) : (
				<>
					<h2>Hello World</h2>
				</>
			)}
			<main>{children}</main>
			<Footer />
		</div>
	)
}
