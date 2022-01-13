import styled from "styled-components";
import { Button } from "@/common/button";
import { colors } from "@/lib/styled/colors";
import { getCharts, getSinglePlayList } from "pages/api/services";
import { convertTime } from "@/lib/utils";
import * as Icons from "@icons/index";
import { IconButton } from "@/common/button/IconButton";
import { ChartPlaylist, Track } from "@/lib/@types/charts";
import { getLayout } from "@/layout/layout";
import { PropsWithChildren } from "react";
import { DZTrackListItem, DZTrackListItems } from "@/common/list";

const PlayListDetails = ({ playlist }: PropsWithChildren<ChartPlaylist>) => {
  return (
    <>
      <PlayListCoverContainer>
        {/* cover image */}
        <PlayListCoverImage>
          <div className="album__cover">
            <img src={playlist?.picture_medium} alt={playlist?.title} />
          </div>
          <div className="album__text">
            <div className="play-icon">
              <Icons.Play size={52} color={colors.textColor} />
            </div>
          </div>
        </PlayListCoverImage>

        {/* cover description */}
        <PlayListCoverDescription>
          <div>
            <h1>{playlist?.title}</h1>
          </div>

          <div className="cover__description">
            <span className="cover__creator">{playlist?.creator?.name}</span>
            <div className="description">
              <span>{playlist?.description}</span>
            </div>
            <div className="description__meta">
              <span>{playlist?.tracks?.data?.length} tracks</span>.
              <span>{convertTime(playlist?.duration)}</span>.
              <span>{playlist?.fans} fans</span>
            </div>
          </div>
        </PlayListCoverDescription>

        {/* cover controls */}
        <PlayListCoverControls>
          <Button>Play</Button>
          <div className="icons">
            <IconButton icon={<Icons.Heart size={18} color="#fff" />} />
            <IconButton icon={<Icons.Share size={20} color="#fff" />} />
            <IconButton icon={<Icons.MoreHori size={20} color="#fff" />} />
          </div>
        </PlayListCoverControls>

        <SearchContainer>
          <Icons.Search size={19} color={colors.grey100} />
          <input placeholder="Search within tracks" />
        </SearchContainer>
      </PlayListCoverContainer>

      <DZTrackListItems
        header1="Track"
        header2="Artist"
        header3="Album"
        header4={<Icons.CarbonTime size={20} color={colors.grey100} />}
        trackImg={playlist.tracks.data.length}
      >
        {playlist?.tracks?.data?.map((track: Track, index: number) => {
          return (
            <DZTrackListItem
              trackImg={track.album.cover_medium}
              trackTitle={track.title}
              key={track.id}
              itemContent1={track.artist.name}
              itemContent2={track.album.title}
              itemContent3={convertTime(track.duration)}
            />
          );
        })}
      </DZTrackListItems>
    </>
  );
};

PlayListDetails.getLayout = getLayout;

export default PlayListDetails;

const SearchContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.grey100};
  background: ${colors.borderColor};
  align-items: center;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  width: 350px;

  input {
    border: none;
    background: none;
    outline: none;
    margin-left: 0.4rem;
    width: 100%;
    font-family: inherit;
    color: inherit;
  }
`;

const PlayListCoverContainer = styled.div`
  display: grid;
  grid-template-areas:
    "cover-image cover-description cover-description"
    "cover-image cover-description cover-description"
    "cover-image cover-footer-controls cover-footer-controls"
    "search-input search-input search-input";
  grid-template-columns: 200px auto;
  grid-template-rows: 50px 1fr;
  max-width: 1050px;
  gap: 10px;
  margin: auto;
`;

const PlayListCoverImage = styled.div`
  position: relative;
  height: 195px;
  width: 195px;
  margin-bottom: 1rem;
  grid-area: cover-image;

  @media (min-width: 801px) {
    width: 200px;
    height: 200px;
    border-radius: 5px;
  }

  img {
    width: 190px;
    height: auto;
    border-radius: 5px;
    grid-area: cover-image;

    @media (min-width: 801px) {
      width: 200px;
      height: auto;
      border-radius: 5px;
    }
  }

  .play-icon {
    position: absolute;
    left: 20px;
    height: 10%;
    width: 100%;
    bottom: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }

  .album__text {
    border-radius: 5px;
    padding: 1rem;
    position: absolute;
    z-index: 5000000000;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
  }
`;

const PlayListCoverDescription = styled.div`
  color: ${colors.borderColor};
  display: flex;
  flex-direction: column;
  grid-area: cover-description;
  padding: 0.6rem;

  .cover__description {
    margin-top: 1rem;
    color: ${colors.grey100};
    padding: 0.6rem;
    font-size: 0.8rem;
  }

  .cover__creator {
    color: ${colors.textColor};
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2rem;
    color: ${colors.textColor};
    height: 20px;
    margin: 0;
    padding: 0.6rem;
    margin-top: -10px;
  }
`;

const PlayListCoverControls = styled.div`
  grid-area: cover-footer-controls;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  margin-bottom: 3rem;

  .icons {
    display: flex;
    gap: 10px;
  }
`;

export async function getStaticPaths() {
  const playlists = await getCharts();

  const paths = playlists?.playlists?.data?.map((playlist: any) => ({
    params: { id: playlist?.id?.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const playlist = await getSinglePlayList({ playlistId: params.id });

  return {
    props: {
      playlist,
    },
  };
}
