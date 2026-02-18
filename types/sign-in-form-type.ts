import z from "zod";

export type SignInFormType = {
  email: string;
  password: string;
};

export const signInFormSchema = z.object({
  email: z.email(),
  password: z.string().min(4),
});

export type SignInFormInputs = z.infer<typeof signInFormSchema>;
