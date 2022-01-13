import { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import * as Icons from "@icons/index";
import { truncateTitle } from "@/lib/utils";
import { ChartData, ChartsData } from "@/lib/@types";

type ListItemProps = {
  data: {
    albums: ChartsData;
  };
};

export const ListItem: FunctionComponent<ListItemProps> = ({ data }) => (
  <>
    {data?.albums?.data.map((alb: ChartData, index: number) => (
      <ListItemContent key={alb?.id}>
        <div className="list__item">{index + 1}</div>
        <div className="list__play-icon">
          <a href={alb?.link} rel="noreferrer" target="_blank">
            <Icons.Play size={32} color={colors.textColor} />
          </a>
        </div>

        <div>{truncateTitle(alb?.title, 45)}</div>
        <div>{truncateTitle(alb?.artist?.name, 25)}</div>
      </ListItemContent>
    ))}
  </>
);

const ListItemContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  border-top: 1px solid ${colors.borderColor};
  margin: auto;
  padding: 0.95rem;
  color: ${colors.textColor};
  font-size: 14px;
  position: relative;
  cursor: pointer;

  &:hover {
    background: ${colors.sideNavBgColor};
    border-radius: 9px;
    padding: 0.95rem;
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
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 100000;
    display: flex;
    align-items: center;
    opacity: 0;
  }
`;
