import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ExternalLink } from "lucide-react";

import tshirt from "@/assets/gfg-tshirt.jpeg";
import zoroIdle from "@/assets/jk.png";
import zoroAttack from "@/assets/jk2.png";
import thunder from "@/assets/effect.png";
import swordSound from "@/assets/sword-sound2.mp3";

type Props = {
  gear5: boolean;
};

/* 🔥 Counter */
const useCounter = (target: number, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1000;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      startVal += step;
      if (startVal >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, start]);

  return count;
};

const AchievementsSection: React.FC<Props> = ({ gear5 }) => {
  const [activated, setActivated] = useState(false);
  const [flash, setFlash] = useState(false);
  const [attacking, setAttacking] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ✅ PRELOAD AUDIO (CRITICAL FIX)
  useEffect(() => {
    const audio = new Audio(swordSound);
    audio.preload = "auto";
    audio.load();
    audioRef.current = audio;
  }, []);

  const total = useCounter(1000, activated);
  const leetcode = useCounter(400, activated);
  const gfg = useCounter(600, activated);

  const handleZoro = () => {
    if (attacking) return;

    // ⚡ STEP 1: Show flash instantly
    setFlash(true);

    // 🔊 STEP 2: Play sound instantly (NO DELAY)
    if (audioRef.current) {
      const soundClone = audioRef.current.cloneNode(true) as HTMLAudioElement;
      soundClone.play().catch(() => {});
    }

    // ⚔️ STEP 3: Attack AFTER flash (PERFECT SYNC)
    setTimeout(() => {
      setAttacking(true);
      setActivated(true);
    }, 50);

    // ⚡ Remove flash quickly
    setTimeout(() => setFlash(false), 180);

    // 🔄 Reset attack
    setTimeout(() => setAttacking(false), 250);
  };

  return (
    <section
      id="achievements"
      className={`py-28 relative overflow-hidden transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >
      {/* ⚡ THUNDER */}
      {flash && (
        <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
          <img
            src={thunder}
            className="w-full h-full object-cover animate-flash-ultra"
          />
        </div>
      )}

      <div className="container relative z-10 flex flex-col lg:flex-row gap-12 items-center">

        {/* LEFT */}
        <div className="flex-1 text-center">

          <h2 className={`text-5xl font-bold mb-6 ${gear5 ? "text-black" : "text-red-500"}`}>
            The Battle Record ⚔️
          </h2>

          {!activated && (
            <p className="text-gray-400 mb-10">
              Click Zoro to unleash your battle stats ⚔️
            </p>
          )}

          {activated && (
            <>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="p-6 bg-black rounded-xl border border-gray-600">
                  <h3 className="text-4xl text-yellow-400 font-bold">{total}+</h3>
                  <p className="text-gray-400">Total Battles</p>
                </div>

                <div className="p-6 bg-black rounded-xl border border-gray-600">
                  <h3 className="text-4xl text-orange-400 font-bold">{leetcode}+</h3>
                  <p className="text-gray-400">LeetCode</p>
                </div>

                <div className="p-6 bg-black rounded-xl border border-gray-600">
                  <h3 className="text-4xl text-green-400 font-bold">{gfg}+</h3>
                  <p className="text-gray-400">GFG</p>
                </div>
              </div>

              <div className="bg-black p-6 rounded-xl border border-gray-600 mb-10">
                <img src={tshirt} className="w-32 mx-auto mb-4" />
                <p className="text-gray-400">
                  Earned GFG T-shirt after 600+ problems ⚡
                </p>
              </div>

              <div className="flex justify-center gap-6">
                <a
                  href="https://leetcode.com/u/kjeevankumar08/"
                  target="_blank"
                  className="px-6 py-3 bg-yellow-500 text-black rounded-full flex items-center gap-2"
                >
                  LeetCode <ExternalLink size={16} />
                </a>

                <a
                  href="https://www.geeksforgeeks.org/profile/jeevankumar08"
                  target="_blank"
                  className="px-6 py-3 bg-green-500 text-black rounded-full flex items-center gap-2"
                >
                  GFG <ExternalLink size={16} />
                </a>
              </div>
            </>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <motion.img
            key={attacking ? "attack" : "idle"}
            src={attacking ? zoroAttack : zoroIdle}
            onClick={handleZoro}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: attacking ? [1, 1.25, 1] : 1,
            }}
            transition={{ duration: 0.2 }}
            className="w-80 cursor-pointer drop-shadow-[0_0_40px_rgba(0,255,100,0.7)]"
          />
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;