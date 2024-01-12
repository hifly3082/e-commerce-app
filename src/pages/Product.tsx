import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProductFetch } from '../api/fetch'

const Container = styled.div``

const Product: React.FC = () => {
  const { id } = useParams()
  const { product, loading, error } = useProductFetch(id)
  console.log(product)

  if (loading) return <div>loading</div>

  return (
    <Container>
      {id}
      {product.price}
    </Container>
  )
}

export default Product
