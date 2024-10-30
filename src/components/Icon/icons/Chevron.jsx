import React from "react";

const Chevron = ({ className }) => {
  return (
    <svg
      className={className}
      width=""
      height=""
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3L7 12L16 21"
        stroke="#545454"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Chevron;
