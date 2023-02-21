import React from 'react';

const Rectangle = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="blue" />
    </svg>
  );
};

export default Rectangle;
