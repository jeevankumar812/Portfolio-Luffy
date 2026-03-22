import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const warlords = [
  {
    name: "Dracule Mihawk",
    skill: "DSA Mastery",
    desc: "Mastering algorithms, recursion, and problem solving.",
    image: "/assets/mihawk.png",
  },
  {
    name: "Sir Crocodile",
    skill: "System Design",
    desc: "Designing scalable systems and backend architectures.",
    image: "/assets/crocodile.png",
  },
  {
    name: "Donquixote Doflamingo",
    skill: "Backend Development",
    desc: "Building APIs, authentication, and server-side logic.",
    image: "/assets/doflamingo.png",
  },
  {
    name: "Bartholomew Kuma",
    skill: "CS Fundamentals",
    desc: "Operating systems, DBMS, networks, and core concepts.",
    image: "/assets/kuma.png",
  },
  {
    name: "Boa Hancock",
    skill: "Frontend Development",
    desc: "Creating beautiful, responsive, and interactive UI.",
    image: "/assets/boa.png",
  },
  {
    name: "Jinbe",
    skill: "Real-World Projects",
    desc: "Building production-ready MERN stack applications.",
    image: "/assets/jinbei.png",
  },
  {
    name: "Gecko Moria",
    skill: "Multi-Tech Mastery",
    desc: "Exploring new tools, frameworks, and advanced tech.",
    image: "/assets/moria.png",
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
                scale: 1.07,
                boxShadow: "0px 0px 30px rgba(255,0,0,0.6)",
              }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden bg-black text-white shadow-xl group"
            >
              
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={warlord.image}
                  alt={warlord.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>
              </div>

              {/* Content */}
              <div className="p-5">
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