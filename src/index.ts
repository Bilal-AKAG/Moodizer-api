import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import AuthRouter from "./routes/auth"
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/auth",AuthRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
