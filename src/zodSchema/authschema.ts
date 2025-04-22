import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(4),
});

export const RegisterSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email().min(1),
  password: z.string().min(4).max(10),
});
