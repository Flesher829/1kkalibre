import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const CarbonTime: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
    {...rest}
  >
    <path
      d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z"
      fill={color}
    />
    <path d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z" fill={color} />
  </svg>
);

export default CarbonTime;
