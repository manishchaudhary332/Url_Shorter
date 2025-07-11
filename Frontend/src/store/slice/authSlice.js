

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    // other states...
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user; // 👈 Check if this has 'username'
    },
    logout: (state) => {
      state.user = null;
    },
  }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
