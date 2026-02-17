import { LogIn } from "lucide-react";
import { AuthInput } from "../auth-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginFormSchema, LoginFormInputs } from "@/types/login-form-type";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleLoginForm: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className="mt-6 space-y-5" onSubmit={handleSubmit(handleLoginForm)}>
      <div className="flex flex-col gap-1">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your e-mail"
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
        Sign In
      </button>
    </form>
  );
}
