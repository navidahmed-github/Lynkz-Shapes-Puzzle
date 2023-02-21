import React from 'react';

const Square = ({ size }) => {
  return (
    <svg width={size} height={size}>
      <rect width={size} height={size} fill="red" />
    </svg>
  );
};

export default Square;
