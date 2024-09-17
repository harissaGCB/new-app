import { jwtDecode as jwt_decode } from "jwt-decode";
import { AuthAction } from "../Redux/auth/authReducer";
import setAuthToken from "./setAuthToken";

const isAuth = (dispatch) => {
  const token = localStorage.getItem("jwtToken");

  if (token) {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      dispatch(AuthAction.logout());
      setAuthToken(false);
      return false;
    }
    setAuthToken(token);
    return true;
  } else {
    return false;
  }
};

export default isAuth;
