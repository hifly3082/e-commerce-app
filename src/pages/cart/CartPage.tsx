import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

import { cartSlice } from '../../features/cart/cartSlice'
import Cart from './Cart'
import { ICartItem, IRootState } from '../../types/types'

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartState = useSelector((state: IRootState) => state.cart)

  const handleClearCart = () => {
    dispatch(cartSlice.actions.clearCart())
    toast.success('All items are removed from the cart')
  }

  const handleOverview = (id: number) => {
    navigate(`/products/${id}`)
  }

  const handleRemoveItem = (item: ICartItem) => {
    dispatch(cartSlice.actions.removeItemFromCart(item))
    toast.success('Item successfully deleted from to the cart')
  }

  const handleIncrementQuantity = (item: ICartItem) => {
    dispatch(cartSlice.actions.incrementQuantity(item))
  }

  const handleDecrementQuantity = (item: ICartItem) => {
    dispatch(cartSlice.actions.decrementQuantity(item))
  }

  return (
    <Cart
      onClearCart={handleClearCart}
      onOverview={handleOverview}
      onRemoveItem={handleRemoveItem}
      onIncreaseQty={handleIncrementQuantity}
      onDecreaseQty={handleDecrementQuantity}
      cartState={cartState}
    />
  )
}

export default CartPage
