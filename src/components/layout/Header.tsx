import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdFavorite } from 'react-icons/md'
import { IRootState } from '../../types/types'
import Cart from '../ui/Cart'
import Switcher from '../ui/Switcher'

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

const MainPage = styled(Link)`
  text-decoration: none;
  color: var(--color-grey-900);
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

const FavoriteIcon = styled(MdFavorite)`
  width: 1.6rem;
  height: 1.6rem;
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
          <MenuItem>sign in</MenuItem>
          <MenuItem>
            <Link to='favorites'>
              <FavoriteIcon />
            </Link>
          </MenuItem>
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
