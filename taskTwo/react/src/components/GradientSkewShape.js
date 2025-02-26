import { useState, useEffect } from "react";
import "../App.css";

export default function GradientSkewShape() {
  const [percentage, setPercentage] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const gradients = [
    "linear-gradient(0deg, white, red)",
    "linear-gradient(0deg, white, blue)",
    "linear-gradient(0deg, white, purple)",
    "linear-gradient(0deg, white, green)",
  ];

  useEffect(() => {
    const speed = 0.5;
    const animate = () => {
      setPercentage((prev) => {
        if (prev >= 100) {
          setColorIndex((prevIndex) => (prevIndex + 1) % gradients.length);
          return 0;
        }
        return prev + speed;
      });
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [gradients.length]);

  return (
    <canvas
      className="shape"
      style={{
        background: gradients[colorIndex],
        clipPath: `polygon(0% 0%, 100% 0%, 100% ${percentage}%, 0% ${percentage}%)`,
      }}
    ></canvas>
  );
}
