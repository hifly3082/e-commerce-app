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
      {isLoading ? (
        <SmallSpinner />
      ) : (
        <ProductList>
          {products.slice(2, 10).map((item: IProductItem) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </ProductList>
      )}
    </Container>
  )
}

export default Products
