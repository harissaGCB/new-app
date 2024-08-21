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
import contactRouter from "./routes/contact.js";
import aboutRouter from "./routes/about.js";
import supportedRouter from "./routes/supported.js";
import storyRouter from "./routes/story.js";
import newsletterRouter from "./routes/newsletter.js";

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
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/supported", supportedRouter);
app.use("/story", storyRouter);
app.use("/newsletter", newsletterRouter);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Listening at port ${port || 8000}`);
});
