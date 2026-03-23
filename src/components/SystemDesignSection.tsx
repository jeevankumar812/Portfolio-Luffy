import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  gear5: boolean;
};

const sagas = [
  {
    name: "East Blue Saga",
    color: "blue",
    days: [
      { day: "Day 1", title: "Client-Server", link: "https://github.com/jeevankumar812/System-Design/tree/main/Day1" },
      { day: "Day 2", title: "HTTP vs HTTPS", link: "https://github.com/jeevankumar812/System-Design/tree/main/Day2" },
      { day: "Day 3", title: "DNS Resolution", link: "https://github.com/jeevankumar812/System-Design/tree/main/Day3" },
      { day: "Day 4", title: "API Design", link: "https://github.com/jeevankumar812/System-Design/tree/main/Day4" },
      { day: "Day 5", title: "Database Design and Data Modeling", link: "https://github.com/jeevankumar812/System-Design/tree/main/Day5" },
    ],
  },
  {
    name: "Alabasta Saga",
    color: "yellow",
    days: [
      { day: "Day 6", title: "Caching", link: "#" },
    ],
  },
];

const getColorClasses = (color: string, gear5: boolean) => {
  if (gear5) {
    return {
      text: "text-black",
      border: "border-gray-500",
      glow: "",
      bg: "bg-gray-400/50",
    };
  }

  const colors: any = {
    blue: {
      text: "text-blue-400",
      border: "border-blue-500",
      glow: "shadow-[0_0_25px_rgba(0,150,255,0.8)]",
      bg: "bg-blue-500/30",
    },
    yellow: {
      text: "text-yellow-400",
      border: "border-yellow-500",
      glow: "shadow-[0_0_25px_rgba(255,200,0,0.8)]",
      bg: "bg-yellow-500/30",
    },
  };

  return colors[color];
};

const SystemDesignSection: React.FC<Props> = ({ gear5 }) => {
  return (
    <section
      id="system-design"
      className={`py-28 relative overflow-hidden transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >

      {/* 🌊 BACKGROUND */}
      <div
        className={`absolute inset-0 ${
          gear5
            ? "bg-gradient-to-br from-gray-200/40 via-transparent to-gray-300/40"
            : "bg-gradient-to-br from-blue-900/20 via-black to-black"
        }`}
      ></div>

      <div className="container relative z-10">

        {/* ⚔️ TITLE */}
        <h2
          className={`text-5xl text-center mb-6 font-bold ${
            gear5 ? "text-black" : "text-blue-400"
          }`}
        >
          Grand Line Journey 🗺️
        </h2>

        {/* 💀 QUOTE */}
        <p
          className={`text-center italic max-w-xl mx-auto mb-10 leading-relaxed ${
            gear5 ? "text-gray-700" : "text-gray-400"
          }`}
        >
          "I don’t follow paths… I create my own route through the Grand Line of System Design.  
          Every concept I conquer brings me one step closer to mastering scalable systems."
        </p>

        {/* 🏴‍☠️ SAGAS */}
        <div className="space-y-28 max-w-5xl mx-auto">

          {sagas.map((saga, sagaIndex) => {
            const theme = getColorClasses(saga.color, gear5);

            return (
              <div key={saga.name}>

                {/* 🔥 SAGA TITLE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-center mb-12"
                >
                  <h3 className={`text-3xl font-bold ${theme.text}`}>
                    {saga.name}
                  </h3>
                </motion.div>

                {/* 🗺️ TIMELINE */}
                <div className="relative">

                  {/* CENTER LINE */}
                  <div
                    className={`absolute left-1/2 top-0 bottom-0 w-[2px] ${theme.bg} -translate-x-1/2`}
                  ></div>

                  {saga.days.map((item, i) => {
                    const isLeft = i % 2 === 0;

                    return (
                      <motion.div
                        key={item.day}
                        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className={`relative flex items-center mb-16 ${
                          isLeft ? "justify-start" : "justify-end"
                        }`}
                      >

                        {/* ⚡ NODE */}
                        <div
                          className={`absolute left-1/2 w-5 h-5 rounded-full -translate-x-1/2 z-10 ${theme.bg} ${theme.glow}`}
                        ></div>

                        {/* 🧠 CARD (ALWAYS DARK) */}
                        <motion.a
                          href={item.link}
                          target="_blank"
                          whileHover={{
                            scale: 1.08,
                            boxShadow: gear5
                              ? "0px 0px 20px rgba(0,0,0,0.3)"
                              : theme.glow,
                          }}
                          className={`w-[45%] bg-zinc-900 border border-gray-600 p-6 rounded-xl text-white ${
                            isLeft ? "ml-10" : "mr-10"
                          }`}
                        >
                          <p className={`text-xs ${theme.text}`}>
                            {item.day}
                          </p>

                          <h3 className="font-bold mt-1">
                            {item.title}
                          </h3>

                          <span className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                            Explore <ExternalLink size={12} />
                          </span>
                        </motion.a>
                      </motion.div>
                    );
                  })}
                </div>

                {/* 🚢 TRANSITION */}
                {sagaIndex !== sagas.length - 1 && (
                  <div
                    className={`text-center mt-8 animate-pulse ${
                      gear5 ? "text-gray-600" : theme.text
                    }`}
                  >
                    🚢 Sailing to Next Saga...
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemDesignSection;