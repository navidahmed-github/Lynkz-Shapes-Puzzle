import React from "react";

const convertToRadians = (degrees) => {
    return degrees * Math.PI/180
}

const Heptagon = ({ sideLength }) => {
    const side = parseInt(sideLength)


    const height = side/(2*Math.tan(Math.PI/2/7))

    // Diagonal Short
    const dShort = 2*side*Math.cos(Math.PI/7)

    const x1 = 0; // Origin
    const y1 = height - (side * Math.sin(convertToRadians(51.43)));
    const x2 = (((side * Math.cos(convertToRadians(51.43))) + side + (side * Math.cos(convertToRadians(51.43)))) - dShort) / 2;
    const y2 =  side / 2
    const x3 = ((side * Math.cos(convertToRadians(51.43))) + (side / 2));
    const y3 = 0; // Origin
    const x4 = x2 + dShort;
    const y4 = y2;
    const x5 = (side * Math.cos(convertToRadians(51.43))) + side + (side * Math.cos(convertToRadians(51.43)));
    const y5 = y1;
    const x6 = (side * Math.cos(convertToRadians(51.43))) + side;
    const y6 = height;
    const x7 = side * Math.cos(convertToRadians(51.43));
    const y7 = height;

  return (
    <svg width={x5} height={height}>
      <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6} ${x7},${y7}`} fill='blue' />
    </svg>
  );
}

export default Heptagon