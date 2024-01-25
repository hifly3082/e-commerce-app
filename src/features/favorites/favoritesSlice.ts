import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductItem } from '../../types/types'

interface IFavoritesState {
  items: IProductItem[]
}

const initialState: IFavoritesState = {
  items: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IProductItem>) => {
      state.items.push(action.payload)
    },
    removeFromFavorites: (state, action: PayloadAction<IProductItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
