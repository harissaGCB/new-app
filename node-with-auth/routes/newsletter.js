import express from "express";

//controllers
import {
  getNewsletters,
  createNewsletter,
  deleteNewsletter,
} from "../controllers/newsletterController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

//models
import newsletter from "../models/newsletter.js";

//utils
import { validateId } from "../utils/validateId.js";

const router = express.Router();

router.get("/getAll", adminAuth, getNewsletters);
router.post("/create", createNewsletter);
router.delete(
  "/delete/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, newsletter),
  deleteNewsletter
);

export default router;
