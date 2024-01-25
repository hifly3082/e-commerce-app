import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ICartItem, IRootState } from '../../types/types'
import { cartSlice } from '../../features/cart/cartSlice'
import { Link, NavLink } from 'react-router-dom'
import { ICartProps } from './CartPage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  max-width: 900px;
  margin: 3rem auto 0;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 22rem repeat(2, minmax(100px, 1fr)) 100px;
  align-items: center;
  margin-bottom: 0.8rem;
`

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
`

const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 1rem;
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  margin: 0 3rem;
`

const ItemQuantity = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
`

const Checkout = styled(Button)`
  background-color: teal;
  color: #fff;
  margin-top: 1rem;
`

const Return = styled(Link)`
  text-decoration: none;
  color: #000;
`

const Total = styled.div`
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  margin: 0.6rem 0;
`

const Cart: React.FC<ICartProps> = () => {
  return (
    <Container>
      <Header>
        <h2>Cart {cartQuantity > 0 ? '' : 'is empty'}</h2>
        {cartQuantity > 0 && (
          <Button onClick={handleClearCart}>Clear Cart</Button>
        )}
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
      <Total>Shipping fee: $ {cartQuantity > 0 ? shippingFee : 0}</Total>
      <Total>Total Sum: $ {cartQuantity > 0 ? totalSum : 0}</Total>
      {cartQuantity > 0 ? (
        <Checkout>Proceed to checkout</Checkout>
      ) : (
        <Button>
          <Return to='/home'>Return to shopping</Return>
        </Button>
      )}
    </Container>
  )
}
export default Cart
