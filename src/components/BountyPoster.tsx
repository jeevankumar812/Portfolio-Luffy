import { useState } from "react";
import { motion } from "framer-motion";

const BountyPoster = () => {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);

    setTimeout(() => {
      window.open("/resume.pdf", "_blank");
    }, 800);
  };

  return (
    <section
      id="bounty"
      className="py-24 bg-black flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.03 }}
        className="relative bg-yellow-200 p-8 max-w-md w-full rounded-md border-[6px] border-black shadow-[0_0_40px_rgba(255,200,100,0.4)] text-black"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/old-paper.png')",
        }}
      >
        {/* 🔥 TITLE */}
        <h2 className="text-4xl font-black text-center tracking-widest text-black">
          WANTED
        </h2>

        <p className="text-center text-sm tracking-widest text-black font-semibold">
          DEAD OR ALIVE
        </p>

        {/* 🖼️ IMAGE */}
        <div className="text-center mt-6">
          <img
            src="/profile.jpeg"
            alt="profile"
            className="w-40 h-36 mx-auto  border-4 border-black object-cover"
          />

          <h3 className="text-3xl font-black mt-4 tracking-wide text-black">
            Jeevan Kumar
          </h3>

          <p className="text-lg font-semibold text-black">
            Backend Pirate ⚔️
          </p>
        </div>

        

        {/* ⚔️ CRIMES */}
        <div className="mt-6 text-sm text-black">
          <p className="font-bold text-base mb-2">CRIMES:</p>

          <ul className="list-disc ml-5 space-y-1 font-medium">
            <li>Built scalable backend systems</li>
            <li>Mastered MERN stack</li>
            <li>Solved 1000+ DSA problems</li>
          </ul>
        </div>

        {/* 🔐 LOCK SYSTEM */}
        <div className="mt-8 text-center">
          {!unlocked ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleUnlock}
              className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-red-600 transition"
            >
              🔒 Unlock Bounty
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-700 font-bold"
            >
              🔓 Bounty Claimed!
            </motion.div>
          )}
        </div>

        {/* 🔥 BORDER EFFECT */}
        <div className="absolute inset-0 pointer-events-none border-[3px] border-black opacity-20"></div>
      </motion.div>
    </section>
  );
};

export default BountyPoster;