type ChartPlaylists = {
  id: number;
  title: string;
  picture_medium: string;
  description: string;
  duration: number;
  fans: number;
  creator: {
    name: string;
  };
  tracks: {
    data: Track[];
  };
};

export type Artist = {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
};

export type Album = {
  title: string;
  cover_medium: string;
  id: number;
  link: string;
};

export type Track = {
  id: number;
  title: string;
  link: string;
  duration: number;
  rank: number;
  artist: Artist;
  album: Album;
};

export type ChartPlaylist = {
  playlist: ChartPlaylists;
};
