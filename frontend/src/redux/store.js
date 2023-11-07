import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productApi } from './features/product/productApi';
import { authApi } from './features/auth/authApi';
import authSlice from './features/auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'user',
  storage,
}


const rootReducer = combineReducers({
    auth:authSlice,
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]),
});

export const persistor = persistStore(store);
