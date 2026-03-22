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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BountyPoster/>
      <SkillsSection />
      <AchievementsSection/>
      <ProjectsSection />
      <SystemDesignSection/>
      <TimelineSection />
      <ContactSection />
    </div>
  );
};

export default Index;
