import Link from "next/link";
import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import { getGenre, getSingleGenreArtists } from "pages/api/services";
import { getLayout } from "@/layout/layout";
import { GenreArtist } from "@/lib/@types/genre";
import { PropsWithChildren } from "react";
import { DZArtistCard, DZTrackCard } from "@/common/card";

const GenreArtists = ({ genre }: PropsWithChildren<GenreArtist>) => {
  return (
    <>
      <h1>Artists for this genre</h1>
      <List>
        {genre.data.map((gArtist) => (
          <Link
            key={gArtist.id}
            // href="/artist/[artistId]"
            href={`/artist/${gArtist.id}`}
          >
            <a>
              <DZArtistCard
                artistPicture={gArtist.picture_medium}
                artistName={gArtist.name}
              />
            </a>
          </Link>
        ))}
      </List>
    </>
  );
};

export default GenreArtists;

GenreArtists.getLayout = getLayout;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ArtisteAvatar = styled.div`
  width: 180px;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  background: #0b0b0e;
  transition: background 0.3s ease-out;
  cursor: pointer;

  span {
    margin-top: 0.25rem;
  }

  &:hover {
    background: ${colors.borderColor};
  }
`;

export async function getStaticPaths() {
  const allGenre = await getGenre();
  const paths = allGenre.map((genre) => ({
    params: { genreId: genre.id?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const genre = await getSingleGenreArtists({ genreId: params.id });

  return {
    props: {
      genre,
    },
  };
}
