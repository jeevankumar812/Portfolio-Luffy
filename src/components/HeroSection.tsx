import heroImg from "@/assets/back.png";
import gear5Img from "@/assets/whitee.png";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  gear5: boolean;
  setGear5: React.Dispatch<React.SetStateAction<boolean>>;
};

const texts: string[] = [
  "Future Pirate King 👑",
  "Backend Conqueror ⚔️",
  "System Design Warrior 🧠",
];

const HeroSection: React.FC<HeroProps> = ({ gear5, setGear5 }) => {
  const [index, setIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>("");
  const [transforming, setTransforming] = useState<boolean>(false);

  // 🔥 TYPEWRITER
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

  // ⚡ GEAR 5
  const handleGear5 = () => {
    setTransforming(true);

    setTimeout(() => {
      setGear5(true);
      setTransforming(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 💨 SMOKE SCREEN */}
      {transforming && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="smoke"></div>
        </div>
      )}

      {/* ⚡ FLASH */}
      {transforming && (
        <div className="absolute inset-0 bg-white z-40 animate-flash"></div>
      )}

      {/* 🎨 BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          gear5
            ? "bg-gradient-to-br from-white via-gray-100 to-gray-200"
            : "bg-gradient-to-br from-red-900/30 via-black to-black"
        }`}
      ></div>

      {/* 🌊 WAVE */}
      {!gear5 && (
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <div className="animate-wave w-[200%] h-full bg-gradient-to-r from-blue-900 via-transparent to-blue-900 rounded-t-full" />
        </div>
      )}

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">

        {/* ⚔️ TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={`flex-1 text-center lg:text-left space-y-6 ${
            gear5 ? "text-black" : "text-white"
          }`}
        >
          <p className="uppercase tracking-[0.4em] text-sm text-yellow-400">
            ⚓ Welcome Aboard
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
            Hi,{" "}
            <span className={gear5 ? "text-black" : "text-red-500"}>
              Jeevan
            </span>
          </h1>

          {/* TYPEWRITER */}
          <p className={`text-xl font-semibold h-8 ${gear5 ? "text-gray-700" : "text-yellow-400"}`}>
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          {/* 🔥 BUTTONS */}
          <div className="flex gap-4 justify-center lg:justify-start">

            {/* ENTER BUTTON */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#about"
              className={`px-8 py-4 rounded-xl font-bold ${
                gear5 ? "bg-black text-white" : "bg-red-600 text-white"
              }`}
            >
              Enter Grand Line ⚔️
            </motion.a>

            {/* ⚡ GEAR 5 BUTTON (UPGRADED) */}
            {!gear5 && (
              <div className="relative">

                {/* 💨 FLOATING SMOKE PARTICLES */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute w-3 h-3 bg-white rounded-full blur-md animate-ping top-2 left-6"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full blur-md animate-ping bottom-2 right-6"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full blur-md animate-ping top-4 right-10"></div>
                </div>

                <motion.button
                  onClick={handleGear5}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 40px rgba(255,255,255,0.9)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow: [
                      "0px 0px 10px rgba(255,255,255,0.5)",
                      "0px 0px 30px rgba(255,255,255,1)",
                      "0px 0px 10px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="px-6 py-4 bg-white text-black font-bold rounded-xl relative z-10"
                >
                  ⚡ Gear 5
                </motion.button>
              </div>
            )}

          </div>
        </motion.div>

        {/* 🖼️ IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">

            <div
              className={`absolute inset-0 rounded-full blur-3xl animate-pulse ${
                gear5 ? "bg-gray-300/40" : "bg-red-500/30"
              }`}
            ></div>

            <motion.img
              src={gear5 ? gear5Img : heroImg}
              className="relative w-80 sm:w-96"
              animate={{
                y: [0, -15, 0],
                scale: transforming ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 2,
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