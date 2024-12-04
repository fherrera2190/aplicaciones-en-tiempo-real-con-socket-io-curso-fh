import { useRef } from "react";

export const BandChart = () => {
  const canvasRef = useRef();

  return (
    <div>
      <canvas ref={canvasRef.current}></canvas>
    </div>
  );
};
