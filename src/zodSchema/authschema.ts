import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(4).max(10),
});

export const RegisterSchema = z.object({
  name: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(4).max(10),
});
