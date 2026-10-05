import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TopicMarquee from '@/components/TopicMarquee';
import AboutSection from '@/components/AboutSection';
import ResearchAreasSection from '@/components/ResearchAreasSection';
import ResourcesSection from '@/components/ResourcesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/use-reveal';

const Index = () => {
  useReveal();

  return (
    <div className="min-h-screen bg-background" id="top">
      <Navbar />
      <main>
        <HeroSection />
        <TopicMarquee />
        <AboutSection />
        <ResearchAreasSection />
        <ResourcesSection />
        <ProjectsSection />
        <ProcessSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
