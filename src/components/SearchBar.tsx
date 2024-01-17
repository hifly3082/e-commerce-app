import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import styled from 'styled-components'

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

const Search: React.FC = () => {
  return (
    <SearchBar>
      <Input placeholder='Find products' />
      <SearchOutlinedIcon />
    </SearchBar>
  )
}
export default Search
