import type { ReactNode, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { colors } from "@/lib/styled/colors";

type TabProps = {
  href: string;
  children: ReactNode;
  className?: string;
};
export const Tab: FunctionComponent<TabProps> = ({
  href,
  children,
  className,
}) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <ActiveLink
        activeLink={router.pathname === href ? colors.red : "none"}
        hoverLink={router.pathname === href ? colors.red : colors.grey100}
        textActiveColor={
          router.pathname === href ? colors.textColor : colors.grey100
        }
        className={className}
      >
        {children}
      </ActiveLink>
    </Link>
  );
};

type ActiveLink = {
  activeLink: string;
  hoverLink: string;
  textActiveColor: string;
};

const ActiveLink = styled.a<ActiveLink>`
  color: ${(props) => props.textActiveColor};
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover ::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    bottom: -1rem;
    left: 0;
    right: 0;
    background: ${(props) => props.hoverLink};
  }

  &:after {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    bottom: -1rem;
    left: 0;
    right: 0;
    background: ${(props) => props.activeLink};
  }
`;
