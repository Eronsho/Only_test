import React, { Component } from "react";
import styled from "styled-components";
type ChildrenProps = {
  type: "button" | "submit" | "reset" | undefined;
  info: string;

  status: boolean;
};
const Button: React.FC<ChildrenProps> = ({ type, info, status }) => {
  return (
    <Styled>
      <button disabled={status} type={type}>
        {info}
      </button>
    </Styled>
  );
};

export default Button;

const Styled = styled.div`
  width: 100%;
  height: auto;
  margin: 40px 0 0 0;
  > button {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    width: 100%;
    height: 60px;
    border: none;
    background: #4a67ff;
    border-radius: 8px;
    cursor: pointer;
    &:disabled {
      background: #99a9ff;
    }
  }
`;
