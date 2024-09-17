import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  analysis: [],
  error: null,
};

const analysisSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    analysisRequest: (state, action) => {
      state.loading = true;
      state.error = null;
      state.analysis = [];
    },
    analysisSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.analysis = action.payload;
    },
    analysisFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.analysis = [];
    },
  },
});
export const analysisAction = analysisSlice.actions;
export default analysisSlice;
