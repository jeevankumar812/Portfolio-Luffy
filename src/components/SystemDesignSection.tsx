import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const designs = [
  {
    day: "Day 1",
    title: "Client-Server-Architecture",
    desc: "How systems communicate across networks.",
    link: "https://github.com/jeevankumar812/System-Design/tree/main/Day1",
  },
  {
    day: "Day 2",
    title: "HTTP vs HTTPS",
    desc: "Understanding secure communication, encryption (SSL/TLS), and how data is safely transmitted over the web.",
    link: "https://github.com/jeevankumar812/System-Design/tree/main/Day2",
  },
  {
    day: "Day 3",
    title: "DNS Resolution",
    desc: "How domain names are translated into IP addresses and how the internet locates servers efficiently.",
    link: "https://github.com/jeevankumar812/System-Design/tree/main/Day3",
  },
  {
    day: "Day 4",
    title: "API Design (REST vs GraphQL vs gRPC)",
    desc: "Comparing different API architectures and choosing the right approach for performance, flexibility, and scalability.",
    link: "https://github.com/jeevankumar812/System-Design/tree/main/Day4",
  },
];

const SystemDesignSection = () => {
  return (
    <section
      id="system-design"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* 🌊 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black"></div>

      <div className="container relative z-10">

        {/* ⚔️ TITLE */}
        <h2 className="text-5xl text-center text-blue-400 mb-4 font-bold">
          Grand Line Journey 🗺️
        </h2>

        <p className="text-gray-400 text-center mb-20 max-w-xl mx-auto">
          Every day I conquer a new island of system design — moving closer to mastering scalable systems.
        </p>

        {/* 🗺️ PATH LINE */}
        <div className="relative max-w-5xl mx-auto">

          {/* 🔥 PATH */}
          <div className="absolute top-0 left-1/2 w-1 bg-blue-500/30 h-full -translate-x-1/2"></div>

          {/* 🏝️ ISLANDS */}
          {designs.map((item, i) => {
            const left = i % 2 === 0;

            return (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  left ? "justify-start" : "justify-end"
                }`}
              >
                {/* ⚡ DOT */}
                <div className="absolute left-1/2 w-5 h-5 bg-blue-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,150,255,0.8)]"></div>

                {/* 🏝️ CARD */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 30px rgba(0,150,255,0.6)",
                  }}
                  className={`w-[45%] bg-zinc-900 border border-blue-500 p-6 rounded-2xl ${
                    left ? "ml-10" : "mr-10"
                  }`}
                >
                  <p className="text-xs text-blue-400 tracking-widest">
                    {item.day}
                  </p>

                  <h3 className="text-lg font-bold mt-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {item.desc}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    Explore Island <ExternalLink size={16} />
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemDesignSection;