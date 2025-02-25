import { useState, useEffect } from "react";
import "../App.css";

const AnimatedCircle = () => {
  const [size, setSize] = useState(30);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setSize((prevSize) => (prevSize >= 500 ? 30 : prevSize + 1));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="container">
      <div
        className="circle"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
    </div>
  );
};

export default AnimatedCircle;
