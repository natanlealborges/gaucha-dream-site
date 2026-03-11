import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AccommodationsSection />
      <EventsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
