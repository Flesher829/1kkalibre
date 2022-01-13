import { FunctionComponent } from "react";
import { IconProps } from "../../lib/@types";

const ChevronRight: FunctionComponent<IconProps> = ({
  size,
  color,
  ...rest
}) => (
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
    <g fill={color}>
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </g>
  </svg>
);

export default ChevronRight;
