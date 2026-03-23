import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import BountyPoster from "@/components/BountyPoster";
import AchievementsSection from "@/components/AchievementsSection";
import SystemDesignSection from "@/components/SystemDesignSection";

const Index: React.FC = () => {
  const [gear5, setGear5] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-700 ${
        gear5
          ? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black"
          : "bg-black text-white"
      }`}
    >
      <Navbar />
      <HeroSection gear5={gear5} setGear5={setGear5} />

      <AboutSection gear5={gear5} />
      <BountyPoster gear5={gear5} />
      <SkillsSection />
      <AchievementsSection gear5={gear5}/>
      <ProjectsSection gear5={gear5} />
      <SystemDesignSection gear5={gear5}/>
      <TimelineSection />
      <ContactSection gear5={gear5}/>
    </div>
  );
};

export default Index;