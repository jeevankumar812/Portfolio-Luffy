import { useEffect, useState } from "react";

const LightningEffect = () => {
  const [effects, setEffects] = useState<any[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setEffects((prev) => [...prev, newEffect]);

      setTimeout(() => {
        setEffects((prev) => prev.filter((ef) => ef.id !== newEffect.id));
      }, 500);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {effects.map((ef) => (
        <div
          key={ef.id}
          style={{
            position: "fixed",
            top: ef.y,
            left: ef.x,
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle, white, red, transparent)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9999,
            animation: "explode 0.5s ease-out",
          }}
        />
      ))}

      <style>
        {`
          @keyframes explode {
            0% { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
          }
        `}
      </style>
    </>
  );
};

export default LightningEffect;