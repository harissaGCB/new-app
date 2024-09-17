import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  login: [],
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.login = [];
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.login = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.login = [];
    },
  },
});
export const AuthAction = AuthSlice.actions;
export default AuthSlice;
