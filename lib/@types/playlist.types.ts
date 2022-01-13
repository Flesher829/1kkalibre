export type ProfilePlayListItems = {
  playlists: {
    data: PlayListItem[];
  };
};

export type PlayListItem = {
  id: string;
  title: string;
  name?: string;
  picture_medium: string;
  nb_tracks?: number;
  creator: {
    name: string;
  };
};
