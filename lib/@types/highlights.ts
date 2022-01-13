import { Track } from "./charts";
import { ProfilePlayListItems } from "./playlist.types";

export type ProfileHighlightsItems = {
  highlights: {
    data: Track[];
  };
  playlists: {
    data: ProfilePlayListItems[];
  };
};
