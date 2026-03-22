import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

import mihakImg from "@/assets/mihakk.jpg";
import crcoImg from "@/assets/crco.jpg";
import doflaImg from "@/assets/dofla.jpg";
import kumaImg from "@/assets/kuma.jpg";
import hankoImg from "@/assets/hankco.jpg";
import jinbeImg from "@/assets/jinbe.jpg";
import gekkoImg from "@/assets/gekko.jpg";

const warlords = [
  {
    name: "Dracule Mihawk",
    skill: "DSA Mastery",
    desc: "Mastering algorithms, recursion, and problem solving.",
    image: mihakImg,
    size: "w-34 h-34", // ✅ FIXED
  },
  {
    name: "Sir Crocodile",
    skill: "System Design",
    desc: "Designing scalable systems and backend architectures.",
    image: crcoImg,
    size: "w-50 h-50",
  },
  {
    name: "Donquixote Doflamingo",
    skill: "Backend Development",
    desc: "Building APIs, authentication, and server-side logic.",
    image: doflaImg,
    size: "w-34 h-34",
  },
  {
    name: "Bartholomew Kuma",
    skill: "CS Fundamentals",
    desc: "Operating systems, DBMS, networks, and core concepts.",
    image: kumaImg,
    size: "w-42 h-42",
  },
  {
    name: "Boa Hancock",
    skill: "Frontend Development",
    desc: "Creating beautiful, responsive, and interactive UI.",
    image: hankoImg,
    size: "w-34 h-38",
  },
  {
    name: "Jinbe",
    skill: "Real-World Projects",
    desc: "Building production-ready MERN stack applications.",
    image: jinbeImg,
    size: "w-34 h-34",
  },
  {
    name: "Gecko Moria",
    skill: "Multi-Tech Mastery",
    desc: "Exploring new tools, frameworks, and advanced tech.",
    image: gekkoImg,
    size: "w-34 h-34",
  },
];

const TimelineSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container" ref={ref}>
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl text-center text-gold mb-4">
          Challenging the Seven Warlords ⚔️
        </h2>

        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          My journey of mastering each domain — facing every warlord step by step.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {warlords.map((warlord, i) => (
            <motion.div
              key={warlord.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(255,0,0,0.6)",
              }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative  overflow-hidden bg-black text-white shadow-xl group p-6"
            >
              
              {/* Image Section (FIXED) */}
              <div className="flex justify-center items-center mb-4">
                <img
                  src={warlord.image}
                  alt={warlord.name}
                  className={`${warlord.size} object-cover  border-2 border-red-500 group-hover:scale-110 transition duration-500`}
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-red-400">
                  {warlord.name}
                </h3>

                <p className="text-sm font-semibold mt-1">
                  {warlord.skill}
                </p>

                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {warlord.desc}
                </p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-red-500 blur-2xl transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;