import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const MoreHori: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16"
    {...rest}
  >
    <g fill="none">
      <path d="M5 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill={color} />
      <path d="M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill={color} />
      <path d="M12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill={color} />
    </g>
  </svg>
);

export default MoreHori;
