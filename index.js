import "dotenv/config";
import "./database/connectDB.js"
import express from "express";

import authRouter from "./routes/auth.route.js";

const app = express();

//use
app.use(express.json());
app.use("/api/v1", authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("HALASSSS PIUERTO:",PORT))