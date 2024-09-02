import express from "express";

//controllers
import {
  getRoles,
  createRole,
  deleteRole,
} from "../controllers/roleController.js";

//middleware
import auth from "../middleware/auth.js";

//models
import role from "../models/role.js";

//utils
import { validateId } from "../utils/validateId.js";

const router = express.Router();

router.get("/getRoles", getRoles);
router.post("/createRole", auth, createRole);
router.delete(
  "/deleteRole/:id",
  (req, res, next) => validateId(req, res, next, role),
  auth,
  deleteRole
);

export default router;
