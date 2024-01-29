import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast'

import { cartSlice } from '../../features/cart/cartSlice'
import { ICartItem, IRootState } from '../../types/types'
import Cart from './Cart'

const SHIPPING_FEE = 25

const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cartItems = useSelector((state: IRootState) => state.cart.items)
  const cartLength = cartItems.length
  const totalSum = cartItems.reduce(
    (sum: number, item) => sum + item.price * item.quantity,
    SHIPPING_FEE
  )

  const handleClearCart = () => {
    dispatch(cartSlice.actions.clearCart())
    toast.success('All items are removed from the cart')
  }

  const handleOverviewById = (id: number) => {
    navigate(`/products/${id}`)
  }

  const handleRemoveItemById = (id: number) => {
    dispatch(cartSlice.actions.removeItemFromCart(id))
    toast.success('Item deleted from to the cart')
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
      onOverviewById={handleOverviewById}
      onRemoveItemById={handleRemoveItemById}
      onIncreaseQty={handleIncrementQuantity}
      onDecreaseQty={handleDecrementQuantity}
      shippingFee={SHIPPING_FEE}
      cartItems={cartItems}
      cartLength={cartLength}
      totalSum={totalSum}
    />
  )
}

export default CartPage
