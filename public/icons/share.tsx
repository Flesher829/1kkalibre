import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const Share: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
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
      d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7l-7-7m2 4.83L18.17 12L16 14.17V12.9h-2c-2.07 0-3.93.38-5.66.95c1.4-1.39 3.2-2.48 5.94-2.85l1.72-.27v-.9z"
      fill={color}
    />
  </svg>
);

export default Share;
