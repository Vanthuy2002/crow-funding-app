import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined,
  },
  reducers: {
    authLogin: (state, actions) => {
      state, actions.payload;
    },
    authRegister: (state, actions) => ({ ...state, ...actions.payload }),
  },
});

export default authSlice.reducer;
export const { authLogin, authRegister } = authSlice.actions;
