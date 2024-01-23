import styled from 'styled-components'
import { CloseOutlined, SearchOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useThrottle } from '../hooks/useThrottle'
import { useSearchParams } from '../hooks/useSearchParams'

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

const Search: React.FC = () => {
  const { updateSearchParams, searchParams } = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('title') || '')

  const throttledQuery = useThrottle(query)

  useEffect(() => {
    updateSearchParams({ title: throttledQuery })
  }, [throttledQuery, updateSearchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleClear = () => {
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
