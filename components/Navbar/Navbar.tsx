import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  NavbarWrapper,
  NavbarContainer,
  Logo,
  NavItems,
  NavItem,
} from './NavbarStyle'
import Image from 'next/image'

export function Navbar() {
  const router = useRouter()

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo>
          <Link href="/" passHref>
            <a>JSTopics</a>
          </Link>
        </Logo>

        <NavItems>
          <NavItem>
            <Link href="/all-topics">
              <a className={router.pathname == '/all-topics' ? 'active' : ''}>
                Topics
              </a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/all-articles">
              <a className={router.pathname == '/all-posts' ? 'active' : ''}>
                All Articles
              </a>
            </Link>
          </NavItem>
        </NavItems>
      </NavbarContainer>
    </NavbarWrapper>
  )
}
