import { Flame, Cookie, Battery } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "Slow Metabolism",
    description: "Your body stores fat instead of burning it, making weight loss feel impossible.",
  },
  {
    icon: Cookie,
    title: "Constant Cravings",
    description: "Sugar cravings and hunger pangs sabotage your progress at every turn.",
  },
  {
    icon: Battery,
    title: "Low Energy",
    description: "Feeling tired and unmotivated kills your workout plans before they start.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">The Problem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground max-w-4xl mx-auto">
            IF LOSING WEIGHT FEELS IMPOSSIBLE, HERE'S WHY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div 
              key={item.title}
              className="bg-card p-8 rounded-2xl border border-border group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
