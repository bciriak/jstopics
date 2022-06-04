import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import Script from 'next/script'

export function Layout({
  // home, // TODO
  children,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
