import express from "express";

//controllers
import {
  getContacts,
  createContact,
} from "../controllers/contactController.js";

//middleware
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

router.get("/getAll", adminAuth, getContacts);
router.post("/create", createContact);

export default router;
