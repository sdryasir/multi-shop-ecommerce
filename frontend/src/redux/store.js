import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './features/product/productApi'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})