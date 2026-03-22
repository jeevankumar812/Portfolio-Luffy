import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".animate-reveal-up").forEach((child) => {
            (child as HTMLElement).style.animationPlayState = "running";
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    // Pause animations until in view
    el.querySelectorAll(".animate-reveal-up").forEach((child) => {
      (child as HTMLElement).style.animationPlayState = "paused";
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
