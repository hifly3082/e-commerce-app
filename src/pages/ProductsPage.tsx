import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Search from '../components/Search'
import Filters from '../components/Filters'
import ProductsList from './ProductsList'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useGetProductsQuery } from '../features/api/storeApi'
import { useThrottle } from '../hooks/useThrottle'

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
  const location = useLocation()
  // const categoryId = location.state?.categoryId || ''
  const [searchParams, setSearchParams] = useSearchParams()

  const title = searchParams.get('title') || ''
  const priceMin = useThrottle(searchParams.get('priceMin') || '')
  const priceMax = useThrottle(searchParams.get('priceMax') || '')
  const categoryId = searchParams.get('categoryId') || ''
  const {
    data: products,
    isLoading,
    isError
  } = useGetProductsQuery({
    title,
    price_min: priceMin,
    price_max: priceMax,
    categoryId
  })

  return (
    <PageContainer>
      <Search setSearchParams={setSearchParams} />
      <Container>
        <Filters
          // defaultCategoryId={categoryId}
          setSearchParams={setSearchParams}
        />
        <ProductsList
          // searchParams={searchParams}
          products={products}
          isLoading={isLoading}
          isError={isError}
        />
      </Container>
    </PageContainer>
  )
}

export default ProductsPage
