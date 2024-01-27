import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { ICartItem, ICartProps } from '../../types/types'

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
  color: var(--color-grey-800);
`

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--color-grey-800);
`

const ItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin: 0 3rem;
`

const ItemQuantity = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-grey-800);
  margin: 0 1rem;
`

const Button = styled.button`
  color: var(--color-grey-800);
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-500);
  border-radius: 5px;
  padding: 0.5rem;

  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: var(--color-grey-200);
  }
`

const Checkout = styled(Button)`
  margin-top: 1rem;
  background-color: var(--color-main-300);
  color: var(--color-grey-50);
  &:hover {
    background-color: var(--color-main-500);
  }
`

const Return = styled(Link)`
  text-decoration: none;
  color: var(--color-grey-800);
`

const Total = styled.div`
  text-align: right;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin: 0.6rem 0;
`

const Cart: React.FC<ICartProps> = ({
  onClearCart,
  onOverview,
  onRemoveItem,
  onIncreaseQty,
  onDecreaseQty,
  cartState
}) => {
  const shippingFee = 25
  const cartQuantity = cartState.items.length
  const totalSum = cartState.items.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    shippingFee
  )

  const handleOverview = (id: number) => () => {
    onOverview(id)
  }

  const handleRemoveItem = (item: ICartItem) => () => {
    onRemoveItem(item)
  }

  const handleIncrementQuantity = (item: ICartItem) => () => {
    onIncreaseQty(item)
  }

  const handleDecrementQuantity = (item: ICartItem) => () => {
    onDecreaseQty(item)
  }

  return (
    <Container>
      <Header>
        <h2>Cart {cartQuantity > 0 ? '' : 'is empty'}</h2>
        {cartQuantity > 0 && <Button onClick={onClearCart}>Clear Cart</Button>}
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
          <ItemPrice>$ {item.price * item.quantity}</ItemPrice>
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
