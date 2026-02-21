import z from "zod";

export type SignUpFormType = {
  nickname: string;
  email: string;
  password: string;
};

export const singUpFormSchema = z.object({
  nickname: z.string().min(3),
  email: z.email(),
  password: z.string().min(4),
});

export type SingUpFormInputs = z.infer<typeof singUpFormSchema>;
