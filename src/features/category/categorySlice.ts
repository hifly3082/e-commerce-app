import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useGetCategoriesQuery } from '../api/storeApi'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const { data } = useGetCategoriesQuery({})
    return data
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.loading = false
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false
        // state.error = action.error.message
      })
  }
})

export const {} = categorySlice.actions
export default categorySlice.reducer
