import styled from 'styled-components'
import { CloseOutlined, SearchOutlined } from '@mui/icons-material'

interface ISearchProps {
  query: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
}

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`

const SearchBar = styled.div`
  position: relative;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding: 0.6rem;
  width: 100%;
  margin-bottom: 3rem;
`

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
`

const Search: React.FC<ISearchProps> = ({ query, onChange, onClear }) => {
  return (
    <SearchContainer>
      <SearchBar>
        <Input
          type='text'
          placeholder='Find products'
          value={query}
          onChange={(query) => onChange(query)}
        />
        {query ? (
          <span>
            <CloseOutlined style={{ cursor: 'pointer' }} onClick={onClear} />
          </span>
        ) : (
          <SearchOutlined />
        )}
      </SearchBar>
    </SearchContainer>
  )
}
export default Search
