import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem } from '../../types/types'

interface ICartState {
  items: ICartItem[]
}

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
        existingItem.quantity += 1
      } else {
        state.items.push(action.payload)
      }
    },
    removeItemFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter(
        (item: ICartItem) => item.id !== action.payload.id
      )
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
