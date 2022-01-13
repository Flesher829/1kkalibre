import { FunctionComponent } from "react";
import Link from "next/link";
import * as Icons from "@icons/index";
import styled from "styled-components";

type CardProps = {
  title?: string;
  imageUrl: string;
  hasIcons?: boolean;
  playTrack?: (trackUrl: string) => void;
};

export const Card: FunctionComponent<CardProps> = ({
  title,
  imageUrl,
  hasIcons,
}) => {
  return (
    <Wrapper>
      <CardContainer>
        <img src={imageUrl} alt={title} />
        <div className="card__text">
          <span>{title}</span>
        </div>
      </CardContainer>

      {hasIcons ? (
        <div className="icons">
          <Icons.Play size={50} color="#fff" />
        </div>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  .icons {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
`;

const CardContainer = styled.div`
  height: 220px;
  width: 300px;
  border-radius: 8px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  .card__text {
    position: absolute;
    border-radius: 8px;
    padding: 1rem;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
