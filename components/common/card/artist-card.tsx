import type { FunctionComponent } from "react";
import styled from "styled-components";
import { colors } from "@/lib/styled/colors";
import * as Icons from "@icons/index";

type DZArtistCardProps = {
  artistPicture: string;
  artistName: string;
  nb_fan?: number;
};

export const DZArtistCard: FunctionComponent<DZArtistCardProps> = ({
  artistPicture,
  artistName,
  nb_fan,
}) => {
  return (
    <Wrapper>
      <ArtisteAvatar>
        <img src={artistPicture} alt={artistName} />
        <div className="flex action__icons">
          <div className="action__icon">
            <Icons.Play size={30} color={colors.black100} />
          </div>
          <div className="action__icon">
            <Icons.Heart size={25} color={colors.black100} />
          </div>
        </div>
      </ArtisteAvatar>
      <span>{artistName}</span>
      <span style={{ color: colors.grey100, fontSize: "0.9rem" }}>
        {nb_fan ? `${nb_fan.toLocaleString()} fans` : null}
      </span>
    </Wrapper>
  );
};

const ArtisteAvatar = styled.div`
  width: 180px;
  height: 180px;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 6px;
  background: #0b0b0e;
  transition: all 0.3s ease-out;
  cursor: pointer;
  padding: 1.9rem;
  position: relative;

  span {
    margin-top: 0.25rem;
  }

  &:hover {
    background: ${colors.borderColor};
  }

  &:hover .action__icons {
    opacity: 1;
  }

  .action__icons {
    position: absolute;
    bottom: 4.5rem;
    left: 2%;
    right: 3%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    opacity: 0;
  }

  .action__icon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: ${colors.textColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
