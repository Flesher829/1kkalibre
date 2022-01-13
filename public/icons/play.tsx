import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const Play: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
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
    <g fill="none">
      <path d="M8 19l11-7L8 5v14z" fill={color} />
    </g>
  </svg>
);

export default Play;
