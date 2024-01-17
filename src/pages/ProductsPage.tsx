import styled from 'styled-components'
import Products from '../components/Products'
import Filters from '../components/Filters'

const PageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`

const FiltersColumn = styled.div`
  width: 15vw;
  padding: 1rem;
`

const ProductsColumn = styled.div`
  width: 85vw;
  padding: 1rem;
`
const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const ProductsPage: React.FC = () => {
  return (
    <>
      <Title>Products</Title>
      <PageContainer>
        <FiltersColumn>
          <Filters />
        </FiltersColumn>
        <ProductsColumn>
          <Products />
        </ProductsColumn>
      </PageContainer>
    </>
  )
}

export default ProductsPage
