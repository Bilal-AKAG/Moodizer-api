import  jwt  from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { ENV } from '../config/env';



export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
     res.status(401).json({ message: "Invalid token" });
  }
};