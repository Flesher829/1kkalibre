export type GenreArtist = {
  genre: {
    data: GenreArtistItem[];
  };
};

type GenreArtistItem = {
  id: number;
  name: string;
  picture_medium: string;
};
