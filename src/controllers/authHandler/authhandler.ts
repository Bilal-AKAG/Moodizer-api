import { error } from "console";
import { Request, Response } from "express";
import { createUser, findUserByEmail } from "../../helper/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ENV } from "../../config/env";

export const loginHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user)
      return res.status(400).json({ message: "invalid email credential" });

    const isMatch =await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      ENV.JWT_SECRET_KEY
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const RegisterHandler = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await findUserByEmail(email);
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ username, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
