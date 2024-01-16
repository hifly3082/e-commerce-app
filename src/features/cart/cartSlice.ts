import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({ id, name, price, quantity })
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions

export const selectItems = (state: RootState) => state.cart.items

export default cartSlice.reducer
