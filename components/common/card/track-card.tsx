import styled from "styled-components";
import type { FunctionComponent } from "react";
import * as Icons from "@icons/index";
import { colors } from "@/lib/styled/colors";

type CardProps = {
  imageUrl: string;
  name?: string;
  artist?: string;
  title?: string;
  opacity?: string | number;
  hasIcons?: boolean;
  size?: "small" | "medium";
};

type CardStyleProps = {
  opacity: string | number;
  size?: "small" | "medium";
};

export const DZTrackCard: FunctionComponent<CardProps> = ({
  imageUrl,
  name,
  title,
  opacity = 0.3,
  hasIcons = true,
  size,
}) => {
  return (
    <Wrapper>
      <div>
        <CardContainer opacity={`rgba(0,0,0,${opacity})`} size={size}>
          <img src={imageUrl} alt={title} />
          <div className="card__overlay">
            <h1>{size === "small" ? title : null}</h1>
          </div>
          {hasIcons ? (
            <div className="card__action--button">
              <div className="card__action--icon">
                <Icons.Play size={25} color={colors.black100} />
              </div>
              <div className="card__action--icon">
                <Icons.Heart size={20} color={colors.black100} />
              </div>
              <div className="card__action--icon">
                <Icons.MoreHori size={25} color={colors.black100} />
              </div>
            </div>
          ) : null}
        </CardContainer>
        <div className="flex-column">
          <span className="title">{size === "small" ? null : title}</span>
          <span className="artist">{name}</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const CardContainer = styled.div<CardStyleProps>`
  height: ${(props) => (props.size === "small" ? "170px" : "235px")};
  width: ${(props) => (props.size === "small" ? "300px" : "235px")};
  border-radius: 7px;
  position: relative;
  transition: transform 0.2s ease-in-out;

  .card__action--icon {
    &:hover {
      transform: scale(1.2);
    }
  }

  .card__action--icon:nth-child(2),
  .card__action--icon:nth-child(3) {
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }

  &:hover .card__action--icon:nth-child(2),
  &:hover .card__action--icon:nth-child(3) {
    opacity: 1;
  }

  img {
    border-radius: 7px;
    width: 100%;
    height: 100%;
    object-fit: ${(props) => (props.size === "small" ? "cover" : "contain")};
  }

  .card__overlay {
    position: absolute;
    border-radius: 7px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.opacity};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__action--button {
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;

    .card__action--icon {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: ${colors.textColor};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;
