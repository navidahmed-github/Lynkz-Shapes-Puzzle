import React, { useRef, useEffect } from 'react';

function Oval({ width, height }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    ctx.beginPath();
    ctx.ellipse(cx, cy, width / 2, height / 2, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke();
  }, [width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Oval

