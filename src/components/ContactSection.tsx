import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Anchor } from "lucide-react";

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

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-black text-white relative overflow-hidden"
    >
      {/* 🔥 BACKGROUND AURA */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-red-900/20 blur-3xl"></div>

      <div className="container text-center relative z-10">

        {/* ⚔️ TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl text-yellow-400 font-extrabold mb-4"
        >
          Join My Crew 🏴‍☠️
        </motion.h2>

        {/* 🧠 STORY */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 mb-14 max-w-xl mx-auto leading-relaxed"
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
                boxShadow: "0px 0px 30px rgba(255,200,0,0.6)",
              }}
              transition={{ delay: i * 0.2 }}
              className={`relative w-44 h-44 rounded-2xl bg-gradient-to-br ${link.color} flex flex-col items-center justify-center gap-3 text-white font-semibold overflow-hidden`}
            >
              {/* 🔥 GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white blur-2xl transition"></div>

              {/* ICON */}
              <link.icon className="w-8 h-8" />

              {/* TEXT */}
              <span className="text-sm text-center px-2">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* ⚓ FINAL LINE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-10 border-t border-gray-700 flex items-center justify-center gap-2 text-gray-400 text-sm"
        >
          <Anchor className="w-4 h-4 text-yellow-400" />
          <span>
            Built by <span className="text-white font-bold">Jeevan</span> —  
            chasing the One Piece of Backend Mastery
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;