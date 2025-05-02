import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .nonempty("E-mail é obrigatório")
      .email("Por favor, insira um e-mail válido"),

    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(20, "A senha deve ter no máximo 20 caracteres")
      .regex(/[a-zA-Z]/, "A senha deve conter letras")
      .regex(/\d/, "A senha deve conter números"),

    confirmPassword: z
      .string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });
