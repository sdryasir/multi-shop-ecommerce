import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/api/',
    credentials:'include'
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
    }),
    addNewProduct: builder.mutation({
      query: (data) => ({
        url: `/new/product`,
        method: 'POST',
        body: data,
      })
  }),
})
})


export const { useGetAllProductsQuery, useAddNewProductMutation } = productApi