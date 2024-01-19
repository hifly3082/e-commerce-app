import { useState } from 'react'
import styled from 'styled-components'

import Search from '../components/Search'
import Filters from '../components/Filters'
import ProductsList from './ProductsList'
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
  const location = useLocation()
  const categoryId = location.state?.categoryId || ''
  const [searchParams, setSearchParams] = useState({
    title: ''
  })

  const [filterParams, setFilterParams] = useState({
    priceMin: '',
    priceMax: '',
    categoryId: ''
  })

  const handleSearchChange = (newSearchParams: any) => {
    setSearchParams(newSearchParams)
  }

  const handleFiltersChange = (newFilterParams: any) => {
    setFilterParams(newFilterParams)
  }

  return (
    <PageContainer>
      <Search onSearchChange={handleSearchChange} />
      <Container>
        <Filters
          defaultCategoryId={categoryId}
          onFiltersChange={handleFiltersChange}
        />
        <ProductsList searchParams={searchParams} filterParams={filterParams} />
      </Container>
    </PageContainer>
  )
}

export default ProductsPage
