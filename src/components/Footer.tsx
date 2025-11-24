import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Mail, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t-2 border-border py-12 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-glow mb-4">
              GRAND BATTLE ARENA
            </h3>
            <p className="text-muted-foreground mb-4">
              The ultimate Free Fire tournament platform. Compete, win, and earn rewards.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary border border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary border border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary border border-primary flex items-center justify-center transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Tournament Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Prize Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-4 uppercase">Get Support</h4>
            <div className="space-y-3">
              <Button 
                variant="neon" 
                className="w-full justify-start"
                onClick={() => window.open('https://t.me/grandbattlearena', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                JOIN TELEGRAM SUPPORT
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-border hover:border-primary"
                onClick={() => window.location.href = 'mailto:support@grandbattlearena.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                EMAIL US
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Grand Battle Arena. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Terms & Conditions
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
          <p className="text-xs text-center text-muted-foreground">
            ⚠️ This platform is for entertainment purposes. Please play responsibly. 
            We do not encourage excessive gaming or real-money gambling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
