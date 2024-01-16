import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { storeApi } from '../features/api/storeApi'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer
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
