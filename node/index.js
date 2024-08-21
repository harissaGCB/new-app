import express, { urlencoded, json } from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Routers;
import FCFPayRouter from "./routes/FCFPay.js";

dotenv.config();

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(morgan("dev"));

const server = http.createServer(app);

// define routers
app.use("/", FCFPayRouter);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Listening at port ${port || 8000}`);
});
