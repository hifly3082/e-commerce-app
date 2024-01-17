import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { IRootState } from '../types/types'
import Cart from './Cart'
import Switcher from './Switcher'

const HeaderContainer = styled.div`
  height: 4rem;
`

const Wrapper = styled.div`
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ModeContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: 700;
  user-select: none;
`

const MenuContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  margin-left: 1.6rem;
  cursor: pointer;
`

const Header = () => {
  const cartState = useSelector((state: IRootState) => state.cart)
  const cartQuantity = cartState.items.length

  return (
    <HeaderContainer>
      <Wrapper>
        <ModeContainer>
          <Switcher />
          <Language>EN</Language>
        </ModeContainer>
        <LogoContainer>
          <Logo>
            <Link
              to='home'
              style={{ textDecoration: 'none', color: 'initial' }}>
              MAV
            </Link>
          </Logo>
        </LogoContainer>
        <MenuContainer>
          <MenuItem>register</MenuItem>
          <MenuItem>sign in</MenuItem>
          <MenuItem>
            <Link to='cart'>
              <Cart cartQuantity={cartQuantity} />
            </Link>
          </MenuItem>
        </MenuContainer>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
