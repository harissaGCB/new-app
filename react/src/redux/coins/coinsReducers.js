import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [],
  coinsLoading: false,
  coinsError: "",
  coinDesc: [],
  coinDescLoading: false,
  coinDescError: "",
};

const coinsSlice = createSlice({
  name: "Coins",
  initialState,
  reducers: {
    fetchCoinsRequest(state) {
      state.coinsLoading = true;
      state.coins = [];
      state.coinsError = "";
    },

    fetchCoinsSuccess(state, action) {
      state.coinsLoading = false;
      state.coins = action.payload;
      state.coinsError = "";
    },

    fetchCoinsFail(state, action) {
      state.coinsLoading = false;
      state.coins = [];
      state.coinsError = action.payload;
    },

    fetchCoinDescRequest(state) {
      state.coinDescLoading = true;
      state.coinDesc = [];
      state.coinDescError = "";
    },

    fetchCoinDescSuccess(state, action) {
      state.coinDescLoading = false;
      state.coinDesc = action.payload;
      state.coinDescError = "";
    },

    fetchCoinDescFail(state, action) {
      state.coinDescLoading = false;
      state.coinDesc = [];
      state.coinDescError = action.payload;
    },
  },
});

export const coinsAction = coinsSlice.actions;
export default coinsSlice;
