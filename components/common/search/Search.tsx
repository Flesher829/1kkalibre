import { colors } from '@/lib/styled/colors';
import * as Icons from '@icons/index';
import styled from 'styled-components';

export const Search = () => {
  return (
    <SearchContainer>
      <Icons.Search size={15} color={colors.textColor} />
      <input type='text' placeholder='Search' />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;

  input {
    margin-left: 1rem;
    border: none;
    outline: none;
    background: ${colors.headerBgColor};
    color: ${colors.textColor};
    font-family: inherit;
    font-size: 1rem;
    width: 70%;
  }
`;
