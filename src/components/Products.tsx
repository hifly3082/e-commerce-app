import styled from 'styled-components'
import { products } from '../data'
import ProductItem from './ProductItem'
import { xs } from '../styles/responsive'

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
  margin: auto;
`

const Products = () => {
  return (
    <>
      <Container>
        <Title>Products</Title>
        {products.map((item) => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  )
}

export default Products
