export type ListeningHistoryItems = {
  tracksHistory: {
    data: ListeningHistoryItem[];
  };
};
export type ListeningHistoryItem = {
  id: number;
  link: string;
  title: string;
  duration: number;
  artist: {
    name: string;
  };
  album: {
    title: string;
  };
};
