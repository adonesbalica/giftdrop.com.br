import {
  singUpFormSchema,
  type SingUpFormInputs,
} from "@/types/sign-up-form-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { SignUpForm } from ".";

export default function SignUpFormContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpFormInputs>({
    resolver: zodResolver(singUpFormSchema),
  });

  const handleSignUpForm: SubmitHandler<SingUpFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <SignUpForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={handleSignUpForm}
    />
  );
}
