import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../store/action-creators/user";
import { LOGIN_ROUTE } from "../utils/consts";
const Content = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 342px 0 0 0;
`;
const Title = styled.h2`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  width: 100%;
  color: #000000;
`;
const Button = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  background: #f5f5f5;
  border-radius: 8px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  cursor: pointer;
`;
const Profil: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Out = () => {
    dispatch(logOut());
    navigate(LOGIN_ROUTE);
  };
  return (
    <Content>
      <Title>Здравствуйте, steve.jobs@example.com</Title>
      <Button onClick={Out}>Выйти</Button>
    </Content>
  );
};
export default Profil;
