import React from "react";

const Octagon = ({ sideLength }) => {
    const side = parseInt(sideLength)
    const x1 = 0;
    const y1 = ((side * (Math.sin(67.5 * Math.PI/180)))/(Math.tan(45 * Math.PI/180))) + (side * (Math.cos(67.5 * Math.PI/180)));
    const x2 = side * (Math.sin(22.5 * Math.PI/180));
    const y2 = x2
    const x3 = y1;
    const y3 = 0;
    const x4 = x3 + (side * Math.cos(22.5 * Math.PI/180));
    const y4 = y2;
    const x5 = x3 * 2;
    const y5 = y1;
    const x6 = x4;
    const y6 = y1 + (side * Math.cos(22.5 * Math.PI/180));
    const x7 = x3;
    const y7 = y1 * 2;
    const x8 = x2;
    const y8 = y6;

  return (
    <svg width={x5} height={y7}>
      <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6} ${x7},${y7} ${x8},${y8}`} fill='blue' />
    </svg>
  );
}

export default Octagon