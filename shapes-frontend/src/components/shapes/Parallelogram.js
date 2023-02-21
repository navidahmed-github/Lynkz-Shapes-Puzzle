import React from "react";

const Parallelogram = ({ width, height }) => {
    const h = parseInt(height)
    const w = parseInt(width)
    const x1 = 0;
    const y1 = 0;
    const x2 = w;
    const y2 = 0;
    const x3 = w + (w / 2);
    const y3 = h;
    const x4 = w / 2;
    const y4 = h;

  return (
    <svg width={x3} height={y4}>
      <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4}`} fill='blue' />
    </svg>
  );
}

export default Parallelogram