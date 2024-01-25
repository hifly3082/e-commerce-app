import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories'
    }),
    getProducts: builder.query({
      query: (searchParams) => ({
        url: '/products/?',
        params: searchParams
      })
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductByIdQuery
} = storeApi
