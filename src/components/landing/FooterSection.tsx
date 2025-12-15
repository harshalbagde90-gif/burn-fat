import { ArrowRight, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Final CTA */}
      <div className="py-16 md:py-20 text-center border-b border-border">
        <div className="container px-4">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6">
            47 BOTTLES LEFT
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">
            START YOUR TRANSFORMATION TODAY
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-cta hover:opacity-90 text-lg px-10 py-6 h-auto rounded-full font-bold group"
          >
            ORDER NOW - 60% OFF
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black text-foreground mb-4">SlimCore</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                The smart weight loss formula backed by science. Transform your body with natural, 
                clinically-proven ingredients.
              </p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "How It Works", "Ingredients", "Reviews", "FAQ"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Refund Policy", "Contact Us"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 SlimCore Advanced. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              *Results may vary. Always consult your doctor before starting any supplement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
