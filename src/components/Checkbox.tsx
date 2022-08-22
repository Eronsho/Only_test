import React, { Component } from "react";
import {
  FieldValues,
  UseFormRegisterReturn,
  ValidationRule,
} from "react-hook-form";

import styled from "styled-components";
type FormValues = {
  email: string;
  password: string;
  checked: boolean;
};
type ChildrenProps = {
  label: string;
  register: any;
};
const Checkbox: React.FC<ChildrenProps> = ({ label, register }) => {
  return (
    <Styled>
      <label>
        {label}
        <input id="checkbox" {...register} type="checkbox" />
        <span></span>
      </label>
    </Styled>
  );
};

export default Checkbox;

const Styled = styled.div`
  input[type="checkbox"] {
    position: absolute;
    left: -9999px;
  }
  > label {
    position: relative;
    padding: 0 0 0 31px;
    display: flex;
    align-items: center;

    > input {
    }
    > span {
      display: inline-flex;
      align-items: center;
      user-select: none;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        display: inline-block;
        height: 20px;
        width: 20px;
        border: 1px solid #000000;
        border-radius: 4px;
        padding: 3px;
        box-sizing: border-box;
      }
      &::after {
        top: 2px;
        left: 3px;
        position: absolute;
        content: "";
        width: 14px;
        height: 14px;
        border-radius: 2px;
      }
    }

    > input:not(:disabled):active + span::before {
      background-color: #b3d7ff;
      border-color: #b3d7ff;
    } /* стили для чекбокса, находящегося в фокусе */
    > input:focus + span::before {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    /* * стили для чекбокса, находящегося в состоянии checked */
    > input:checked + span::after {
      background: #4a67ff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    > input:disabled + span::before {
      background-color: #e9ecef;
    }
  }
`;
