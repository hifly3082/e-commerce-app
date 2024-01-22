import styled from 'styled-components'
import { CloseOutlined, SearchOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useThrottle } from '../hooks/useThrottle'

interface SearchProps {
  setSearchParams: (searchParams: Record<string, string>) => void
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

const Search: React.FC<SearchProps> = ({ setSearchParams }) => {
  const [query, setQuery] = useState('')

  const throttledQuery = useThrottle(query)

  // const handleChangeSearch = () => {
  // }

  useEffect(() => {
    setSearchParams({ title: throttledQuery })
    // handleChangeSearch()
    console.log('searchComponent')
  }, [throttledQuery])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchParams({ title: e.target.value })
    setQuery(e.target.value)
  }

  const handleClear = () => {
    // setSearchParams({ title: '' })
    setQuery('')
  }

  return (
    <SearchContainer>
      <SearchBar>
        <Input
          type='text'
          placeholder='Find products'
          value={query}
          onChange={handleChange}
        />
        {query ? (
          <span>
            <CloseOutlined
              style={{ cursor: 'pointer' }}
              onClick={handleClear}
            />
          </span>
        ) : (
          <SearchOutlined />
        )}
      </SearchBar>
    </SearchContainer>
  )
}
export default Search
