import express from "express";

//controllers
import {
  getLocations,
  createLocation,
  deleteLocation,
  initialLocations,
} from "../controllers/locationController.js";

//middleware
import auth from "../middleware/auth.js";

//models
import location from "../models/location.js";

//utils
import { validateId } from "../utils/validateId.js";

const router = express.Router();

router.get("/getLocations", getLocations);
router.post("/createLocation", auth, createLocation);
// router.post("/initialLocations", auth, initialLocations);
router.delete(
  "/deleteLocation/:id",
  (req, res, next) => validateId(req, res, next, location),
  auth,
  deleteLocation
);

export default router;
