import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResearchAreasSection from '@/components/ResearchAreasSection';
import ProjectsSection from '@/components/ProjectsSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ResearchAreasSection />
      <ProjectsSection />
      <CommunitySection />
      <ContactSection />
    </div>
  );
};

export default Index;
