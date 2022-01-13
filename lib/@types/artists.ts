type Artist = {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  nb_fan?: number;
};

export type Artists = {
  artists: {
    data: Artist[];
  };
};
