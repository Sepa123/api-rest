import "dotenv/config";
import "./database/connectDB.js"
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import urlRouter from "./routes/url.route.js";
import redirectRouter from "./routes/redirect.router.js"

const app = express();

//TODO: Configurar CORS

//use
/* Telling the server to use the express.json() middleware to parse the incoming request body. */
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/urls", urlRouter);
app.use("/", redirectRouter );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("HALASSSS Puerto:",PORT))