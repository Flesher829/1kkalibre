import { Card } from "@/common/card";
import styled from "styled-components";

export const ExplorePage = ({ data }) => {
  return (
    <>
      <h1>Top 10</h1>
      <List>
        <Card
          linkParamsPath='/charts/albums'
          imageUrl={data?.albums?.data[0].cover_medium}
          title='Top 10 Albums'
        />

        <Card
          linkParamsPath='/charts/tracks'
          imageUrl={data?.tracks?.data[0]?.album.cover_medium}
          title='Top 10 Tracks'
        />

        <Card
          linkParamsPath='charts/artists'
          imageUrl={data?.artists?.data[0]?.picture_medium}
          title='Top 10 Artist'
        />

        <Card
          linkParamsPath='/charts/podcasts'
          imageUrl={data?.podcasts?.data[0]?.picture_medium}
          title='Top 10 Podcasts'
        />
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  width: 1100px;
  overflow: scroll;
  gap: 30px;
`;
