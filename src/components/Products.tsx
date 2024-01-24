import styled from 'styled-components'
import SmallSpinner from './Spinner'
import Carousel from './Carousel'
import { useGetProductsQuery } from '../features/api/storeApi'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
`
const Products: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery({})

  if (isError) {
    return <div>Something went wrong</div>
  }

  return (
    <Container>
      {isLoading ? <SmallSpinner /> : <Carousel items={products} />}
    </Container>
  )
}

export default Products
