import express from "express";
import multer from "multer";

//controllers
import {
  createAbout,
  getAbouts,
  deleteAbout,
  updateAbout,
  deleteImgAbout,
} from "../controllers/aboutController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

//utils
import { validateId } from "../utils/validateId.js";

//models
import about from "../models/about.js";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/about");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "+" + file.originalname);
  },
});

export const upload = multer({ storage: storage });

const router = express.Router();

router.get("/getAll", getAbouts);
router.post(
  "/create",
  adminAuth,
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  createAbout
);
router.put(
  "/update/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, about),
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  updateAbout
);
router.delete("/delete/img/:id", adminAuth, deleteImgAbout);
router.delete(
  "/delete/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, about),
  deleteAbout
);

export default router;
