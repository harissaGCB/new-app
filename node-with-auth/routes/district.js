import express from "express";

//controllers
import {
  getDistricts,
  createDistrict,
  deleteDistrict,
} from "../controllers/districtController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

//models
import district from "../models/district.js";

//utils
import { validateId } from "../utils/validateId.js";

const router = express.Router();

router.get("/getAll", getDistricts);
router.post("/create", adminAuth, createDistrict);
router.delete(
  "/delete/:id",
  adminAuth,
  (req, res, next) => validateId(req, res, next, district),
  deleteDistrict
);

export default router;
