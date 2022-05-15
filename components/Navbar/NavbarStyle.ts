import styled from 'styled-components'
import { Container, Wrapper } from '../Common/CommonStyle'

export const NavbarWrapper = styled(Wrapper)`
  background: black;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  a {
  }
`

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
`

export const NavItem = styled.li`
  margin-left: 1rem;

  font-weight: bold;

  a {
    color: white;
  }

  .active {
    text-decoration: underline;
  }
`
