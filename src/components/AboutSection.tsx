import { motion } from "framer-motion";
import profileImg from "@/assets/luff.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 relative bg-black text-white overflow-hidden">

      {/* ⚡ BACKGROUND ENERGY */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-yellow-900/20 blur-3xl"></div>

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
            {/* 🔥 HAKI AURA */}
            <div className="absolute inset-0 bg-red-500/40 blur-3xl rounded-full animate-pulse"></div>

            {/* ⚡ LIGHTNING FLASH */}
            <div className="absolute inset-0 bg-white opacity-0 animate-[flash_3s_infinite] rounded-full"></div>

            <img
              src={profileImg}
              alt="Jeevan"
              className="relative w-72 sm:w-80 lg:w-96 rounded-2xl border border-red-500 
              shadow-[0_0_60px_rgba(255,0,0,0.8)]"
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

          {/* 💀 MAIN TITLE (DOMINANT) */}
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            I AM <span className="text-red-500">JEEVAN</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl text-yellow-400 font-bold">
            Future Pirate King of Backend ⚔️
          </h3>

          {/* ⚡ STORY */}
          <p className="text-gray-400 leading-relaxed">
            I’m a B.E student and a backend developer driven by one goal —  
            to master systems like conquering the Grand Line.
          </p>

          {/* 🔥 DSA FLEX */}
          <p className="text-gray-400 leading-relaxed">
            I’ve fought over <span className="text-red-500 font-bold text-lg">1000+ battles</span>  
            across <span className="text-yellow-400">LeetCode (400+)</span> and  
            <span className="text-green-400"> GeeksforGeeks (600+)</span>.  
            Earned the GFG T-shirt — proof of consistency.
          </p>

          {/* 🚀 SYSTEM DESIGN */}
          <p className="text-gray-400 leading-relaxed">
            Now I’m mastering <span className="text-blue-400 font-semibold">System Design</span>,  
            learning how real systems scale and survive under pressure.
          </p>

          {/* 🏴‍☠️ QUOTE */}
          <p className="text-gray-400 italic border-l-4 border-red-500 pl-4">
            “I don’t run from challenges… I conquer them.  
            Every bug is an enemy. Every solution makes me stronger.”
          </p>

          {/* ⚡ BADGE */}
          <div className="inline-block px-4 py-2 bg-red-600 rounded-full font-semibold shadow-lg">
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