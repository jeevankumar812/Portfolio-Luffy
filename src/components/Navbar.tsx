import { useState, useEffect } from "react";
import { Anchor } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Crew", href: "#skills" },
  { label: "Adventures", href: "#projects" },
  { label: "System Design", href: "#system-design" },
  { label: "Bounty", href: "#bounty" },
  { label: "Journey", href: "#timeline" },
  { label: "Join Crew", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Smooth Scroll Function (Home + Sections)
  const handleScroll = (id: string) => {
    // 👇 HOME (top of page)
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.querySelector(id);
    if (el) {
      const yOffset = -80; // adjust for navbar height
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
              className="text-sm text-gray-400 hover:text-yellow-400 transition duration-300 uppercase"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;