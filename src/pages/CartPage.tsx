import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { cartSlice } from '../features/cart/cartSlice'
import { ICartItem, IRootState } from '../types/types'
import { useNavigate } from 'react-router'

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
  cursor: pointer;
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

const ItemQuantity = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #444;
`

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartState = useSelector((state: IRootState) => state.cart)

  const handleClearCart = () => {
    dispatch(cartSlice.actions.clearCart())
  }

  const handleRemoveItem = (item: ICartItem) => {
    dispatch(cartSlice.actions.removeItemFromCart(item))
  }

  const handleOverview = (id: number) => () => {
    navigate(`/product/${id}`)
  }

  const totalSum = cartState.items.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <Container>
      <Header>
        <h2>Cart</h2>
        <button onClick={handleClearCart}>Clear Cart</button>
      </Header>
      {cartState.items.map((item) => (
        <ItemContainer key={item.id}>
          <ItemImage
            src={item.images[0]}
            alt={item.title}
            onClick={handleOverview(item.id)}
          />
          <ItemDetails>
            <ItemName>{item.title}</ItemName>
            <ItemPrice>${item.price}</ItemPrice>
            <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
          </ItemDetails>
          <button onClick={() => handleRemoveItem(item)}>Remove</button>
        </ItemContainer>
      ))}
      <p>Total Sum: ${totalSum}</p>
    </Container>
  )
}

export default CartPage
