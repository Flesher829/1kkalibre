import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import { ListStyleProps } from "./types";

export const ListItemContent = styled.div<ListStyleProps>`
  display: grid;
  grid-template-columns: ${(props) => props.trackImg};
  border-top: ${(props) => props.noGridTableLines};
  min-width: 1050px;
  align-items: center;
  margin: auto;
  padding: ${(props) => props.padding};
  color: ${colors.textColor};
  font-size: 14px;
  position: relative;
  cursor: pointer;

  @media (min-width: 801px) {
    max-width: 1050px;
    margin: auto;
  }

  .rounded__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: ${colors.grey200};
      border-radius: 50%;
    }
  }

  & :first-child {
    border-top: none;
  }

  &:hover {
    background: ${colors.sideNavBgColor};
    border-radius: 4px;
    padding: ${(props) => props.padding};
  }

  &:hover .list__item {
    opacity: 0;
  }

  &:hover .list__play-icon {
    opacity: 1;
  }

  .list__play-icon {
    position: absolute;
    top: 1px;
    left: ${(props) => props.positionIcon};
    right: 0;
    width: 10%;
    height: 100%;
    z-index: 100000;
    display: flex;
    align-items: center;
    opacity: 0;
  }

  .list__play-iconRound {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.textColor};
  }

  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
