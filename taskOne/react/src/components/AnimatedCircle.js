import { useRef, useEffect, useState } from "react";

const AnimatedCircleCanvas = () => {
  const canvasRef = useRef(null);
  const [size, setSize] = useState(30);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const animate = () => {
      setSize((prevSize) => (prevSize >= 300 ? 30 : prevSize + 1));
      drawCircle(ctx, size);
      animationFrame = requestAnimationFrame(animate);
    };

    const drawCircle = (ctx, radius) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#3498db";
      ctx.fill();
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [size]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <canvas ref={canvasRef} width={600} height={600} />
    </div>
  );
};

export default AnimatedCircleCanvas;
