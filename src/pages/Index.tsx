import HeroSection from "@/components/HeroSection";
import BattleFeatures from "@/components/BattleFeatures";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BattleFeatures />
      <VideoCarousel />
      <Footer />
    </div>
  );
};

export default Index;
