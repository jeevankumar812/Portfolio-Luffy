import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

import nodueImg from "@/assets/nodue.png";
import blogImg from "@/assets/blog.png";
import hotelImg from "@/assets/hotel.png";

// ✅ MERN ICONS
import reactIcon from "@/assets/react.png";
import nodeIcon from "@/assets/node.png";
import mongoIcon from "@/assets/mongod.png";
import expressIcon from "@/assets/exp.png";

type Props = {
  gear5: boolean;
};

const mernStack = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "Express", icon: expressIcon },
];

const projects = [
  {
    name: "No - Due Project",
    desc: "Automated clearance system with multi-role approvals.",
    image: nodueImg,
    github: "https://github.com/jeevankumar812/No-Due-Project",
    live: "#",
  },
  {
    name: "Hotel Booking System",
    desc: "Scalable booking platform with authentication and APIs.",
    image: hotelImg,
    github: "https://github.com/jeevankumar812/Hotel-Booking-Platform",
    live: "#",
  },
  {
    name: "Blog Website",
    desc: "Full CRUD blog system with comments and auth.",
    image: blogImg,
    github: "https://github.com/jeevankumar812/Blog-Website",
    live: "#",
  },
];

const ProjectsSection: React.FC<Props> = ({ gear5 }) => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="projects"
      className={`py-28 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >
      <div className="container">

        {/* TITLE */}
        <h2
          className={`text-5xl text-center font-bold mb-16 ${
            gear5 ? "text-black" : "text-red-500"
          }`}
        >
          Battles Won ⚔️
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              onClick={() => setSelected(project)}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`cursor-pointer rounded-2xl overflow-hidden border ${
                gear5
                  ? "bg-white border-gray-300 shadow-lg"
                  : "bg-zinc-900 border-gray-700"
              }`}
            >
              <img
                src={project.image}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3
                  className={`font-bold ${
                    gear5 ? "text-black" : "text-yellow-400"
                  }`}
                >
                  {project.name}
                </h3>
                <p
                  className={`text-sm ${
                    gear5 ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={`fixed inset-0 flex items-center justify-center z-50 px-5 ${
              gear5
                ? "bg-white/80 backdrop-blur-md"
                : "bg-black/90 backdrop-blur-md"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className={`relative rounded-2xl p-6 max-w-5xl w-full flex flex-col md:flex-row gap-10 items-center border ${
                gear5
                  ? "bg-white border-gray-300 shadow-2xl"
                  : "bg-zinc-900 border-red-500"
              }`}
            >

              {/* ❌ CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className={`absolute top-4 right-4 p-2 rounded-full transition ${
                  gear5
                    ? "bg-gray-200 hover:bg-gray-300 text-black"
                    : "bg-black/70 hover:bg-red-600 text-white"
                }`}
              >
                <X size={22} />
              </button>

              {/* 🖼️ IMAGE */}
              <motion.img
                src={selected.image}
                initial={{ x: -100, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-[500px] h-[300px] object-cover rounded-xl border-4 ${
                  gear5
                    ? "border-gray-300 shadow-lg"
                    : "border-red-500 shadow-[0_0_50px_rgba(255,0,0,0.6)]"
                }`}
              />

              {/* ⚡ TECH STACK */}
              <div className="flex flex-col gap-5 w-full">

                <h2
                  className={`text-2xl font-bold mb-2 ${
                    gear5 ? "text-black" : "text-red-500"
                  }`}
                >
                  Tech Stack Used ⚡
                </h2>

                {mernStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg border transition ${
                      gear5
                        ? "bg-gray-100 border-gray-300 hover:bg-gray-200"
                        : "bg-zinc-800 border-zinc-700 hover:border-red-500"
                    }`}
                  >
                    <img src={tech.icon} className="w-12 h-12" />
                    <span
                      className={`text-lg font-medium ${
                        gear5 ? "text-black" : "text-white"
                      }`}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}

                {/* LINKS */}
                <div className="flex gap-6 mt-6">
                  <a
                    href={selected.github}
                    target="_blank"
                    className={`flex items-center gap-2 ${
                      gear5
                        ? "text-gray-700 hover:text-black"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Github /> Code
                  </a>

                  <a
                    href={selected.live}
                    target="_blank"
                    className={`flex items-center gap-2 ${
                      gear5 ? "text-black" : "text-blue-400"
                    }`}
                  >
                    <ExternalLink /> Live
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;