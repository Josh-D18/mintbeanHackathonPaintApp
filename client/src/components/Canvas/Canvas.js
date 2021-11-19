import { useRef, useEffect } from "react";
import "../Canvas/Canvas.scss";

function Canvas() {
  const canvasRef = useRef();
  const mouse = { x: 0, y: 0 };
  const mouseMovementCapture = (e) => {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  useEffect(() => {
    console.log();
  });

  const paint = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    console.log(mouseMovementCapture(e));
  };

  return (
    <div className="canvas">
      <canvas
        className="canvas__Board"
        ref={canvasRef}
        onMouseDown={(e) => paint(e)}
        onMouseMove={(e) => mouseMovementCapture(e)}
      />
    </div>
  );
}

export default Canvas;
