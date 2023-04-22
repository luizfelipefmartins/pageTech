import { z } from "zod";

export const formValid = z.object({
  email: z.string().min(1, "O email é obrigatório").email("Forneça o email"),
  password: z.string().min(6, "A senha deve ser digitada"),
});

export const validRegister = z
  .object({
    name: z
      .string()
      .min(4, "O nome é obrigatório, precisa de pelo menos 4 caracteres"),
    email: z.string().min(1, "O email é obrigatório").email("Forneça o email"),
    password: z
      .string()
      .min(8, "A senha precisa ter pelo menos 8 caracteres")
      .regex(
        /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/,
        "É necessário ter letras, números e ao menos um símbolo"
      ),
    confirm: z.string().min(1, "Confirmar a senha"),
    bio: z
      .string()
      .min(4, "A descrição é obrigatório, precisa de pelo menos 4 caracteres"),
    contact: z.string().url("Deve ser uma url"),
    course_module: z.string().nonempty("O modulo deve ser escolhido"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas não conferem",
    path: ["confirm"],
  });
