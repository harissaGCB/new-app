import express from "express";
import axios from "axios";

//controllers
import {
  createPayment,
  getCurrencies,
} from "../controllers/FCFPayController.js";

const router = express.Router();

router.get("/getCurrencies", getCurrencies);
router.post("/createPayment", createPayment);

export default router;
