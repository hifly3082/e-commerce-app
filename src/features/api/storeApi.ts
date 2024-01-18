import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'https://api.escuelajs.co/api/v1'

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/categories`
    }),
    getProducts: builder.query({
      query: (
        searchQuery?: string,
        categoryId?: number,
        priceMin?: number,
        priceMax?: number
      ) =>
        `/products/?title=${searchQuery}&price_min=${priceMin}&price_max=${priceMax}&categoryId=${categoryId}`
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`
    })
    // getProductByTitle: builder.query({
    //   query: (query) => `/products/?title=${query}`
    // }),
    // getProductByCategory: builder.query({
    //   query: (id) => `/products/?categoryId=${id}`
    // })
  })
})

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductQuery
  // useGetProductByTitleQuery,
  // useGetProductByCategoryQuery
} = storeApi
