import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdFavorite } from 'react-icons/md'
import styled from 'styled-components'

import { IRootState } from '../../types/types'
import CartLink from '../ui/CartLink'
import Switcher from '../ui/Switcher'

const HeaderContainer = styled.header`
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
  user-select: none;
`

const MainPage = styled(Link)`
  font-size: 2.8rem;
  color: var(--color-grey-800);
  text-decoration: none;
  letter-spacing: 1.6rem;

  transition: all 0.8s ease;

  &:hover {
    letter-spacing: 1px;
  }
`

const MenuContainer = styled.nav`
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

const FavoriteIcon = styled(MdFavorite)`
  width: 1.6rem;
  height: 1.6rem;
  transition: all 0.4s;

  &:hover {
    color: var(--color-main-600);
  }
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
            <MainPage to='home'>MAV</MainPage>
          </Logo>
        </LogoContainer>
        <MenuContainer>
          <MenuItem>
            <Link to='soon'>sign in</Link>
          </MenuItem>
          <MenuItem>
            <Link to='favorites'>
              <FavoriteIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='cart'>
              <CartLink cartQuantity={cartQuantity} />
            </Link>
          </MenuItem>
        </MenuContainer>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
