import { decodeToken } from "../utils/token.js";

const auth = async (req, res, next) => {
  try {
    const auth = req.header("authorization");
    if (!auth)
      return res.status(401).json({
        message: "Not Authenticated",
      });

    const token = auth.split(" ")[1];
    const data = decodeToken(token);

    // token doesn't exist
    if (!token || token.exp < new Date())
      return res.status(401).json({
        message: "Not Authenticated",
      });

    // set the data into the request if all is good
    req.userData = data;

    next();
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export default auth;
