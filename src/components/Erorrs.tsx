import React, { Component } from "react";
import styled from "styled-components";
type ChildrenProps = {
  userName: string;
  visible: boolean;
};
const Erorrs: React.FC<ChildrenProps> = ({ userName, visible }) => {
  const Styled = styled.div`
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    background: #f5e9e9;
    border: 1px solid #e26f6f;
    border-radius: 8px;
    display: ${(props) => (visible ? `flex` : `none`)};
    align-items: center;
    padding: 0 20px;
    margin: 0 0 27px 0;
    > p {
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #000000;
      margin: 0 0 0 14px;
    }
    > span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffc8c8;
      border-radius: 50%;
    }
  `;
  return (
    <Styled>
      <span>!</span>
      <p>{userName} </p>
    </Styled>
  );
};

export default Erorrs;
