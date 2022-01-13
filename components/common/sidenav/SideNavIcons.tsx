import { colors } from "@/lib/styled/colors";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  icon: ReactNode;
  label?: string;
  href: string;
};

export const SideNavIcons: FunctionComponent<Props> = ({
  icon,
  label,
  href,
}) => {
  return (
    <Wrapper>
      <Link href={href}>
        <a className="active">
          {icon} <span className="sidenav__label">{label}</span>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  list-style: none;
  width: 90%;

  a {
    display: flex;
    align-items: center;
    padding: 0.6rem;
    cursor: pointer;
    margin-top: 0.6rem;

    @media (max-width: 801px) {
      .sidenav__label {
        display: none;
      }
    }

    .active {
      background: blue;
    }

    &:hover > svg > g,
    &:hover > svg > path,
    &:hover > svg > g path {
      fill: ${colors.red};
    }

    &:hover {
      background: ${colors.headerBgColor};
      color: ${colors.red};
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }

  span {
    margin-left: 1rem;
  }
`;
