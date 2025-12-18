import { Button } from "@/components/ui/button";
import { Download, Trophy, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-glow mb-6">
            GRAND BATTLE
            <span className="block text-primary">ARENA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Join the Ultimate Free Fire Tournament Platform. Compete, Win, and Earn Rewards!
          </p>

          {/* Stats - Hidden on Mobile */}
          <div className="hidden md:flex flex-wrap justify-center gap-8 my-8">
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg neon-border">
              <Users className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold text-glow">10K+</div>
                <div className="text-sm text-muted-foreground">Active Players</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg neon-border">
              <Trophy className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold text-glow">500+</div>
                <div className="text-sm text-muted-foreground">Tournaments</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg neon-border">
              <Zap className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold text-glow">₹50L+</div>
                <div className="text-sm text-muted-foreground">Prize Pool</div>
              </div>
            </div>
          </div>

          {/* Mobile Download Button - Shown only on Mobile */}
          <div className="md:hidden pt-6 animate-float">
            <Button 
              variant="hero" 
              size="xl"
              className="text-xl px-12 py-6 h-auto w-full max-w-sm"
              asChild
            >
              <a href="https://github.com/aryansingh32/grand-arena-download/releases/download/v1.0.1/grand.battle.arena.apk">
                <Download className="w-6 h-6 mr-3" />
                DOWNLOAD THE APP
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Available for Android • Free to Download
            </p>
          </div>

          {/* Main CTA - Hidden on Mobile */}
          <div className="hidden md:block pt-8 animate-float">
            <Button 
              variant="hero" 
              size="xl"
              className="text-2xl px-16 py-8 h-auto"
              asChild
            >
              <a href="https://github.com/aryansingh32/grand-arena-download/releases/download/v1.0.0/grand.battle.arena.apk">
                <Download className="w-8 h-8 mr-3" />
                DOWNLOAD THE APP
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Available for Android • Free to Download
            </p>
          </div>

          {/* Secondary Info */}
          <div className="pt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-foreground/70">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Live Tournaments Daily</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Instant Prize Distribution</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
