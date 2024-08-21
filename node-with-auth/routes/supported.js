import express from "express";
import multer from "multer";

//controllers
import {
  createSupported,
  getSupporteds,
  deleteSupported,
} from "../controllers/supportedController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

//utils
import { validateId } from "../utils/validateId.js";

//models
import supported from "../models/supported.js";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/supported");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "+" + file.originalname);
  },
});

export const upload = multer({ storage: storage });

const router = express.Router();

router.get("/getAll", getSupporteds);
router.post(
  "/create",
  adminAuth,
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  createSupported
);
router.delete(
  "/delete/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, supported),
  deleteSupported
);

export default router;
