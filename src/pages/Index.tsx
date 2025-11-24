import HeroSection from "@/components/HeroSection";
import EventsFeed from "@/components/EventsFeed";
import VideoCarousel from "@/components/VideoCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EventsFeed />
      <VideoCarousel />
      <Footer />
    </div>
  );
};

export default Index;
