import { DZArtistCard, DZTrackCard } from "@/common/card";
import { getLayout } from "@/layout";
import styled from "styled-components";
import { truncateTitle } from "@/lib/utils";
import * as deezerApi from "./api/services";
import Link from "next/link";
import { Slider } from "@/common/slider/Slider";

export default function Home({
  playlistRecommendations,
  highlights,
  artistRecommendations,
  newReleases,
  editorial,
  genre,
}) {
  return (
    <>
      <Slider data={playlistRecommendations.data} title="Playlists you'll love">
        {playlistRecommendations.data.map((plsRecommendation) => (
          <DZTrackCard
            key={plsRecommendation.id}
            imageUrl={plsRecommendation.picture_medium}
            opacity="0.25"
            name={plsRecommendation.title}
          />
        ))}
      </Slider>

      <Slider data={highlights?.data} numOfElements={4} title="Recently Played">
        {highlights.data.map((recentlyPlayed) => (
          <DZTrackCard
            key={recentlyPlayed.id}
            imageUrl={recentlyPlayed.album.cover_medium}
            artist={truncateTitle(recentlyPlayed.artist.name, 20)}
            title={recentlyPlayed.title}
          />
        ))}
      </Slider>

      <Slider data={artistRecommendations.data} title="You might love">
        {artistRecommendations.data.map((artist) => (
          <Link
            key={artist.id}
            href="/artist/[artistId]"
            as={`/artist/${artist.id}`}
          >
            <a>
              <DZArtistCard
                key={artist.id}
                artistName={artist.name}
                artistPicture={artist.picture_medium}
              />
            </a>
          </Link>
        ))}
      </Slider>

      <Slider data={genre} title="Genre">
        {genre.map((gen) => (
          <DZTrackCard
            key={gen.id}
            hasIcons={false}
            size="small"
            imageUrl={gen.picture_medium}
            title={gen.name}
          />
        ))}
      </Slider>

      <Slider data={editorial.data} title="Weekly Releases">
        {editorial.data.map((edi) => (
          <DZTrackCard
            key={edi.id}
            imageUrl={edi.cover_medium}
            title={edi.title}
          />
        ))}
      </Slider>
    </>
  );
}

Home.getLayout = getLayout;

export async function getStaticProps() {
  const playlistRecommendations =
    await deezerApi.getDeezerPlaylistRecommendations();
  const highlights = await deezerApi.getDeezerProfileTracksHistory();
  const artistRecommendations =
    await deezerApi.getDeezerArtistRecommendations();
  const e = await deezerApi.getDeezerProfilePlaylists();
  const newReleases = await deezerApi.getDeezerNewReleases();
  const editorial = await deezerApi.getDeezerEditorialSelections();
  const genre = await deezerApi.getGenre();

  return {
    props: {
      playlistRecommendations,
      highlights,
      artistRecommendations,
      newReleases,
      editorial,
      genre,
    },
  };
}
