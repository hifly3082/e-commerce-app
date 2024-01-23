import styled from 'styled-components'

import Search from '../components/Search'
import Filters from '../components/Filters'
import ProductsList from './ProductsList'

import { useGetProductsQuery } from '../features/api/storeApi'
import { useThrottle } from '../hooks/useThrottle'
import { useSearchParams } from '../hooks/useSearchParams'
import { useLocation } from 'react-router-dom'

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
  flex-direction: column;
  align-items: center;
`

const ProductsPage: React.FC = () => {
  const { searchParams } = useSearchParams()

  const title = searchParams.get('title') || ''
  const categoryId = searchParams.get('categoryId') || ''
  const priceMin = useThrottle(searchParams.get('priceMin') || '')
  const priceMax = useThrottle(searchParams.get('priceMax') || '')

  const {
    data: products,
    isLoading,
    isError,
    isFetching
  } = useGetProductsQuery({
    title,
    price_min: priceMin,
    price_max: priceMax,
    categoryId
  })

  return (
    <PageContainer>
      <Search />
      <Container>
        <Filters />
        <ProductsList
          products={products}
          isLoading={isLoading || isFetching}
          isError={isError}
        />
      </Container>
    </PageContainer>
  )
}

export default ProductsPage
