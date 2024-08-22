import express from "express";
import multer from "multer";

//controllers
import {
  changePassword,
  deleteAccount,
  forgetPassword,
  getUsers,
  logIn,
  myInfo,
  registerUser,
  verifiedSignUp,
  deleteAccountById,
  updateUser,
  deleteImgAccount,
} from "../controllers/authController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";
import allAuth from "../middleware/allAuth.js";

//models
import user from "../models/user.js";

//utils
import { validateId } from "../utils/validateId.js";

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

router.get("/getAll", getUsers);
// router.get("/myInfo", myInfo);
router.get("/verifiedSignUp/:token", verifiedSignUp);
router.post(
  "/register",
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  registerUser
);
router.post("/logIn", logIn);
// router.put(
//   "/update",
//   allAuth,
//   upload.fields([{ name: "imgUrl", maxCount: 1 }]),
//   updateUser
// );
// router.put("/forgetPassword", forgetPassword);
// router.put("/changePassword", allAuth, changePassword);
// router.delete("/delete", allAuth, deleteAccount);
// router.delete("/delete/img", allAuth, deleteImgAccount);
// router.delete(
//   "/delete/:id",
//   adminAuth,
//   (req, res, next) => validateId(req, res, next, user),
//   deleteAccountById
// );

export default router;
