import { Zap, Trophy, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Matchmaking",
    description: "Join battles in seconds with our advanced matchmaking system",
    color: "neon-cyan",
    delay: "0s",
  },
  {
    icon: Trophy,
    title: "Real Prizes",
    description: "Win real money and exclusive rewards in every tournament",
    color: "primary",
    delay: "0.2s",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Fair play guaranteed with anti-cheat protection and 24/7 monitoring",
    color: "neon-magenta",
    delay: "0.4s",
  },
];

const BattleFeatures = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-glow mb-4">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the most advanced gaming platform designed for champions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: feature.delay }}
              >
                {/* Glass Card */}
                <div className="relative bg-card/40 backdrop-blur-xl border-2 border-border hover:border-primary rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    {/* Animated Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary group-hover:border-neon-cyan transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-10 h-10 text-primary group-hover:text-neon-cyan transition-colors duration-500 animate-pulse" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Border Gradient */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-neon-cyan to-primary bg-[length:200%_100%] animate-pulse-glow blur-sm" />
                  </div>
                </div>

                {/* Floating Particles around Card */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BattleFeatures;
