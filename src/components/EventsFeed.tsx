import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "MEGA SQUAD SHOWDOWN",
    date: "Dec 28, 2025",
    time: "8:00 PM IST",
    prizePool: "₹50,000",
    participants: 245,
    status: "REGISTERING",
    type: "SQUAD",
  },
  {
    id: 2,
    title: "SOLO WARRIOR CHAMPIONSHIP",
    date: "Dec 29, 2025",
    time: "6:00 PM IST",
    prizePool: "₹25,000",
    participants: 189,
    status: "UPCOMING",
    type: "SOLO",
  },
  {
    id: 3,
    title: "DUO LEGENDS BATTLE",
    date: "Dec 30, 2025",
    time: "7:00 PM IST",
    prizePool: "₹35,000",
    participants: 156,
    status: "REGISTERING",
    type: "DUO",
  },
  {
    id: 4,
    title: "NEW YEAR GRAND FINALE",
    date: "Jan 1, 2026",
    time: "9:00 PM IST",
    prizePool: "₹1,00,000",
    participants: 512,
    status: "COMING SOON",
    type: "SQUAD",
  },
];

const EventsFeed = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-glow mb-4">
            UPCOMING BATTLES
          </h2>
          <p className="text-lg text-muted-foreground">
            Register now and claim your victory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 p-6 group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge 
                    variant="outline" 
                    className="mb-2 border-primary text-primary"
                  >
                    {event.type}
                  </Badge>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </div>
                <Badge 
                  className={`${
                    event.status === "REGISTERING" 
                      ? "bg-primary text-primary-foreground" 
                      : event.status === "UPCOMING"
                      ? "bg-neon-magenta text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {event.status}
                </Badge>
              </div>

              {/* Details Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-foreground/80">{event.date}</span>
                  <Clock className="w-4 h-4 text-primary ml-2" />
                  <span className="text-foreground/80">{event.time}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-neon-cyan" />
                    <span className="font-bold text-lg text-primary">{event.prizePool}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-neon-cyan" />
                    <span className="text-foreground/80">{event.participants} Players</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <button className="w-full py-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary rounded transition-all font-semibold uppercase text-sm">
                  {event.status === "REGISTERING" ? "Register Now" : "View Details"}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsFeed;
