import styled from 'styled-components'

import SmallSpinner from '../Spinner'
import Carousel from '../Carousel'
import { useGetProductsQuery } from '../../../features/api/storeApi'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 1.5rem;
  max-width: 1200px;
`

const Error = styled.p`
  padding: 1rem;
`

const ProductsCarousel: React.FC = () => {
  const {
    data: products,
    isLoading,
    isFetching,
    isError
  } = useGetProductsQuery({})

  if (isLoading || isFetching) return <SmallSpinner />
  if (isError) return <Error>Something went wrong</Error>

  return (
    <Container>
      <Carousel items={products} />
    </Container>
  )
}

export default ProductsCarousel
