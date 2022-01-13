import { FunctionComponent } from 'react';
import styled from 'styled-components';

type Props = {
  imageUrl: string | undefined;
  name: string | undefined;
};

export const GenreListItem: FunctionComponent<Props> = ({ imageUrl, name }) => {
  return (
    <>
      <Figure>
        <img src={imageUrl} alt='' />
        <p className='name'>{name}</p>
      </Figure>
    </>
  );
};

const Figure = styled.figure`
  position: relative;
  height: 127px;
  width: 250px;
  cursor: pointer;

  img {
    height: inherit;
    width: inherit;
    object-fit: cover;
    border-radius: 4px;
  }

  .name {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:before {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
