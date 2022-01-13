import type { ReactElement } from "react";
import styled from "styled-components";
import { getLayout } from "@/layout/layout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { colors } from "@/lib/styled/colors";
import { DZTrackCard } from "@/common/card";
import { truncateTitle } from "@/lib/utils";
import { ProfileAlbumItems } from "@/lib/@types/albums";
import * as deezerApi from "pages/api/services";

const Albums = ({ album, albumRecommendations }: ProfileAlbumItems) => {
  return (
    <>
      <h1>{album.data.length} album</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "20vh",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {album.data.length === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src="https://e-cdns-files.dzcdn.net/cache/slash/images/common/placeholders/recommendation.630c0afe2c6eae9e96eabaa5e3c67f32.png" />
            <p>You haven't favourited any albums yet</p>
          </div>
        ) : null}
      </div>
      <Wrapper>
        <h1 style={{ color: colors.textColor }}>Albums you may like</h1>
        <p style={{ color: colors.grey100 }}>
          Here are some suggestions based on your listening habits and our
          editorial picks:
        </p>
        <RecommendationSection>
          {albumRecommendations.data.map((recAlbum, index: number) => (
            <div key={recAlbum.id}>
              <DZTrackCard imageUrl={recAlbum.cover_medium} />
              <span style={{ color: colors.grey100 }}>
                {truncateTitle(recAlbum.title, 25)}
              </span>
            </div>
          ))}
        </RecommendationSection>
      </Wrapper>
    </>
  );
};

export default Albums;

Albums.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);

const RecommendationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  border-radius: 7px;
  padding: 1rem;
  min-height: 450px;
  width: inherit;
  background: #0b0b0e;
  color: ${colors.grey200};
`;

export async function getStaticProps() {
  const album = await deezerApi.getDeezerProfileAlbums();
  const albumRecommendations = await deezerApi.getDeezerAlbumRecommendations();

  return {
    props: {
      album,
      albumRecommendations,
    },
  };
}
