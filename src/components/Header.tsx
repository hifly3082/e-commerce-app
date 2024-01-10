import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  height: 4rem;
`

const Wrapper = styled.div`
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchBar = styled.div`
  border: 1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.4rem;
`

const Input = styled.input`
  border: none;
`

const LogoContainer = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: 700;
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
  return (
    <HeaderContainer>
      <Wrapper>
        <SearchContainer>
          <Language>EN</Language>
          <SearchBar>
            <Input placeholder='Find products' />
            <SearchOutlinedIcon />
          </SearchBar>
        </SearchContainer>
        <LogoContainer>
          <Logo>MAV</Logo>
        </LogoContainer>
        <MenuContainer>
          <MenuItem>register</MenuItem>
          <MenuItem>sign in</MenuItem>
          <MenuItem>
            <AddShoppingCartOutlinedIcon />
          </MenuItem>
        </MenuContainer>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
