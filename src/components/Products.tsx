import styled from 'styled-components'
import { products } from '../data'
import ProductItem from './ProductItem'
import { mobile } from '../styles/responsive'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${mobile} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
