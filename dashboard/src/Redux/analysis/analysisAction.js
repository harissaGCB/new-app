import axios from "axios";
import { AuthAction } from "./authReducer";

export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch(AuthAction.loginRequest());

    const user = await axios.post(process.env.REACT_APP_API + "/login", {
      email,
      password,
    });
    localStorage.setItem("jwtToken", user.data.token);
    localStorage.setItem("id", user.data.data.id);
    localStorage.setItem("email", user.data.data.email);
    window.location.href = "/#/dashboard";
    dispatch(AuthAction.loginSuccess(user.data));
  } catch (error) {
    dispatch(AuthAction.loginFailure(error.response.data.message));
  }
};
