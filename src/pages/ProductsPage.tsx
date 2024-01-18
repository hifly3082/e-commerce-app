gitimport { useState } from 'react'
import styled from 'styled-components'

import { IProductItem } from '../types/types'
import { useGetProductsQuery } from '../features/api/storeApi'
import { useThrottle } from '../hooks/useThrottle'
import ProductItem from '../components/ProductItem'
import SmallSpinner from '../components/Spinner'
import Search from '../components/Search'
import Filters from '../components/Filters'
import { useParams } from 'react-router-dom'

const PageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const NotFound = styled.p`
  padding: 1rem;
`

const ProductsPage: React.FC = () => {
  const { categoryId } = useParams()
  const [query, setQuery] = useState('')
  const throttledQuery = useThrottle(query)
  const {
    data: products,
    isLoading,
    isError
  } = useGetProductsQuery(throttledQuery)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleInputClear = () => setQuery('')

  return (
    <PageContainer>
      <Search
        query={query}
        onChange={handleInputChange}
        onClear={handleInputClear}
      />
      <Container>
        <Filters />
        {products?.length > 0 ? (
          <Products>
            {isLoading && <SmallSpinner />}
            {isError && <p>Error fetching data</p>}
            {products?.map((item: IProductItem) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </Products>
        ) : (
          <NotFound>Products not found</NotFound>
        )}
      </Container>
    </PageContainer>
  )
}

export default ProductsPage
