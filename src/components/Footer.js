import React from "react";
import styled from "styled-components";

const MyFooter = styled.footer`
  background-color: #ccc;
  font-family: 'Open Sans';
`;

export const Footer = () => {
  return <MyFooter>&copy; Copyright 2020 Kevin Chin</MyFooter>;
};
