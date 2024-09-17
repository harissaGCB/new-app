import { combineReducers } from "redux";

import AuthSlice from "./auth/authReducer";

const rootReducer = combineReducers({
  authReducer: AuthSlice.reducer,
});

export default rootReducer;
