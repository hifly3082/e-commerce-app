import styled from 'styled-components'

import { NavLink } from 'react-router-dom'
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

const CheckoutButton = styled(Button)`
  background-color: var(--color-main-300);
  margin-top: 1rem;

  &:hover {
    background-color: var(--color-main-500);
  }
`

const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--color-grey-800);
  align-self: flex-end;
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
  onOverviewById,
  onRemoveItemById,
  onIncreaseQty,
  onDecreaseQty,
  shippingFee,
  cartItems,
  cartLength,
  totalSum
}) => {
  const handleOverviewById = (id: number) => () => {
    onOverviewById && onOverviewById(id)
  }

  const handleRemoveItem = (id: number) => () => {
    onRemoveItemById && onRemoveItemById(id)
  }

  const handleIncrementQuantity = (item: ICartItem) => () => {
    onIncreaseQty && onIncreaseQty(item)
  }

  const handleDecrementQuantity = (item: ICartItem) => () => {
    onDecreaseQty && onDecreaseQty(item)
  }

  return (
    <Container>
      <Header>
        <h2>Cart {cartLength > 0 ? '' : 'is empty'}</h2>
        {cartLength > 0 && <Button onClick={onClearCart}>Clear Cart</Button>}
      </Header>
      {cartItems.map((item) => (
        <ItemContainer key={item.id}>
          <ItemImage
            src={item.images[0]}
            alt={item.title}
            onClick={handleOverviewById(item.id)}
          />
          <ItemName>{item.title}</ItemName>
          <Quantity>
            <Button onClick={handleDecrementQuantity(item)}>-</Button>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <Button onClick={handleIncrementQuantity(item)}>+</Button>
          </Quantity>
          <ItemPrice>$ {item.price * item.quantity}</ItemPrice>
          <Button onClick={handleRemoveItem(item.id)}>Remove</Button>
        </ItemContainer>
      ))}

      {cartLength > 0 ? (
        <>
          <hr />
          <Total>Shipping fee: $ {cartLength > 0 ? shippingFee : 0}</Total>
          <Total>Total Sum: $ {cartLength > 0 ? totalSum : 0}</Total>

          <Link to='/soon'>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
          </Link>
        </>
      ) : (
        <Link to='/products'>
          <Button>Return to shopping </Button>
        </Link>
      )}
    </Container>
  )
}
export default Cart
