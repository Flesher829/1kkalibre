export type ListItemProps = {
  itemContent1?: string;
  itemContent2?: string;
  itemContent3?: string;
  itemContent4?: string | any;
  index?: number | undefined;
  trackLink?: string;
  previewLink?: string;
  trackTitle?: string;
  trackImg?: string;
  gridCol?: string;
  noGridTableLines?: string;
  positionIcon?: string;
  iconColor?: string;
  favouriteTrack?: boolean;
};

export type ListStyleProps = {
  noGridTableLines?: string;
  trackImg?: string;
  positionIcon?: string;
  padding?: string;
};
