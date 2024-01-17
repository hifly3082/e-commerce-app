import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ICartItem, IRootState } from '../types/types'
import { cartSlice } from '../features/cart/cartSlice'

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
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`

const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`

const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
`

const ItemQuantity = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  margin-right: 10px;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
`

const Checkout = styled(Button)`
  background-color: teal;
  color: #fff;
`

const Total = styled.div`
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  margin: 2rem 1rem 1rem;
`

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartState = useSelector((state: IRootState) => state.cart)
  const cartQuantity = cartState.items.length
  const totalSum = cartState.items.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    0
  )

  const handleClearCart = () => {
    dispatch(cartSlice.actions.clearCart())
  }

  const handleRemoveItem = (item: ICartItem) => () => {
    dispatch(cartSlice.actions.removeItemFromCart(item))
  }

  const handleOverview = (id: number) => () => {
    navigate(`/product/${id}`)
  }

  const handleIncrementQuantity = (item: ICartItem) => () => {
    dispatch(cartSlice.actions.incrementQuantity(item))
  }

  const handleDecrementQuantity = (item: ICartItem) => () => {
    dispatch(cartSlice.actions.decrementQuantity(item))
  }

  return cartQuantity > 0 ? (
    <Container>
      <Header>
        <h2>Cart</h2>
        <Button onClick={handleClearCart}>Clear Cart</Button>
      </Header>
      {cartState.items.map((item) => (
        <ItemContainer key={item.id}>
          <ItemImage
            src={item.images[0]}
            alt={item.title}
            onClick={handleOverview(item.id)}
          />

          <ItemName>{item.title}</ItemName>
          <Quantity>
            <Button onClick={handleDecrementQuantity(item)}>-</Button>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <Button onClick={handleIncrementQuantity(item)}>+</Button>
          </Quantity>
          <ItemPrice>${item.price * item.quantity}</ItemPrice>

          <Button onClick={handleRemoveItem(item)}>Remove</Button>
        </ItemContainer>
      ))}
      <hr />
      <Total>Total Sum: ${totalSum}</Total>
      <Checkout>Proceed to checkout</Checkout>
    </Container>
  ) : (
    <Container>
      <Header>
        <h2>Cart is empty </h2>
      </Header>
    </Container>
  )
}

export default CartPage
