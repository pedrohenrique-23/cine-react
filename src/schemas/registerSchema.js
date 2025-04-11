import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("E-mail inválido"),
    password: z
      .string()
      .min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
