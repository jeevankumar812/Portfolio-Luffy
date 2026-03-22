import { motion } from "framer-motion";

const skills = [
  {
    name: "Gomu Gomu no Backend",
    tech: "Node.js",
    img: "/assets/luffy.png",
    color: "from-red-500 to-orange-400",
  },
  {
    name: "Haki of Debugging",
    tech: "Problem Solving",
    img: "/images/haki.png",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "Gear 2 Speed",
    tech: "Performance",
    img: "/images/gear2.png",
    color: "from-yellow-400 to-red-500",
  },
  {
    name: "Observation Haki",
    tech: "System Design",
    img: "/images/eye.png",
    color: "from-blue-500 to-cyan-400",
  },
];

export default function DevilFruitSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className={`relative p-6 rounded-2xl text-white shadow-xl bg-gradient-to-r ${skill.color} overflow-hidden`}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition duration-300"></div>

          {/* Image */}
          <motion.img
            src={skill.img}
            alt={skill.name}
            className="w-16 h-16 mb-4"
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Text */}
          <h3 className="text-xl font-bold">{skill.name}</h3>
          <p className="text-sm opacity-90">{skill.tech}</p>

          {/* Aura Effect */}
          <div className="absolute -inset-1 blur-xl opacity-20 bg-white animate-pulse"></div>
        </motion.div>
      ))}
    </div>
  );
}