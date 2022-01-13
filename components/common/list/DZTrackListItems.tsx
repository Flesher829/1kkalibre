import type { FunctionComponent, ReactElement, ReactNode } from "react";
import { colors } from "@/lib/styled/colors";
import styled from "styled-components";

type ListHeaderProps = {
  header1: string | SVGElement;
  header2: string | SVGElement;
  header3?: string | SVGElement;
  header4?: string | ReactElement | undefined;
  header5?: string | SVGElement;
  children: ReactNode;
  trackImg?: string;
};

type ListHeaderStypeProps = {
  trackImg: string;
  headLine?: string;
};

export const DZTrackListItems: FunctionComponent<ListHeaderProps> = ({
  header1,
  header2,
  header3,
  header4,
  header5,
  children,
  trackImg,
  ...rest
}) => {
  return (
    <>
      <Wrapper
        {...rest}
        headLine={trackImg ? `none` : `1px solid ${colors.grey200}`}
        trackImg={trackImg ? "4fr 2fr 2fr 0fr" : "1fr 2fr 2fr 2fr 1fr"}
      >
        <div>{header1}</div>
        <div>{header2}</div>
        <div>{header3}</div>
        <div>{header4 ? header4 : null}</div>
        <div>{header5 ? header5 : null}</div>
      </Wrapper>
      {children}
    </>
  );
};

const Wrapper = styled.nav<ListHeaderStypeProps>`
  display: grid;
  grid-template-columns: ${(props) => props.trackImg};
  border-top: ${(props) => props.headLine};
  padding: 0.95rem;
  min-width: 1050px;
  margin: auto;
  color: ${colors.grey100};
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 801px) {
    max-width: 1050px;
    margin: auto;
  }

  &:hover {
    color: ${colors.red};
    cursor: pointer;
  }
`;
