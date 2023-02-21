import React from "react";

const Hexagon = ({ sideLength }) => {
    const side = parseInt(sideLength)
    const x1 = Math.cos(30 * Math.PI/180) * side;
    const y1 = 0;
    const x2 = x1 * 2;
    const y2 = Math.sin(30 * Math.PI/180) * side;
    const x3 = x2;
    const y3 = y2 + side;
    const x4 = x1;
    const y4 = y3 + y2;
    const x5 = 0;
    const y5 = y3;
    const x6 = 0;
    const y6 = y2;

  return (
    <svg width={x2} height={y4}>
      <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6}`} fill='blue' />
    </svg>
  );
}

export default Hexagon