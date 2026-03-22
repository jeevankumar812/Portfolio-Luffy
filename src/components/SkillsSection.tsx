import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import nodeImg from "@/assets/nodejs.png";
import mongoImg from "@/assets/mongod.png";
import reactImg from "@/assets/react.png";
import gitImg from "@/assets/git.png";
import expressImg from "@/assets/ex.png";
import tsImg from "@/assets/type.png";

const crewMembers = [
  {
    role: "Captain",
    skill: "Node.js",
    power: "Backend Power",
    image: nodeImg,
    size: "w-30 h-30",
  },
  {
    role: "Swordsman",
    skill: "MongoDB",
    power: "Database Control",
    image:mongoImg,
    size: "w-30 h-30",
  },
  {
    role: "Navigator",
    skill: "React",
    power: "UI Navigation",
    image:reactImg,
    size: "w-30 h-30",

  },
  {
    role: "Sniper",
    skill: "Git",
    power: "Git Control",
    image:gitImg,
    size: "w-30 h-30",
  },
  {
    role: "Shipwright",
    skill: "Express.js",
    power: "Server Builder",
    image:expressImg,
    size: "w-21 h-20",
  },
  {
    role: "Helmsman",
    skill: "TypeScript",
    power: "Type Control",
    image:tsImg,
    size: "w-20 h-25",
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container" ref={ref}>
        
        {/* 🔥 Title */}
        <h2 className="text-4xl sm:text-5xl text-center text-gold mb-4">
          My Crew ⚔️
        </h2>

        {/* 🏴‍☠️ Passion Line */}
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-16 leading-relaxed">
          I’m not just learning technologies…  
          I’m building my crew to conquer the Grand Line of Code.  
          Every skill is a weapon. Every project is a battle.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {crewMembers.map((member, i) => (
            <motion.div
              key={member.skill}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgba(255,0,0,0.6)",
              }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 rounded-2xl text-center bg-black border border-gray-700 text-white overflow-hidden group"
            >
              
              {/* ⚡ Haki Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-red-500 blur-2xl transition"></div>

              {/* 🖼️ Tech Logo */}
              <motion.img
                src={member.image}
                alt={member.skill}
                className={`${member.size} object-contain mx-auto mb-4`}
                whileHover={{ scale: 1.2 }}
              />

              {/* Role */}
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                {member.role}
              </p>

              {/* Skill */}
              <p className="font-semibold text-lg">
                {member.skill}
              </p>

              {/* Power */}
              <p className="text-sm mt-1 italic text-gray-400">
                {member.power}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;