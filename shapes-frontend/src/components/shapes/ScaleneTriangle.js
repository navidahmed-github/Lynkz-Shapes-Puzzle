import React from "react";

const ScaleneEqualTriangle = ({ a, b, c }) => {
  const B = Math.acos((a * a + c * c - b * b) / (2 * a * c));
  const x1 = 0;
  const y1 = 0;
  const x2 = c;
  const y2 = 0;
  const x3 = Math.cos(B) * a;
  const y3 = Math.sin(B) * a;

  return (
    <svg viewBox={`0 0 ${Math.max(x1, x2, x3)} ${Math.max(y1, y2, y3)}`}>
      <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} />
    </svg>
  );
};

export default ScaleneEqualTriangle;