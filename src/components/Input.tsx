import React, { Component } from "react";
import styled from "styled-components";

type ChildrenProps = {
  label: string;
  type: string;
  refs: any;
};
const Input: React.FC<ChildrenProps> = ({ label, type, refs }) => {
  return (
    <Styled>
      <label>
        {label}
        <input {...refs} type={type} />
      </label>
    </Styled>
  );
};

export default Input;

const Styled = styled.div`
  margin: 0 0 20px 0;
  > label {
    width: 100%;
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1f1f1f;

    > span {
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #e26f6f;
      display: flex;
    }
    > input {
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

      &:invalid:not(:focus):not(:placeholder-shown) {
        outline: 1px solid #e26f6f;
      }

      &:focus {
        outline: none;
      }
    }
  }
`;
