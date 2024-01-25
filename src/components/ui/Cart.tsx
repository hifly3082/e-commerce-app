import styled from 'styled-components'
import { MdOutlineShoppingCart } from 'react-icons/md'

const CartButton = styled.div`
  position: relative;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`

const CartQuantityContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
`

const CartQuantity = styled.div`
  font-size: 0.7rem;
  border-radius: 50%;
  color: #000;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid black;
`

const Cart = ({ cartQuantity }: { cartQuantity: number }) => {
  return (
    <>
      <CartButton>
        <MdOutlineShoppingCart />
        <CartQuantityContainer>
          {cartQuantity > 0 && <CartQuantity>{cartQuantity}</CartQuantity>}
        </CartQuantityContainer>
      </CartButton>
    </>
  )
}

export default Cart
