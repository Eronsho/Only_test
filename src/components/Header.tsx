import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  color: #000000;
  margin: 0 auto;
`;
const Header: React.FC = () => {
  return <Title>ONLY.</Title>;
};

export default Header;
