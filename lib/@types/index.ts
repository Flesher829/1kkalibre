export type IconProps = {
  size: number;
  color: string;
  className?: string;
};

export type GenreServerData = {
  id?: number;
  name?: string;
  picture?: string;
  picture_big?: string;
  picture_medium?: string;
  picture_small?: string;
  picture_xl?: string;
};

export type GenresServerData = {
  data: GenreServerData[];
};

export type Artist = {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
};

export type ChartData = {
  id?: number;
  title?: string;
  link?: string;
  duration?: number;
  rank?: number;
  artiste: Artist;
  albums?: Album;
};

export type Album = {
  title: string;
  cover_medium: string;
  id: number;
  link: string;
};

export type ChartsData = {
  data: ChartData[];
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

export type PlayList = {
  id: number;
  title: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  duration: any;
  description: string;
  fans: number;
  creator: {
    id: number;
    name: string;
    link: string;
  };
  tracks: {
    data: Track[];
  };
};
