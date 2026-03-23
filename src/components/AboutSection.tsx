import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

type AboutProps = {
  gear5: boolean;
};

const AboutSection: React.FC<AboutProps> = ({ gear5 }) => {
  return (
    <section
      id="about"
      className={`py-28 relative overflow-hidden transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >

      {/* ⚡ BACKGROUND ENERGY */}
      <div
        className={`absolute inset-0 blur-3xl ${
          gear5
            ? "bg-gradient-to-br from-gray-200/40 via-transparent to-gray-300/40"
            : "bg-gradient-to-br from-red-900/20 via-transparent to-yellow-900/20"
        }`}
      ></div>

      <div className="container flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* 🖼️ IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >
            {/* 🔥 AURA */}
            <div
              className={`absolute inset-0 blur-3xl rounded-full animate-pulse ${
                gear5 ? "bg-gray-300/40" : "bg-red-500/40"
              }`}
            ></div>

            {/* ⚡ FLASH */}
            <div className="absolute inset-0 bg-white opacity-0 animate-[flash_3s_infinite] rounded-full"></div>

            <img
              src={profileImg}
              alt="Jeevan"
              className={`relative w-72 sm:w-80 lg:w-96 rounded-2xl border shadow-lg ${
                gear5
                  ? "border-gray-300 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
                  : "border-red-500 shadow-[0_0_60px_rgba(255,0,0,0.8)]"
              }`}
            />
          </motion.div>
        </motion.div>

        {/* 🧠 TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >

          {/* 💀 TITLE */}
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            I AM{" "}
            <span className={gear5 ? "text-black" : "text-red-500"}>
              Jeevan
            </span>
          </h2>

          <h3
            className={`text-2xl sm:text-3xl font-bold ${
              gear5 ? "text-gray-700" : "text-yellow-400"
            }`}
          >
            Future Pirate King of Backend ⚔️
          </h3>

          {/* ⚡ STORY */}
          <p className={gear5 ? "text-gray-700" : "text-gray-400"}>
            I’m a B.E student and a backend developer driven by one goal —
            to master systems like conquering the Grand Line.
          </p>

          {/* 🔥 DSA */}
          <p className={gear5 ? "text-gray-700" : "text-gray-400"}>
            I’ve fought over{" "}
            <span
              className={`font-bold text-lg ${
                gear5 ? "text-black" : "text-red-500"
              }`}
            >
              1000+ battles
            </span>{" "}
            across{" "}
            <span className="text-green-500">LeetCode (400+)</span> and{" "}
            <span className="text-green-600">GeeksforGeeks (600+)</span>.
          </p>

          {/* 🚀 SYSTEM DESIGN */}
          <p className={gear5 ? "text-gray-700" : "text-gray-400"}>
            Now I’m mastering{" "}
            <span
              className={`font-semibold ${
                gear5 ? "text-black" : "text-blue-400"
              }`}
            >
              System Design
            </span>
            , learning how real systems scale.
          </p>

          {/* 🏴‍☠️ QUOTE */}
          <p
            className={`italic border-l-4 pl-4 ${
              gear5
                ? "text-gray-600 border-gray-400"
                : "text-gray-400 border-red-500"
            }`}
          >
            “I don’t run from challenges… I conquer them.
            Every bug is an enemy. Every solution makes me stronger.”
          </p>

          {/* ⚡ BADGE */}
          <div
            className={`inline-block px-4 py-2 rounded-full font-semibold shadow-lg ${
              gear5
                ? "bg-black text-white"
                : "bg-red-600 text-white"
            }`}
          >
            ⚓ Backend Pirate in Progress
          </div>

        </motion.div>
      </div>

      {/* ⚡ FLASH KEYFRAME */}
      <style>
        {`
          @keyframes flash {
            0%, 90%, 100% { opacity: 0; }
            95% { opacity: 0.2; }
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;