import z from "zod";

export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
};

export const singUpFormSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(4),
});

export type SingUpFormInputs = z.infer<typeof singUpFormSchema>;
