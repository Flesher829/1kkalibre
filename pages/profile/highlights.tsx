import type { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { getLayout } from "@/layout/layout";
import { DZTrackCard } from "@/common/card";
import { truncateTitle } from "@/lib/utils";
import * as deezerApi from "pages/api/services";
import { ProfileHighlightsItems } from "@/lib/@types/highlights";

const UserProfilePage = ({
  highlights,
  playlists,
}: PropsWithChildren<ProfileHighlightsItems>) => {
  return (
    <Container>
      <h1>Recently Played</h1>
      <Wrapper>
        {highlights.data.map((data) => (
          <DZTrackCard
            title={truncateTitle(data.title, 20)}
            artist={truncateTitle(data.artist.name, 20)}
            imageUrl={data.album.cover_medium}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default UserProfilePage;

UserProfilePage.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);

export async function getStaticProps() {
  const playlists = await deezerApi.getDeezerProfilePlaylists();
  const highlights = await deezerApi.getDeezerProfileTracksHistory();

  return {
    props: {
      highlights,
      playlists,
    },
  };
}

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  /* max-width: 1050px; */
  overflow-x: scroll;
`;

const Container = styled.div`
  width: 100%;
  position: relative;

  .artist {
    color: ${colors.borderColor};
  }
`;
