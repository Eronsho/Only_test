import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { addLoginUseerRequest } from "../store/action-creators/user";
import styled from "styled-components";
import Button from "../components/Button";
import Erorrs from "../components/Erorrs";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { PROFIL_ROUTE } from "../utils/consts";
import { useForm, SubmitHandler } from "react-hook-form";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
const Erorr = styled.div`
  width: 640px;
  height: 60px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
`;
const Form = styled.form`
  width: 100%;
  max-width: 640px;
  height: 338px;
  margin: 0 auto;
  padding: 253px 0 0 0;
`;
type FormValues = {
  email: string;
  password: string;
  checked: boolean;
};
const RegularInput = styled.input`
  width: 100%;
  height: 60px;
  margin: 10px 0 0 0;
  background: #f5f5f5;
  border-radius: 8px;
  border: none;
  border: 0;
  box-sizing: border-box;
  padding: 0 20px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #232323;

  &:invalid:focus:not(:placeholder-shown) {
    outline: 1px solid #e26f6f;
  }

  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  width: 100%;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  margin: 0 0 20px 0;
  position: relative;
`;
const BaseText = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
`;

const ErrorText = styled(BaseText)`
  color: red;
`;
const Auth: React.FC = () => {
  const { error, loading, user } = useTypeSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setchecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const onSubmits: SubmitHandler<FormValues> = (data, e) => {
    e?.preventDefault();
    console.log(data);

    dispatch(addLoginUseerRequest(data));
    if (user) {
      navigate(PROFIL_ROUTE);
    }
  };
  useEffect(() => {
    if (user) {
      navigate(PROFIL_ROUTE);
    }
  }, [user]);
  const validators = {
    required: true,
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmits)}>
        <Erorrs visible={error === null ? false : true} userName={`${error}`} />
        <Input
          label="Логин"
          refs={register("email", {
            ...validators,
          })}
          type="email"
        />
        <ErrorText>{errors.email && "Обязательное поле"}</ErrorText>
        <Input
          label="password"
          refs={register("password", {
            ...validators,
          })}
          type="password"
        />{" "}
        <ErrorText>{errors.password && "Обязательное поле"}</ErrorText>
        <Checkbox register={register("checked")} label={"Запомнить пароль"} />
        <Button info="Войти" type="submit" status={loading} />
      </Form>
    </>
  );
};
export default Auth;
