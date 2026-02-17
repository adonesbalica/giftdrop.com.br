import z from "zod";

export type LoginFormType = {
  email: string;
  password: string;
};

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(4),
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;
