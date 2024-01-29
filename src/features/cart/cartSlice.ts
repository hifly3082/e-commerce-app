import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, ICartState } from '../../types/types'

const initialState: ICartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.items.find(
        (item: ICartItem) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
    incrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find(
        (item: ICartItem) => item.id === action.payload.id
      )
      if (item) item.quantity += 1
    },
    decrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.items.find(
        (item: ICartItem) => item.id === action.payload.id
      )
      if (item && item.quantity >= 2) item.quantity -= 1
    }
  }
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions

export default cartSlice.reducer
