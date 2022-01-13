import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const Browse: FunctionComponent<IconProps> = ({ size, color, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 7H4v-5h5zM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 7h-5V4h5zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-1 7h-5v-5h5zM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM9 9H4V4h5z"
        fill={color}
      />
    </svg>
  );
};

export default Browse;
