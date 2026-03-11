import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <AccommodationsSection />
      <AboutSection />
      <CTASection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
