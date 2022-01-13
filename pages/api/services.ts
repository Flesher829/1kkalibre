import { ChartsData, GenresServerData } from "@/lib/@types";
import axios from "axios";

export const getGenre = async () =>
  axios
    .get<GenresServerData>("https://api.deezer.com/genre")
    .then((res) => res.data?.data);

export const getSingleGenreArtists = ({ genreId }: { genreId: number }) =>
  axios
    .get(`https://api.deezer.com/genre/${genreId}/artists`)
    .then((res) => res.data);

// Charts
export const getCharts = async () =>
  axios.get<ChartsData>("https://api.deezer.com/chart").then((res) => res.data);

export const getSingleTrack = async ({ albumId }: { albumId: number }) =>
  axios.get(`https://api.deezer.com/album/${albumId}/tracks`);

export const getSinglePlayList = async ({
  playlistId,
}: {
  playlistId: number;
}) =>
  axios
    .get(`https://api.deezer.com/playlist/${playlistId}`)
    .then((res) => res.data);

export const getArtistProfile = async ({ artistId }: { artistId: number }) =>
  axios
    .get(`https://api.deezer.com/artist/${artistId}`)
    .then((res) => res.data);

// Deezer User Profile
export const getDeezerUserProfileInfo = async () => {
  return await axios({
    url: `https://corsanywhere.herokuapp.com/https://api.deezer.com/user/me?access_token=${token}`,
    method: "GET",
  }).then((res) => res.data);
};

export const getDeezerUserProfileFollows = () => {
  return axios
    .get(
      `https://api.deezer.com/user/me/followings?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);
};

export const getDeezerUserProfileFollowers = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/followers?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerProfileTracksHistory = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/history?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerProfilePlaylists = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/playlists?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerFavouriteTracks = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/tracks?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerProfileArtists = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/artists?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerProfileAlbums = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/albums?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerAlbumRecommendations = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/recommendations/albums?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

// Music Recommendation
export const getDeezerPlaylistRecommendations = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/recommendations/playlists?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerArtistRecommendations = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/recommendations/artists?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerTrackRecommendations = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/recommendations/tracks?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerNewReleases = async () =>
  await axios
    .get(
      `https://api.deezer.com/user/me/recommendations/releases?access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    )
    .then((res) => res.data);

export const getDeezerEditorialSelections = async () =>
  await axios
    .get(`https://api.deezer.com/editorial/0/selection`)
    .then((res) => res.data);
