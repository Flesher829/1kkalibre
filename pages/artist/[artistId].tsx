import { getLayout } from "@/layout/layout";
import {
  getArtistProfile,
  getDeezerArtistRecommendations,
} from "pages/api/services";

const Artist = ({ artist }) => {
  console.log(artist);
  return <h1>Artist Page</h1>;
};

export default Artist;

Artist.getLayout = getLayout;

export async function getStaticProps({ params }) {
  const artist = await getArtistProfile({ artistId: params.id });
  return {
    props: {
      artist,
    },
  };
}
export async function getStaticPaths() {
  const allArtists = await getDeezerArtistRecommendations();
  const paths = allArtists?.data?.map((artist) => ({
    params: { artistId: artist.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
