import { FunctionComponent, ReactElement } from "react";
import { colors } from "@/lib/styled/colors";
import styled from "styled-components";

type Props = {
  icon: ReactElement;
};

export const IconButton: FunctionComponent<Props> = ({ icon }) => {
  return <Btn>{icon}</Btn>;
};

const Btn = styled.button`
  outline: none;
  border: 1px solid ${colors.borderColor};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${colors.borderColor};
  }
`;
