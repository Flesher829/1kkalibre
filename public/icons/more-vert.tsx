const MoreVert = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 48 48"
    {...rest}
  >
    <g fill="none">
      <path
        d="M15.752 24a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0z"
        fill={color}
      />
      <path
        d="M27.252 24a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0z"
        fill={color}
      />
      <path
        d="M35.502 27.25a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5z"
        fill={color}
      />
    </g>
  </svg>
);

export default MoreVert;
