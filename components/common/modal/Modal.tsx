import { Fragment, FunctionComponent, ReactNode } from "react";
import { colors } from "@/lib/styled/colors";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal: FunctionComponent<ModalProps> = ({ children, onClose }) => {
  return (
    <Fragment>
      <ModalOverlay onClick={onClose} />
      <ModalContainer>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        {children}
      </ModalContainer>
    </Fragment>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  right: 10%;
  width: 55rem;
  height: 35rem;
  background: ${colors.grey300};
  z-index: 999;
  border-radius: 5px;
  padding: 1.2rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 27, 27, 0.6);
`;

const ModalCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.3rem;
  color: ${colors.grey100};
  cursor: pointer;
`;
