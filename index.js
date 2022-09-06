import "dotenv/config";
import "./database/connectDB.js"
import express from "express";

import authRouter from "./routes/auth.route.js";

const app = express();

//use
/* Telling the server to use the express.json() middleware to parse the incoming request body. */
app.use(express.json());
app.use("/api/v1/auth", authRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("HALASSSS Puerto:",PORT))