import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "EPIC TOURNAMENT HIGHLIGHTS",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    views: "125K",
  },
  {
    id: 2,
    title: "HOW TO WIN TOURNAMENTS",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    views: "89K",
  },
  {
    id: 3,
    title: "TOP PLAYS OF THE WEEK",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    views: "156K",
  },
  {
    id: 4,
    title: "GRAND ARENA TUTORIAL",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoId: "dQw4w9WgXcQ",
    views: "92K",
  },
];

const VideoCarousel = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-glow mb-4">
            HIGHLIGHT REELS & TRAILERS
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch the best moments and learn from the pros
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {videos.map((video, index) => (
              <Card
                key={video.id}
                className="flex-shrink-0 w-[350px] md:w-[400px] bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden group snap-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                    </div>
                  </div>
                  {/* Views Badge */}
                  <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-sm font-semibold">
                    {video.views} views
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <a
                    href={`https://youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary hover:text-primary/80 font-semibold uppercase"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          ← Scroll to see more videos →
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
