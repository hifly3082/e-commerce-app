import styled from 'styled-components'
import SmallSpinner from './Spinner'
import { useGetProductsQuery } from '../features/api/storeApi'
import ProductItem from './ProductItem'
import { IProductItem } from '../types/types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
`

const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery({})

  if (isError) {
    return <div>Something went wrong</div>
  }

  return (
    <Container>
      <Title>Products</Title>
      {isLoading ? (
        <SmallSpinner />
      ) : (
        <ProductList>
          {products.slice(2, 11).map((item: IProductItem) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </ProductList>
      )}
    </Container>
  )
}

export default Products
