import styled from 'styled-components'
import ProductItem from './ProductItem'
import { xs } from '../styles/responsive'
import { useGetProducts } from '../api/fetch'
import SmallSpinner from './Spinner'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${xs} {
    grid-template-columns: 1fr;
  }
`

const Title = styled.h2`
  margin: 2rem;
  font-size: 2.4rem;
  font-weight: 600;
`

const Products = () => {
  const { products, loading } = useGetProducts()

  if (loading) return <SmallSpinner />

  return (
    <>
      <Container>
        <Title>Products</Title>
      </Container>
      <Container>
        {products.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  )
}

export default Products
