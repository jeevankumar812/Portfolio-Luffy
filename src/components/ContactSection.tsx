import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Anchor } from "lucide-react";

type Props = {
  gear5: boolean;
};

const links = [
  {
    icon: Mail,
    label: "Den Den Mushi (Email)",
    href: "mailto:jeevanjeevan63643@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Github,
    label: "Code Log (GitHub)",
    href: "https://github.com/jeevankumar812",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: Linkedin,
    label: "Marine Network (LinkedIn)",
    href: "https://www.linkedin.com/in/k-jeevan-kumar-5b540b266/",
    color: "from-blue-500 to-blue-700",
  },
];

const ContactSection: React.FC<Props> = ({ gear5 }) => {
  return (
    <section
      id="contact"
      className={`py-28 relative overflow-hidden transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >

      {/* 🔥 BACKGROUND */}
      <div
        className={`absolute inset-0 blur-3xl ${
          gear5
            ? "bg-gradient-to-br from-gray-200/40 via-transparent to-gray-300/40"
            : "bg-gradient-to-br from-yellow-900/20 via-black to-red-900/20"
        }`}
      ></div>

      <div className="container text-center relative z-10">

        {/* ⚔️ TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-5xl font-extrabold mb-4 ${
            gear5 ? "text-black" : "text-yellow-400"
          }`}
        >
          Join My Crew 🏴‍☠️
        </motion.h2>

        {/* 🧠 STORY */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mb-14 max-w-xl mx-auto leading-relaxed ${
            gear5 ? "text-gray-700" : "text-gray-400"
          }`}
        >
          The Grand Line is dangerous…  
          But every Pirate King needs a strong crew.  
          If you're ready to build, fight bugs, and conquer systems —  
          let's sail together.
        </motion.p>

        {/* 💀 CONTACT CARDS */}
        <div className="flex flex-wrap justify-center gap-8">

          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                boxShadow: gear5
                  ? "0px 0px 20px rgba(0,0,0,0.3)"
                  : "0px 0px 30px rgba(255,200,0,0.6)",
              }}
              transition={{ delay: i * 0.2 }}
              className={`relative w-44 h-44 rounded-2xl flex flex-col items-center justify-center gap-3 font-semibold overflow-hidden ${
                gear5
                  ? "bg-zinc-900 text-white"
                  : `bg-gradient-to-br ${link.color} text-white`
              }`}
            >
              {/* ✨ SOFT GLOW */}
              <div
                className={`absolute inset-0 opacity-0 hover:opacity-20 blur-2xl transition ${
                  gear5 ? "bg-white" : "bg-white"
                }`}
              ></div>

              {/* ICON */}
              <link.icon className="w-8 h-8" />

              {/* TEXT */}
              <span className="text-sm text-center px-2">
                {link.label}
              </span>
            </motion.a>
          ))}

        </div>

        {/* ⚓ FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`mt-20 pt-10 border-t flex items-center justify-center gap-2 text-sm ${
            gear5
              ? "border-gray-300 text-gray-600"
              : "border-gray-700 text-gray-400"
          }`}
        >
          <Anchor
            className={`w-4 h-4 ${
              gear5 ? "text-black" : "text-yellow-400"
            }`}
          />
          <span>
            Built by{" "}
            <span className={gear5 ? "text-black font-bold" : "text-white font-bold"}>
              Jeevan
            </span>{" "}
            — chasing the One Piece of Backend Mastery
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;