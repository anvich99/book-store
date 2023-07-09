import React from "react";
import { StyledForm } from "./styled";
import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthValues } from "types";
import { useAppDispatch } from "store";
import { fetchSignUpUser } from "store/features/userInfo/userInfoSlice";

interface FormProps {
  onSubmit: SubmitHandler<AuthValues>;
}
export const FormAuth = ({ onSubmit }: FormProps) => {
  const { register, handleSubmit } = useForm<AuthValues>();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email")} placeholder="email" />
      <input type="password" {...register("password")} placeholder="password" />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};