import heroImg from "@/assets/back.png";
import gear5Img from "@/assets/whitee.png";
import { ChevronDown, Briefcase } from "lucide-react";
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
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [transforming, setTransforming] = useState(false);

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
        }, 1200);
      }
    }, 50);

    return () => clearInterval(typing);
  }, [index]);

  // ⚡ TRANSFORMATION
  const handleGear5 = () => {
    setTransforming(true);
    setGear5(true);

    setTimeout(() => {
      setTransforming(false);
    }, 350);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 💨 SMOKE */}
      {transforming && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="smoke-fast"></div>
        </div>
      )}

      {/* ⚡ FLASH */}
      {transforming && (
        <div className="absolute inset-0 bg-white z-40 animate-flash-fast"></div>
      )}

      {/* 🎨 BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          gear5
            ? "bg-gradient-to-br from-white via-gray-100 to-gray-200"
            : "bg-gradient-to-br from-red-900/40 via-black to-black"
        }`}
      ></div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          className={`flex-1 space-y-6 text-center lg:text-left ${
            gear5 ? "text-black" : "text-white"
          }`}
        >
          <p className="text-yellow-400 uppercase tracking-widest text-sm">
            ⚓ Welcome Aboard
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
            Hi,{" "}
            <span className={gear5 ? "text-black" : "text-red-500"}>
              Jeevan
            </span>
          </h1>

          <p className={`text-xl ${gear5 ? "text-gray-700" : "text-yellow-400"}`}>
            {displayText}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center lg:justify-start">

            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              className={`px-8 py-4 rounded-xl font-bold ${
                gear5 ? "bg-black text-white" : "bg-red-600 text-white"
              }`}
            >
              Enter Grand Line ⚔️ <ChevronDown className="inline ml-2" />
            </motion.a>

            {!gear5 && (
              <motion.button
                onClick={handleGear5}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0px 0px 50px rgba(255,255,255,1)",
                }}
                animate={{
                  boxShadow: [
                    "0px 0px 10px rgba(255,255,255,0.5)",
                    "0px 0px 40px rgba(255,255,255,1)",
                    "0px 0px 10px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="px-6 py-4 bg-white text-black font-bold rounded-xl"
              >
                ⚡ Gear 5
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* IMAGE + CTA */}
        <motion.div className="flex-1 flex flex-col items-center gap-6">

          <div className="relative">
            <div
              className={`absolute inset-0 rounded-full blur-3xl ${
                gear5 ? "bg-gray-300/40" : "bg-red-500/40"
              }`}
            ></div>

            <motion.img
              key={gear5 ? "gear5" : "normal"}
              src={gear5 ? gear5Img : heroImg}
              className="w-80 sm:w-96"
              animate={{
                y: [0, -15, 0],
                scale: transforming ? [1, 1.4, 1] : 1,
                filter: transforming ? ["blur(6px)", "blur(0px)"] : "blur(0px)",
              }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* 👉 GESTURE TEXT */}
          <div className="flex items-center gap-2 animate-pulse">
            <span className="text-sm font-semibold text-yellow-400">
              Click here for Professional Portfolio
            </span>
            <span className="text-xl animate-bounce">👇</span>
          </div>

          {/* 💼 PORTFOLIO BUTTON */}
          <motion.a
            href="https://portfolio-silk-zeta-69.vercel.app/"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className={`
              flex items-center gap-3 px-8 py-4 rounded-xl font-bold
              shadow-xl transition-all
              ${
                gear5
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            `}
          >
            <Briefcase size={20} />
            Portfolio
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;