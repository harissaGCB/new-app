import express from "express";

//controllers
import {
  getTitleRoles,
  createTitleRole,
  deleteTitleRole,
} from "../controllers/titleRoleController.js";

//middleware
import auth from "../middleware/auth.js";

//models
import titleRole from "../models/titleRole.js";

//utils
import { validateId } from "../utils/validateId.js";

const router = express.Router();

router.get("/getTitleRoles", getTitleRoles);
router.post("/createTitleRole", auth, createTitleRole);
router.delete(
  "/deleteTitleRole/:id",
  (req, res, next) => validateId(req, res, next, titleRole),
  auth,
  deleteTitleRole
);

export default router;
