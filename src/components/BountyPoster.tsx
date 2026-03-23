import { useState } from "react";
import { motion } from "framer-motion";

type BountyProps = {
  gear5: boolean;
};

const BountyPoster: React.FC<BountyProps> = ({ gear5 }) => {
  const [unlocked, setUnlocked] = useState<boolean>(false);

  const handleUnlock = () => {
    setUnlocked(true);

    setTimeout(() => {
      window.open("/resume.pdf", "_blank");
    }, 800);
  };

  return (
    <section
      id="bounty"
      className={`py-24 flex justify-center items-center transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200"
          : "bg-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.03 }}
        className={`relative p-8 max-w-md w-full rounded-md border-[6px] text-black ${
          gear5
            ? "bg-white border-gray-400 shadow-[0_0_30px_rgba(0,0,0,0.15)]"
            : "bg-yellow-200 border-black shadow-[0_0_40px_rgba(255,200,100,0.4)]"
        }`}
        style={{
          backgroundImage: gear5
            ? "none"
            : "url('https://www.transparenttextures.com/patterns/old-paper.png')",
        }}
      >
        {/* 🔥 TITLE */}
        <h2 className="text-4xl font-black text-center tracking-widest">
          WANTED
        </h2>

        <p className="text-center text-sm tracking-widest font-semibold">
          DEAD OR ALIVE
        </p>

        {/* 🖼️ IMAGE */}
        <div className="text-center mt-6">
          <img
            src="/profile.jpeg"
            alt="profile"
            className={`w-40 h-36 mx-auto border-4 object-cover ${
              gear5 ? "border-gray-400" : "border-black"
            }`}
          />

          <h3 className="text-3xl font-black mt-4 tracking-wide">
            Jeevan Kumar
          </h3>

          <p
            className={`text-lg font-semibold ${
              gear5 ? "text-gray-700" : "text-black"
            }`}
          >
            Backend Pirate ⚔️
          </p>
        </div>

        {/* ⚔️ CRIMES */}
        <div className="mt-6 text-sm">
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
              className={`px-6 py-3 rounded-full flex items-center justify-center gap-2 mx-auto transition ${
                gear5
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-black text-white hover:bg-red-600"
              }`}
            >
              🔒 Unlock Bounty
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`font-bold ${
                gear5 ? "text-black" : "text-green-700"
              }`}
            >
              🔓 Bounty Claimed!
            </motion.div>
          )}
        </div>

        {/* 🔥 BORDER EFFECT */}
        <div
          className={`absolute inset-0 pointer-events-none border-[3px] opacity-20 ${
            gear5 ? "border-gray-400" : "border-black"
          }`}
        ></div>
      </motion.div>
    </section>
  );
};

export default BountyPoster;