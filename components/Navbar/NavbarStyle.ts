import styled from 'styled-components'

import { COLORS, SPACING } from '../../styles/variables'

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  background: ${COLORS.primaryBg};
`

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: ${SPACING['3']};
  padding-bottom: ${SPACING['3']};

  @media (min-width: ${SPACING.md}) {
    max-width: ${SPACING['4xl']};
  } ;
`
