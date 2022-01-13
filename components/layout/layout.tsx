import type { FunctionComponent, ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Header } from "@/common/header";
import { SideNav } from "@/common/sidenav";
import { colors } from "@/lib/styled/colors";

type Props = {
  children: ReactNode;
};

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <SideNav />
      <LayoutBody>{children}</LayoutBody>
    </Container>
  );
};

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

const Container = styled.section`
  display: grid;
  height: 100vh;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "sidenav  header"
    "sidenav  content"
    "sidenav  content";
`;

const LayoutBody = styled.div`
  background: ${colors.headerBgColor};
  height: 100vh;
  grid-area: content;
  padding-bottom: 5rem;
  padding-left: 1rem;
  padding-top: 1.5rem;
  color: ${colors.textColor};
  position: fixed;
  width: calc(100% - 90px);
  overflow-x: scroll;
  top: 55px;
  right: 0;
  overflow-y: scroll;

  @media (min-width: 801px) {
    width: calc(100% - 230px);
  }
`;
