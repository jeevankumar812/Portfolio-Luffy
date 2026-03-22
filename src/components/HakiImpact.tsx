import { useEffect, useState } from "react";

const HakiImpact = () => {
  const [flash, setFlash] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      // ⚡ RED FLASH
      setFlash(true);
      setTimeout(() => setFlash(false), 120);

      // 💀 SCREEN SHAKE
      setShake(true);
      setTimeout(() => setShake(false), 300);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* 🔥 RED FLASH */}
      {flash && (
        <div className="fixed inset-0 bg-red-500 opacity-20 pointer-events-none z-[9998]" />
      )}

      {/* 💀 SHAKE WRAPPER */}
      <div className={shake ? "animate-shake" : ""} />
    </>
  );
};

export default HakiImpact;