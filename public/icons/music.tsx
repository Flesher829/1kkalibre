import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const Music: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 20 20"
    {...rest}
  >
    <g fill="none">
      <path
        d="M14.702 2.226A1 1 0 0 1 16 3.18V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.368V15.5a2.5 2.5 0 1 1-1-2V5.368a1 1 0 0 1 .702-.955l7-2.187zM8 7.32l7-2.188V3.18L8 5.368V7.32zM5.5 14a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3zm6.5-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0z"
        fill={color}
      />
    </g>
  </svg>
);

export default Music;
