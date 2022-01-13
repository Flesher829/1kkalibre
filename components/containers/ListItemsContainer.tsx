import { ListItem } from "@/common/list";
import { ChartsData } from "@/lib/@types";
import { colors } from "@/lib/styled/colors";
import { FunctionComponent } from "react";
import styled from "styled-components";

type ListItemsProps = {
  header1: string;
  header2: string;
  header3: string;
  data: ChartsData;
};

export const ListItemContainer: FunctionComponent<ListItemsProps> = ({
  header1,
  header2,
  header3,
  data,
}) => {
  return (
    <>
      <Div>
        <div>{header1}</div>
        <div>{header2}</div>
        <div>{header3}</div>
      </Div>
      <ListItem data={data} />
    </>
  );
};

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr;
  border-top: 1px solid ${colors.borderColor};
  border-bottom: 1px solid ${colors.borderColor};
  padding: 0.95rem;
  margin: auto;
  color: ${colors.textColor};
  font-size: 14px;

  &:hover {
    color: ${colors.red};
    cursor: pointer;
  }
`;

const Div = styled.ol`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr;
  border-top: 1px solid ${colors.borderColor};
  margin: auto;
  padding: 0.95rem;
  color: ${colors.textColor};
  font-size: 14px;
  position: relative;
  cursor: pointer;
`;
