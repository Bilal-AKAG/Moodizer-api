import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import AuthRouter from "./routes/auth"
import { ENV } from "./config/env";
import 'dotenv/config'
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",AuthRouter);



app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});
