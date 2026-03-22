import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import tshirt from "@/assets/gfg-tshirt.jpeg";
/* 🔥 Animated Counter Hook */
const useCounter = (target: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return count;
};

const AchievementsSection = () => {
  const total = useCounter(1000);
  const leetcode = useCounter(400);
  const gfg = useCounter(600);

  return (
    <section id="achievements" className="py-28 relative overflow-hidden">

      {/* 🌌 Background Aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-black to-yellow-900/20 blur-3xl"></div>

      <div className="container text-center relative z-10">

        {/* 🏴‍☠️ Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-red-500 mb-6"
        >
          The Battle Record ⚔️
        </motion.h2>

        {/* ✨ Story */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          I didn’t just solve problems… I fought battles.  
          Every question was an enemy. Every solution made me stronger.  
          This is my journey across the Grand Line of Code.
        </motion.p>

        {/* ⚡ Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">

          {/* Total */}
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 40px rgba(255,0,0,0.7)",
            }}
            className="p-8 rounded-2xl bg-black border border-red-500 text-white"
          >
            <h3 className="text-5xl font-bold text-yellow-400">
              {total}+
            </h3>
            <p className="mt-2 text-gray-400">Total Battles Won</p>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 40px rgba(255,165,0,0.7)",
            }}
            className="p-8 rounded-2xl bg-black border border-yellow-500 text-white"
          >
            <h3 className="text-5xl font-bold text-orange-400">
              {leetcode}+
            </h3>
            <p className="mt-2 text-gray-400">LeetCode</p>
          </motion.div>

          {/* GFG */}
          <motion.div
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 40px rgba(0,255,100,0.7)",
            }}
            className="p-8 rounded-2xl bg-black border border-green-500 text-white"
          >
            <h3 className="text-5xl font-bold text-green-400">
              {gfg}+
            </h3>
            <p className="mt-2 text-gray-400">GeeksforGeeks</p>
          </motion.div>

        </div>

        {/* 🏆 GFG Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 40px rgba(0,255,100,0.6)",
          }}
          className="max-w-md mx-auto bg-black text-white p-6 rounded-2xl border border-green-500 mb-16"
        >
          <h3 className="text-green-400 font-bold text-lg mb-3">
            🏆 Proof of Consistency
          </h3>

          <img
            src={tshirt}
            alt="GFG T-shirt"
            className="w-40 mx-auto rounded-lg"
          />

          <p className="text-sm text-gray-400 mt-4">
            Earned GeeksforGeeks T-shirt after solving 600+ problems.
          </p>

          <p className="text-xs text-gray-500 mt-2 italic">
            “Consistency beats everything.” ⚡
          </p>
        </motion.div>

        {/* 🔗 Profile Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          
          <a
            href="https://leetcode.com/your-username"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-110 transition"
          >
            LeetCode <ExternalLink size={16} />
          </a>

          <a
            href="https://www.geeksforgeeks.org/user/your-username"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded-full font-semibold hover:scale-110 transition"
          >
            GFG <ExternalLink size={16} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;