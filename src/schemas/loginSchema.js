import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("O e-mail é obrigatório").email("E-mail inválido"),
  password: z.string().min(1, "A senha é obrigatória"),
});
