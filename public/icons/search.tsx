import { FunctionComponent } from 'react';
import { IconProps } from '../../lib/@types';

const Search: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    role='img'
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 32 32'
    {...rest}
    fill={'red'}
  >
    <g
      fill='currentColor'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    >
      <circle cx='14' cy='14' r='12' color='transparent' />
      <path d='M23 23l7 7' />
    </g>
  </svg>
);

export default Search;
