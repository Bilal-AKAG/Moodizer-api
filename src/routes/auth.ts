import express from "express";
import {
  loginHandler,
  RegisterHandler,
} from "../controllers/authHandler/authhandler";
import { validateData } from "../middlewares/zod.validation";
import { loginSchema, RegisterSchema } from "../zodSchema/authschema";
import { authMiddleware } from "../middlewares/isAuthenticated";
import { userFindById } from "../helper/user.model";

const AuthRouter = express.Router();

AuthRouter.post("/login", validateData(loginSchema), loginHandler);
AuthRouter.post("/register", validateData(RegisterSchema), RegisterHandler);
AuthRouter.get("/me", authMiddleware as any, userFindById);

export default AuthRouter;
