import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, Anchor } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-24">
      <div className="container text-center" ref={ref}>
        <h2 className="text-4xl sm:text-5xl text-gold mb-4">Join My Crew</h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Looking for a nakama to build something great? Let's set sail together.
        </p>

        <div className="flex justify-center gap-6 opacity-0 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
          {[
            { icon: Mail, label: "Email", href: "mailto:jeevan@example.com" },
            { icon: Github, label: "GitHub", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 w-28 flex flex-col items-center gap-3
                         hover:border-primary/30 gold-glow transition-all duration-300 active:scale-[0.97]"
            >
              <link.icon className="w-7 h-7 text-gold" />
              <span className="text-xs text-muted-foreground uppercase tracking-wide">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-border flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Anchor className="w-4 h-4 text-gold" />
          <span>Built by <span className="text-foreground">Jeevan</span> — sailing toward the One Piece of Code</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
