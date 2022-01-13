import type { PropsWithChildren, ReactElement } from "react";
import { getLayout } from "@/layout/layout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { getDeezerProfileTracksHistory } from "pages/api/services";
import { convertTime } from "@/lib/utils";
import { ListeningHistoryItems } from "@/lib/@types/history";
import { DZTrackListItem, DZTrackListItems } from "@/common/list";

const ListeningHistory = ({
  tracksHistory,
}: PropsWithChildren<ListeningHistoryItems>) => {
  return (
    <>
      <h1>Listening history</h1>
      <DZTrackListItems
        header1="#"
        header2="Track"
        header3="Artist"
        header4="Album"
        header5="L."
      >
        {tracksHistory.data.map((track, index: number) => (
          <DZTrackListItem
            key={index}
            index={index}
            trackLink={track.link}
            itemContent1={track.title}
            itemContent2={track.artist.name}
            itemContent3={track.album.title}
            itemContent4={convertTime(track.duration)}
          />
        ))}
      </DZTrackListItems>
    </>
  );
};

export default ListeningHistory;

ListeningHistory.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);

export async function getStaticProps() {
  const tracksHistory = await getDeezerProfileTracksHistory();

  return {
    props: {
      tracksHistory,
    },
  };
}
