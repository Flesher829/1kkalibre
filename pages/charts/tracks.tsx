import styled from "styled-components";
import * as Icons from "@icons/index";
import { colors } from "@/lib/styled/colors";
import { truncateTitle } from "@/lib/utils";
import { Button } from "@/common/button";
import { getCharts } from "pages/api/services";

const Tracks = ({ charts }) => {
  return (
    <Container>
      <Wrapper>
        <AlbumCoverContainer>
          <div className="album__cover">
            <img
              src={charts?.tracks?.data[0]?.album?.cover_medium}
              alt={charts?.tracks?.data[0]?.title}
            />
          </div>
          <div className="album__text">
            <span>Top 10 Tracks</span>
            <div className="play-icon">
              <Icons.Play size={52} color={colors.textColor} />
            </div>
          </div>

          <Button>Play</Button>
        </AlbumCoverContainer>

        <AlbumTextInfo>
          <h1>Top 10 Tracks</h1>
          <span>From Deezer charts</span>
        </AlbumTextInfo>
      </Wrapper>
      {/* content */}
      <div className="content">
        <nav className="heading">
          <div>#</div>
          <div>Track</div>
          <div>Artiste</div>
        </nav>

        {charts?.tracks?.data.map((alb, index: number) => (
          <ol key={alb.id} className="list">
            <div>
              <div className="list__item">{index + 1}</div>
              <div className="list__play-icon">
                <a href={alb?.link} rel="noreferrer" target="_blank">
                  <Icons.Play size={32} color={colors.textColor} />
                </a>
              </div>
            </div>
            <div>{truncateTitle(alb?.title, 45)}</div>
            <div>{truncateTitle(alb?.artist?.name, 25)}</div>
          </ol>
        ))}
      </div>
    </Container>
  );
};

export default Tracks;

export async function getStaticProps() {
  const charts = await getCharts();

  return {
    props: {
      charts: charts,
    },
  };
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50%;
`;

const AlbumTextInfo = styled.div``;

const AlbumCoverContainer = styled.div`
  position: relative;
  height: 200px;
  max-width: 1100px;
  margin-right: auto;
  width: 200px;
  margin-bottom: 5rem;

  button {
    margin-top: 1rem;
  }

  img {
    width: 200px;
    height: auto;
    border-radius: 5px;
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
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0.6rem auto;

  .heading {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 2fr;
    border-top: 1px solid ${colors.borderColor};
    border-bottom: 1px solid ${colors.borderColor};
    padding: 0.95rem;
    margin: auto;
    color: ${colors.textColor};
    font-size: 14px;

    &:hover {
      color: ${colors.red};
      cursor: pointer;
    }
  }

  .list {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 2fr;
    border-top: 1px solid ${colors.borderColor};
    margin: auto;
    padding: 0.95rem;
    color: ${colors.textColor};
    font-size: 14px;
    position: relative;
    cursor: pointer;

    &:hover {
      background: ${colors.sideNavBgColor};
      border-radius: 9px;
      padding: 0.95rem;
    }

    &:hover .list__item {
      opacity: 0;
    }

    &:hover .list__play-icon {
      opacity: 1;
    }

    .list__play-icon {
      position: absolute;
      top: 1px;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 100000;
      display: flex;
      align-items: center;
      opacity: 0;
    }
  }
`;
