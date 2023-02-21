const IsoscelesTriangle = ({ base, height }) => {
    const x1 = 0;
    const y1 = height;
    const x2 = base / 2;
    const y2 = 0;
    const x3 = base;
    const y3 = height;
  
    return (
      <svg viewBox={`0 0 ${base} ${height}`}>
        <polygon points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} />
      </svg>
    );
  };
  
  export default IsoscelesTriangle;