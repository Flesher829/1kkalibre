import type { PropsWithChildren, ReactElement } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { getLayout } from "@/layout/layout";
import { getDeezerProfilePlaylists } from "pages/api/services";
import { DZTrackCard } from "@/common/card";
import { ProfilePlayListItems } from "@/lib/@types/playlist.types";
import { colors } from "@/lib/styled/colors";
import { Modal } from "@/common/modal/Modal";

const PlayLists = ({ playlists }: PropsWithChildren<ProfilePlayListItems>) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <Modal onClose={() => setOpen(false)}>
          <ModalTitle>Create Playlist</ModalTitle>
          <div>
            <MusicCoverPlaceholder>ede</MusicCoverPlaceholder>
          </div>
        </Modal>
      ) : null}
      <h1>{playlists.data.length} Playlists</h1>
      <Wrapper>
        <div onClick={() => setOpen(true)}>
          <CreatePlayList>+</CreatePlayList>
          <span>Create playlist</span>
        </div>
        {playlists.data.map((playlist) => (
          <DZTrackCard
            key={playlist.id}
            imageUrl={playlist.picture_medium}
            title={playlist.title}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default PlayLists;

PlayLists.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);

const ModalTitle = styled.h1`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1050px;
`;

const CreatePlayList = styled.div`
  width: 235px;
  height: 235px;
  background: ${colors.grey200};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  cursor: pointer;
`;

const MusicCoverPlaceholder = styled(CreatePlayList)`
  background: ${colors.textColor};
  width: 200px;
  height: 200px;
  padding: 1rem;
  border-radius: 5px;
`;

export async function getStaticProps() {
  const playlists = await getDeezerProfilePlaylists();

  return {
    props: {
      playlists,
    },
  };
}
