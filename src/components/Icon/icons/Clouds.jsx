import React from "react";

const Clouds = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect
        x="0.5"
        y="0.587891"
        width="32"
        height="32"
        fill="url(#pattern0_1365_789)"
      />
      <defs>
        <pattern
          id="pattern0_1365_789"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use xlinkHref="#image0_1365_789" transform="scale(0.005)" />
        </pattern>
        <image
          id="image0_1365_789"
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Clouds;
