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
        source: '/javascript/javascript-include-file',
        destination: '/articles/javascript-include-file',
        permanent: true,
      },
      {
        source: '/javascript/javascript-for-loops',
        destination: '/articles/javascript-for-loops',
        permanent: true,
      },
      {
        source: '/nodejs/5-ways-to-install-nodejs-in-2019',
        destination: '/articles/5-ways-to-install-nodejs-in-2022',
        permanent: true,
      },
      {
        source: '/web-frameworks/nodejs-and-koajs-hello-world-example',
        destination: '/articles/nodejs-and-koajs-hello-world-example',
        permanent: true,
      },
      {
        source: '/web-frameworks/single-page-application-example',
        destination: '/articles/single-page-application-example',
        permanent: true,
      },
      {
        source: '/web-frameworks/web-frameworks-what-are-they',
        destination: '/articles/web-frameworks-what-are-they',
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
        source: '/javascript',
        destination: '/topics/javascript',
        permanent: true,
      },
      {
        source: '/web-frameworks',
        destination: '/topics/web-frameworks',
        permanent: true,
      },
      {
        source: '/nodejs',
        destination: '/topics/nodejs',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
