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
  flex-wrap: wrap;
`

const Title = styled.h2`
  margin: 2rem auto 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`

const FavoritesPage: React.FC = () => {
  const favoriteItems = useSelector((state: IRootState) => state.favorites)

  return (
    <PageContainer>
      <Title>Favorites</Title>
      <Container>
        {favoriteItems.items.length ? (
          favoriteItems.items.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))
        ) : (
          <div>Start to add favorites</div>
        )}
      </Container>
    </PageContainer>
  )
}

export default FavoritesPage
