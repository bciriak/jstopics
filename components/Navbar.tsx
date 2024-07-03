import Link from 'next/link'
import { useRouter } from 'next/router'

export function Navbar() {
  const router = useRouter()

  return (
    <div className="w-full bg-black">
      <div className="container flex justify-between">
        <div className="py-8">
          <Link
            href="/"
            passHref
            className="text-white text-xl font-black no-underline"
          >
            JSTopics
          </Link>
        </div>

        <ul className="flex items-center text-white font-bold">
          <li className="ml-4 list-none text-white">
            <Link legacyBehavior href="/all-topics">
              <a
                className={` no-underline
                  ${router.pathname == '/all-topics-delete' ? 'active' : ''}
                `}
              >
                Topics
              </a>
            </Link>
          </li>
          <li className="ml-4 list-none text-white">
            <Link legacyBehavior href="/all-articles">
              <a
                className={`no-underline ${
                  router.pathname == '/all-posts' ? 'active' : ''
                }`}
              >
                All Articles
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
