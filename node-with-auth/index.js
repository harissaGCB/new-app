import express, { urlencoded, json } from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import sequelize from "./database.js";

import "./associations.js";

// Routers
import authRouter from "./routes/auth.js";
import districtRouter from "./routes/district.js";

dotenv.config();

const app = express();
app.use(urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(morgan("dev"));

const server = http.createServer(app);

// define routers
app.use("/", authRouter);
app.use("/district", districtRouter);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Listening at port ${port || 8000}`);
});
