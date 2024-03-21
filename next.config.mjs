/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/articles/javascript-include-file',
        destination: '/javascript/javascript-include-file',
        permanent: true,
      },
      {
        source: '/articles/javascript-for-loops',
        destination: '/javascript/javascript-for-loops',
        permanent: true,
      },
      {
        source: '/articles/5-ways-to-install-nodejs-in-2019',
        destination: '/nodejs/5-ways-to-install-nodejs-in-2022',
        permanent: true,
      },
      {
        source: '/articles/5-ways-to-install-nodejs-in-2022',
        destination: '/nodejs/5-ways-to-install-nodejs-in-2022',
        permanent: true,
      },
      {
        source: '/articles/nodejs-and-koajs-hello-world-example',
        destination: '/web-frameworks/nodejs-and-koajs-hello-world-example',
        permanent: true,
      },
      {
        source: '/articles/single-page-application-example',
        destination: '/web-frameworks/single-page-application-example',
        permanent: true,
      },
      {
        source: '/articles/web-frameworks-what-are-they',
        destination: '/web-frameworks/web-frameworks-what-are-they',
        permanent: true,
      },
      {
        source: '/articles/useref-in-react',
        destination: '/reactjs/useref-in-react',
        permanent: true,
      },
      {
        source: '/articles/react-router-v6-redirect',
        destination: '/reactjs/react-router-v6-redirect',
        permanent: true,
      },
      {
        source: '/articles/vite-create-react-app',
        destination: '/reactjs/vite-create-react-app',
        permanent: true,
      },
      {
        source: '/articles/what-is-react-js',
        destination: '/reactjs/what-is-react-js',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/all-articles',
        permanent: true,
      },
      {
        source: '/js-topics',
        destination: '/all-topics',
        permanent: true,
      },
      {
        source: '/topics/javascript',
        destination: '/javascript',
        permanent: true,
      },
      {
        source: '/topics/web-frameworks',
        destination: '/web-frameworks',
        permanent: true,
      },
      {
        source: '/topics/nodejs',
        destination: '/nodejs',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
