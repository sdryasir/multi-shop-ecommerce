import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    user:null,
    token:null
 }

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
})

export const { setUserInfo } = authSlice.actions
export default authSlice.reducer