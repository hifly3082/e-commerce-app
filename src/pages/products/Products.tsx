import styled from 'styled-components'
import Filters from '../../components/ui/Filters'
import Search from '../../components/ui/Search'
import ProductsList from './components/ProductsList'

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

const Products = () => {
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
export default Products
