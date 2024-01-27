import styled from 'styled-components'
import { MdOutlineShoppingCart } from 'react-icons/md'

const CartButton = styled.div`
  position: relative;

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  &:hover {
    color: var(--color-main-500);
  }
`

const CartQuantityContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 10%);
`

const CartQuantity = styled.div`
  font-size: 0.8rem;
  border-radius: 50%;
  color: var(--color-grey-100);
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: var(--color-grey-900);
  border: 1px solid black;
`

const CartLink = ({ cartQuantity }: { cartQuantity: number }) => {
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

export default CartLink
