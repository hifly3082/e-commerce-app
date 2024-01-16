import React from 'react'
import styled from 'styled-components'

interface CartPageProps {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`

const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`

const ItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
`

const CartPage: React.FC<CartPageProps> = () => {
  const items = [
    {
      id: 1,
      name: 'Item 1',
      image: 'https://example.com/item1.jpg',
      price: 19.99
    },
    {
      id: 2,
      name: 'Item 2',
      image: 'https://example.com/item2.jpg',
      price: 29.99
    },
    {
      id: 3,
      name: 'Item 3',
      image: 'https://example.com/item3.jpg',
      price: 39.99
    }
  ]

  return (
    <Container>
      <Header>
        <h2>Cart</h2>
        <button>Clear Cart</button>
      </Header>
      {items.map((item) => (
        <ItemContainer key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price}</ItemPrice>
          </ItemDetails>
        </ItemContainer>
      ))}
    </Container>
  )
}

export default CartPage
