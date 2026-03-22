import heroImg from "@/assets/back.png";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Future Pirate King 👑",
  "Backend Conqueror ⚔️",
  "System Design Warrior 🧠",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // 🔥 TYPEWRITER EFFECT
  useEffect(() => {
    let i = 0;
    const current = texts[index];

    const typing = setInterval(() => {
      setDisplayText(current.slice(0, i + 1));
      i++;
      if (i === current.length) {
        clearInterval(typing);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
          setDisplayText("");
        }, 1500);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* 🔥 BACKGROUND ENERGY */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black"></div>

      {/* ⚡ LIGHTNING EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,0,0,0.2)_0%,transparent_70%)] animate-pulse"></div>
      </div>

      {/* 🌊 WAVE */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
        <div className="animate-wave w-[200%] h-full bg-gradient-to-r from-blue-900 via-transparent to-blue-900 rounded-t-full" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">

        {/* ⚔️ TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm">
            ⚓ Welcome Aboard
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-extrabold text-white">
            Hi, I'm <span className="text-red-500">Jeevan</span>
          </h1>

          {/* 🔥 TYPEWRITER LINE */}
          <p className="text-xl text-yellow-400 font-semibold h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
            I don’t just build systems… I conquer them.  
            Every project is a battle. Every bug is an enemy.
          </p>

          {/* 🔥 BUTTON */}
          <motion.a
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 30px rgba(255,0,0,0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-bold transition"
          >
            Enter Grand Line ⚔️
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* 🖼️ IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">

            {/* 🔥 HAKI AURA */}
            <div className="absolute inset-0 rounded-full bg-red-500/30 blur-3xl animate-pulse"></div>

            {/* ⚡ IMAGE */}
            <motion.img
              src={heroImg}
              alt="Luffy"
              className="relative w-80 sm:w-96 drop-shadow-[0_0_40px_rgba(255,0,0,0.8)]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;