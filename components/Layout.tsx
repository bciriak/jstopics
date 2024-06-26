import { Noto_Sans } from 'next/font/google'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import Script from 'next/script'
import Head from 'next/head'

const inter = Noto_Sans({
  weight: ['100', '200', '300', '400', '600'],
  style: 'normal',
  subsets: ['latin'],
})

export function Layout({
  children,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={'https://www.googletagmanager.com/gtag/js?id=G-XW89W5BEYW'}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-XW89W5BEYW', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      {process.env.NEXT_PUBLIC_SHOW_ANALYTICS === 'true' && (
        <Script
          async
          defer
          data-website-id="9ce0296d-e697-42ac-a587-78a197e87b5a"
          src="https://umami.jstopics.com/umami.js"
        ></Script>
      )}
      <Head>
        <title key="title">
          JSTopics is all about JavaScript, TypeScript, React and all things
          related
        </title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <main className={inter.className}>{children}</main>
      <Footer />
    </>
  )
}
