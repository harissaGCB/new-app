import express from "express";
import multer from "multer";

//controllers
import {
  changePassword,
  forgetPassword,
  getUsers,
  login,
  myInfo,
  registerUser,
  verifiedSignUp,
} from "../controllers/userController.js";

//middleware
import auth from "../middleware/auth.js";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/user");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "+" + file.originalname);
  },
});

export const upload = multer({ storage: storage });
const router = express.Router();

router.get("/getUsers", auth, getUsers);
router.get("/myInfo", auth, myInfo);
router.get("/verifiedSignUp/:token", verifiedSignUp);
router.post(
  "/register",
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  registerUser
);
router.post("/login", login);
router.put("/forgetPassword", forgetPassword);
router.put("/changePassword", auth, changePassword);

export default router;
