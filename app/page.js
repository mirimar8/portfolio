import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#252526]">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
