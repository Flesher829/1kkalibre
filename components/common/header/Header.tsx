import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import { Search } from "../search/Search";
import { Profile } from "@/profile/Profile";

export const Header = () => {
  return (
    <Container>
      <Search />
      <Profile />
    </Container>
  );
};

const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.headerBgColor};
  border-bottom: 1px solid ${colors.borderColor};
  padding: 1rem;
  position: fixed;
  top: 0;
  width: calc(100% - 90px);
  right: 0;
  z-index: 4000;

  @media (min-width: 801px) {
    width: calc(100% - 230px);
  }
`;
