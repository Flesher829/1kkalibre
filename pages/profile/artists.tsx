import { ReactElement, PropsWithChildren } from "react";
import styled from "styled-components";
import { getLayout } from "@/layout/layout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { getDeezerProfileArtists } from "pages/api/services";
import { colors } from "@/lib/styled/colors";
import { Artists as ArtistItems } from "@/lib/@types/artists";
import * as Icons from "@icons/index";
import { DZArtistCard } from "@/common/card";

const Artists = ({ artists }: PropsWithChildren<ArtistItems>) => {
  return (
    <>
      <ArtistHeader>
        <h1>{artists.data.length} artists</h1>
        <Search>
          <input type="search" />
        </Search>
      </ArtistHeader>
      <List>
        {artists.data.map((artist) => (
          <DZArtistCard
            key={artist.id}
            artistName={artist.name}
            artistPicture={artist.picture_medium}
            nb_fan={artist.nb_fan}
          />
        ))}
      </List>
    </>
  );
};

export default Artists;

Artists.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);

export async function getStaticProps() {
  const artists = await getDeezerProfileArtists();

  return {
    props: {
      artists,
    },
  };
}

const ArtistHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 858px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1rem;
  }
`;

const Search = styled.div`
  input {
    border: none;
    outline: none;
    padding: 0.3rem 0.45rem;
    border-radius: 3px;
    border: 1px solid ${colors.grey100};
    background: transparent;
    color: ${colors.textColor};
    width: 250px;
    transition: border 0.2s ease-in-out;
    font-family: inherit;

    &:hover {
      border: 1px solid ${colors.red};
    }
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;

  @media (max-width: 858px) {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    max-width: 1050px;
  }
`;

const ArtisteAvatar = styled.div`
  width: 200px;
  height: 200px;
  position: relative;

  &:hover .action__icons {
    opacity: 1;
  }

  .action__icons {
    position: absolute;
    bottom: 1rem;
    left: 3%;
    right: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  height: 320px;
  width: 330px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  background: #0b0b0e;
  transition: background 0.3s ease-out;
  cursor: pointer;

  @media (max-width: 801px) {
    height: 300px;
    width: 300px;
  }

  span {
    margin-top: 0.25rem;
  }

  &:hover {
    background: ${colors.borderColor};
  }
`;
