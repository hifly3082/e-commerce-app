import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const CartButton = styled.div`
  position: relative;
`

const CartQuantityContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
`

const CartQuantity = styled.div`
  font-size: 0.6rem;
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
        <ShoppingCartOutlinedIcon />
        <CartQuantityContainer>
          {cartQuantity > 0 && <CartQuantity>{cartQuantity}</CartQuantity>}
        </CartQuantityContainer>
      </CartButton>
    </>
  )
}

export default Cart
