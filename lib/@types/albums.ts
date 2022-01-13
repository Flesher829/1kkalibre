export type ProfileAlbumItem = {
  id: number;
  title: string;
  cover_medium: string;
  artist: {
    id: number;
    name: string;
    picture_medium: string;
  };
};

export type ProfileAlbumItems = {
  albumRecommendations: {
    data: ProfileAlbumItem[];
  };
  album: {
    data: [];
  };
};
