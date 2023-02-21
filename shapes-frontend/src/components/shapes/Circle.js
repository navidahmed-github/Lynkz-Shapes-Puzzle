import React from 'react';

const Circle = ({ radius }) => {
  const diameter = radius * 2;

  return (
    <svg height={diameter} width={diameter}>
      <circle cx={radius} cy={radius} r={radius} fill="blue" />
    </svg>
  );
};

export default Circle;
