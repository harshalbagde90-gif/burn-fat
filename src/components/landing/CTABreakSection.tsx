import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABreakSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-cta relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stock badge */}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-background/20 text-foreground text-sm font-semibold mb-8">
            LIMITED STOCK - 47 BOTTLES LEFT
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-8 leading-tight">
            TAKE THE FIRST STEP TO A <br className="hidden md:block" />
            LEANER + HEALTHIER YOU
          </h2>

          <Button 
            size="lg" 
            variant="secondary"
            className="bg-foreground text-background hover:bg-foreground/90 text-base sm:text-lg md:text-xl px-6 md:px-12 py-4 md:py-8 h-auto rounded-full font-bold group w-full sm:w-auto whitespace-normal"
          >
            START YOUR TRANSFORMATION
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABreakSection;
