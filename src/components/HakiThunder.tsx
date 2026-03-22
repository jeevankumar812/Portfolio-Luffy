import { useEffect, useRef } from "react";

const HakiThunder = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // 🔊 Load sound
    audioRef.current = new Audio("/sounds/thunder.mp3");

    const handleClick = (e: MouseEvent) => {
      // 🔊 Play sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }

      // ⚡ Create lightning effect
      const el = document.createElement("div");
      el.style.position = "fixed";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      el.style.width = "120px";
      el.style.height = "120px";
      el.style.borderRadius = "50%";
      el.style.pointerEvents = "none";
      el.style.zIndex = "9999";
      el.style.transform = "translate(-50%, -50%)";
      el.style.background =
        "radial-gradient(circle, white 0%, red 30%, transparent 70%)";
      el.style.animation = "thunderShock 0.4s ease-out";

      document.body.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, 400);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <style>
      {`
        @keyframes thunderShock {
          0% {
            transform: scale(0.3);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}
    </style>
  );
};

export default HakiThunder;