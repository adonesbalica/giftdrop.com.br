import { LogIn } from "lucide-react";
import { AuthInput } from "../auth-input";
import {
  type FieldErrors,
  type SubmitHandler,
  type UseFormHandleSubmit,
  type UseFormRegister,
} from "react-hook-form";

import { type SingUpFormInputs } from "@/types/sign-up-form-types";

interface SignUpFormProps {
  register: UseFormRegister<SingUpFormInputs>;
  errors: FieldErrors<SingUpFormInputs>;
  handleSubmit: UseFormHandleSubmit<SingUpFormInputs>;
  onSubmit: SubmitHandler<SingUpFormInputs>;
}

export function SignUpForm({
  errors,
  register,
  handleSubmit,
  onSubmit,
}: SignUpFormProps) {
  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <AuthInput
          label="Name"
          type="string"
          placeholder="Enter your name"
          autoComplete="username"
          {...register("name")}
        />{" "}
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your e-mail"
          autoComplete="email"
          {...register("email")}
        />{" "}
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-(--primary) py-3 font-medium text-(--primary-foreground) transition hover:opacity-90"
      >
        <LogIn size={18} />
        Sign Up
      </button>
    </form>
  );
}
