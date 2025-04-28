import express from "express";
import {
  loginHandler,
  RegisterHandler,
  userFindById,
} from "../controllers/authHandler/authhandler";
import { validateData } from "../middlewares/zod.validation";
import { loginSchema, RegisterSchema } from "../zodSchema/authschema";
import { authMiddleware } from "../middlewares/isAuthenticated";


const AuthRouter = express.Router();

AuthRouter.post("/login", validateData(loginSchema), loginHandler);
AuthRouter.post("/register", validateData(RegisterSchema), RegisterHandler);
AuthRouter.get("/me", authMiddleware as any, userFindById);

export default AuthRouter;

