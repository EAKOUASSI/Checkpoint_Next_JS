import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactForm from '@/components/ContactForm'; 
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
