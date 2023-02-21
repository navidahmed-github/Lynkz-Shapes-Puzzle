import React from "react";

const Pentagon = ({ sideLength }) => {
    const side = parseInt(sideLength)
    const x1 = 0;
    const y1 = side * Math.sin(36 * Math.PI/180);
    const x2 = side * Math.cos(36 * Math.PI/180);
    const y2 = 0;
    const x3 = x2 * 2;
    const y3 = y1;
    const x4 = x3 - (side * Math.sin(18 * Math.PI/180));
    const y4 = y1 + (side * (Math.sin(72 * Math.PI/180)));
    const x5 = (side * Math.sin(18 * Math.PI/180));
    const y5 = y4;

  return (
    <svg width={x3} height={y4}>
      <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5}`} fill='blue' />
    </svg>
  );
}

export default Pentagon