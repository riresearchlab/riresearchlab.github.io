import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResearchAreasSection from '@/components/ResearchAreasSection';
import ProjectsSection from '@/components/ProjectsSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="top">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ResearchAreasSection />
        <ProjectsSection />
        <section id="community" className="relative">
          <CommunitySection />
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
