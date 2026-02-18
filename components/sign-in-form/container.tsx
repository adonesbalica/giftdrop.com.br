import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { SignInForm } from ".";
import {
  signInFormSchema,
  type SignInFormInputs,
} from "@/types/sign-in-form-type";

export default function SignInFormContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSignInForm: SubmitHandler<SignInFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <SignInForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={handleSignInForm}
    />
  );
}
