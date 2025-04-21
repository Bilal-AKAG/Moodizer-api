import express from 'express'
import { loginHandler, RegisterHandler } from '../controllers/authHandler/authhandler';
import { validateData } from '../middlewares/validation';
import { loginSchema, RegisterSchema } from '../zodSchema/authschema';

const AuthRouter=express.Router()


AuthRouter.post('/login',validateData(loginSchema),loginHandler);
AuthRouter.post("/register", validateData(RegisterSchema), RegisterHandler);



export default AuthRouter;