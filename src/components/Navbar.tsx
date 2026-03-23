import { useState, useEffect } from "react";
import { Anchor } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Crew", href: "#skills" },
  { label: "Adventures", href: "#projects" },
  { label: "System Design", href: "#system-design" },

  // 🔥 NEW (ZORO SECTION)
  { label: "Battle Records", href: "#achievements" },

  { label: "Bounty", href: "#bounty" },
  { label: "Journey", href: "#timeline" },
  { label: "Hobbies", href: "#passion" },
  { label: "Join Crew", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Smooth Scroll
  const handleScroll = (id: string) => {
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/70 py-3 shadow-lg"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">

        {/* 🏴‍☠️ LOGO */}
        <div
          onClick={() => handleScroll("#")}
          className="flex items-center gap-2 text-yellow-400 font-bold text-xl cursor-pointer"
        >
          <Anchor className="w-6 h-6" />
          Jeevan
        </div>

        {/* ⚔️ NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="relative text-sm text-gray-400 hover:text-yellow-400 transition duration-300 uppercase group"
            >
              {link.label}

              {/* 🔥 COOL UNDERLINE EFFECT */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;