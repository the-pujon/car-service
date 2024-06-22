import { z } from "zod";

export const CreateUserValidation = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string(),
    role: z.enum(["user", "admin"]),
    address: z.string(),
  }),
});
