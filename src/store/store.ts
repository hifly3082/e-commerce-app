import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { storeApi } from '../features/api/storeApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartSlice } from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
    cart: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

setupListeners(store.dispatch)
