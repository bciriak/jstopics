import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './NavbarStyle.module.scss'

export function Navbar() {
  const router = useRouter()

  return (
    <div className={`wrapper ${styles.wrapperBlack}`}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <a>JSTopics</a>
          </Link>
        </div>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/all-topics">
              <a
                className={
                  router.pathname == '/all-topics-delete' ? 'active' : ''
                }
              >
                Topics
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/all-articles">
              <a className={router.pathname == '/all-posts' ? 'active' : ''}>
                All Articles
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
