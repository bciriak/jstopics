import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

export function Layout({
  // home, // TODO
  children,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
