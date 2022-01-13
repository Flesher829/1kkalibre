import { colors } from "@/lib/styled/colors";
import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

const Btn = styled.button`
  border: none;
  outline: none;
  padding: 0.6rem 0.7rem;
  cursor: pointer;
  border-radius: 35px;
  min-width: 120px;
  background-color: #eb3654;
  color: ${colors.textColor};
  text-transform: uppercase;
  font-weight: 600;

  &:focus {
    outline: 3px solid #9e2337;
  }
`;
