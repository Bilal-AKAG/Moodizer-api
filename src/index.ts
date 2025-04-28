import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth";
import { ENV } from "./config/env";
import { authMiddleware } from "./middlewares/isAuthenticated";
import EntryRouter from "./routes/Entry";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRouter);
app.use("/api/entry",authMiddleware as any,EntryRouter);
app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});
