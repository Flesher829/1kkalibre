import { colors } from '@/lib/styled/colors';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

type TitleProps = {
  title: string;
};

export const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1`
  color: ${colors.textColor};
  padding-left: 1.98rem;
`;
