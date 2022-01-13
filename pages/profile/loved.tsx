import type { PropsWithChildren, ReactElement } from "react";
import { getLayout } from "@/layout/layout";
import { ProfileLayout } from "@/layout/ProfileLayout";
import { getDeezerFavouriteTracks } from "pages/api/services";
import { convertTime } from "@/lib/utils";
import { colors } from "@/lib/styled/colors";
import { FavouritesTracks } from "@/lib/@types/favourites";
import * as Icons from "@icons/index";
import { DZTrackListItem, DZTrackListItems } from "@/common/list";
import { Button } from "@/common/button";

const FavouriteTracks = ({
  favouriteTracks,
}: PropsWithChildren<FavouritesTracks>) => {
  return (
    <div>
      <div className="flex">
        <h1>{favouriteTracks.data.length} favourite tracks</h1>
        <div className="ml-10">
          <Button>Listen</Button>
        </div>
      </div>

      <DZTrackListItems
        header1="Track"
        header2="Artist"
        header3="Album"
        header4={<Icons.CarbonTime size={20} color={colors.grey100} />}
        trackImg={favouriteTracks.data.length}
      >
        {favouriteTracks.data.map((track) => (
          <DZTrackListItem
            key={track.id}
            trackLink={track.link}
            trackTitle={track.title}
            trackImg={track.album.cover_medium}
            itemContent1={track.artist.name}
            itemContent2={track.album.title}
            itemContent3={convertTime(track.duration)}
          />
        ))}
      </DZTrackListItems>
    </div>
  );
};

export default FavouriteTracks;

FavouriteTracks.getLayout = (page: ReactElement) =>
  getLayout(<ProfileLayout>{page}</ProfileLayout>);

export async function getStaticProps() {
  const favouriteTracks = await getDeezerFavouriteTracks();

  return {
    props: {
      favouriteTracks,
    },
  };
}
