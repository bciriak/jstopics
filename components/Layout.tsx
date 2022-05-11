import Footer from './Footer'
import Header from './Header'

export default function Layout({
	// home, // TODO
	children,
}: {
	children: React.ReactNode
	home?: boolean
}) {
	return (
		<div>
			<Header />
			<div className='container w-full md:max-w-3xl mx-auto pt-20'>
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}
