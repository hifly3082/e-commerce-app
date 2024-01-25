import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { IRootState } from '../../types/types'
import ProductItem from '../../components/ui/ProductItem'

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
  align-items: center;
`
const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const ProductsPage: React.FC = () => {
  const favoriteItems = useSelector((state: IRootState) => state.favorites)

  return (
    <PageContainer>
      <Title>Favorites</Title>
      <Container>
        {favoriteItems.items.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Container>
    </PageContainer>
  )
}

export default ProductsPage
