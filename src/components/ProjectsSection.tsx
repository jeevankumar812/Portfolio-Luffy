import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "No Due Management System",
    desc: "Defeated system complexity and automated clearance process.",
    bounty: "₿ 500,000,000",
    villain: "Rob Lucci",
    image: "/assets/lucci.png",
    tags: ["Node.js", "MongoDB", "Express", "React"],
    github: "https://github.com/your-repo",
    live: "#",
  },
  {
    name: "Hotel Booking System",
    desc: "Conquered booking chaos with scalable backend systems.",
    bounty: "₿ 320,000,000",
    villain: "God Enel",
    image: "/assets/enel.png",
    tags: ["MERN", "REST API", "Auth"],
    github: "https://github.com/your-repo",
    live: "#",
  },
  {
    name: "Blog Website",
    desc: "Built a content system with full CRUD and authentication.",
    bounty: "₿ 150,000,000",
    villain: "Hody Jones",
    image: "/assets/hody.png",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/your-repo",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 bg-black text-white relative">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-black blur-3xl"></div>

      <div className="container relative z-10">

        {/* ⚔️ TITLE */}
        <h2 className="text-5xl text-center text-red-500 font-extrabold mb-4">
          Battles Won ⚔️
        </h2>

        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Every system I built is a villain I defeated on my journey.
        </p>

        {/* 💀 GRID */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 40px rgba(255,0,0,0.7)",
              }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-zinc-900 border border-red-500 rounded-2xl overflow-hidden group"
            >

              {/* 🖼️ VILLAIN IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.villain}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              {/* ⚔️ CONTENT */}
              <div className="p-5">
                <p className="text-xs text-red-400 mb-1">
                  Defeated: {project.villain}
                </p>

                <h3 className="text-lg font-bold text-yellow-400">
                  {project.name}
                </h3>

                <p className="text-red-500 font-semibold text-md mb-2">
                  {project.bounty}
                </p>

                <p className="text-sm text-gray-400 mb-3">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-zinc-800 border border-zinc-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-400 hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-400"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>

              {/* 💀 STAMP */}
              <div className="absolute top-3 right-3 text-xs bg-red-600 px-2 py-1 rounded-full">
                Defeated ⚔️
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;