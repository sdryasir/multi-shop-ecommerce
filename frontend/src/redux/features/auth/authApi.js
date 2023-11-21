import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8000/api/',
    credentials:'include'
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/auth/register`,
        method: 'POST',
        body: data,
      })
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: 'POST',
        body: data,
      })
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: 'POST',
      })
    })
})
})


export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi