import express from "express";
import multer from "multer";

//controllers
import {
  createStory,
  getStories,
  deleteStory,
  updatStory,
  deleteImgStory,
} from "../controllers/storyController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

//utils
import { validateId } from "../utils/validateId.js";

//models
import story from "../models/story.js";

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/story");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "+" + file.originalname);
  },
});

export const upload = multer({ storage: storage });

const router = express.Router();

router.get("/getAll", getStories);
router.post(
  "/create",
  adminAuth,
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  createStory
);
router.put(
  "/update/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, story),
  upload.fields([{ name: "imgUrl", maxCount: 1 }]),
  updatStory
);
router.delete("/delete/img/:id", adminAuth, deleteImgStory);
router.delete(
  "/delete/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, story),
  deleteStory
);

export default router;
