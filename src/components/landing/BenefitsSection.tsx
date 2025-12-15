import { Flame, Brain, Zap, Moon } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Metabolism Booster",
    description: "Green tea extract and thermogenic compounds rev up your metabolism to burn calories even at rest.",
    highlight: "+40% metabolic rate",
  },
  {
    icon: Brain,
    title: "Appetite Control",
    description: "Garcinia Cambogia naturally suppresses hunger hormones, making it easier to stick to your diet.",
    highlight: "Reduce cravings by 60%",
  },
  {
    icon: Zap,
    title: "Natural Energy",
    description: "Clean caffeine and B-vitamins provide sustained energy without the crash or jitters.",
    highlight: "All-day energy",
  },
  {
    icon: Moon,
    title: "Burn Fat 24/7",
    description: "L-Carnitine helps your body use stored fat for fuel, even while you sleep.",
    highlight: "Round-the-clock fat burning",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">Benefits</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            WHAT MAKES SLIMCORE DIFFERENT
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-3">{benefit.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
