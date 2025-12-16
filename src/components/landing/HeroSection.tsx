import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(355_100%_64%_/_0.1),_transparent_50%)]" />
      
      {/* Stock badge */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold animate-pulse-glow">
          LIMITED STOCK - 47 BOTTLES LEFT
        </span>
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-black leading-[0.95] tracking-tight mb-8 animate-fade-in-up">
            <span className="block text-foreground">BURN FAT</span>
            <span className="block text-gradient">+ FASTER</span>
            <span className="block text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4">WITH A FORMULA</span>
            <span className="block text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">THAT WORKS FOR YOU</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Science-backed ingredients, proven results, and real transformations. 
            Join 10,000+ who've already transformed their bodies.
          </p>

          {/* Hero video */}
          <div className="mt-8 mb-10 max-w-3xl mx-auto">
            <div className="aspect-video rounded-3xl overflow-hidden vignette-black-edges">
              <video
                className="w-full h-full object-cover"
                src="/Product%20image%20adn%20videos/demo%20video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-cta hover:opacity-90 text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto rounded-full font-bold shadow-2xl hover-lift group"
            >
              ORDER NOW - 60% OFF
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.8/5</span>
            <span className="text-muted-foreground">Star Rating</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
