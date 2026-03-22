import { useEffect, useState } from "react";

const HakiCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        background: "red",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
};

export default HakiCursor;