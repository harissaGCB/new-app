import axios from "axios";
import { coinsAction } from "./coinsReducers";

export const getCoins = () => async (dispatch) => {
  dispatch(coinsAction.fetchCoinsRequest());
  try {
    let response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    );
    dispatch(coinsAction.fetchCoinsSuccess(response?.data));
  } catch (error) {
    dispatch(coinsAction.fetchCoinsFail(error.message));
  }
};

export const getCoinDescription = (coinId) => async (dispatch) => {
  dispatch(coinsAction.fetchCoinDescRequest());
  try {
    let response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    dispatch(coinsAction.fetchCoinDescSuccess(response?.data));
  } catch (error) {
    dispatch(coinsAction.fetchCoinDescFail(error.message));
  }
};
