import Link from "next/link";
import styled from "styled-components";
import { PropsWithChildren } from "react";
import { Card } from "@/common/card";
import { colors } from "@/lib/styled/colors";
import { ProfilePlayListItems } from "@/lib/@types/playlist.types";

export const PlayList = ({
  playlists,
}: PropsWithChildren<ProfilePlayListItems>) => {
  console.log(playlists);
  return (
    <>
      <h1>Popular Playlists</h1>
      <List>
        {playlists?.playlists.data?.map((playlist) => (
          <div key={playlist.id}>
            <Link href="/playlist/[id]" as={`/playlist/${playlist.id}`}>
              <a>
                <Card imageUrl={playlist.picture_medium} hasIcons />
              </a>
            </Link>
            <div className="meta">
              <span>{playlist.title}</span>
              <div className="meta__tracks">
                <span>{playlist.nb_tracks} tracks</span>
              </div>
            </div>
          </div>
        ))}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  width: 1100px;
  overflow: scroll;
  gap: 30px;

  .meta {
    display: flex;
    flex-direction: column;

    &__tracks {
      color: ${colors.borderColor};
      font-size: 0.9rem;
    }
  }
`;
