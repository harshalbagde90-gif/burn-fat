const transformations = [
  {
    name: "Sarah M.",
    weightLoss: "-12kg",
    timeframe: "8 weeks",
    quote: "I never thought I could feel this confident again!",
  },
  {
    name: "Michael R.",
    weightLoss: "-8kg",
    timeframe: "6 weeks",
    quote: "SlimCore gave me the energy to finally stick with it.",
  },
  {
    name: "Jennifer L.",
    weightLoss: "-15kg",
    timeframe: "12 weeks",
    quote: "The best decision I ever made for my health.",
  },
];

const TransformationsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">Results</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
            Real People, Real Weight Loss
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {transformations.map((item, index) => (
            <div 
              key={item.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Before/After placeholder */}
              <div className="relative h-64 bg-secondary">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-muted flex items-center justify-center border-r border-border">
                    <span className="text-muted-foreground text-sm font-medium">BEFORE</span>
                  </div>
                  <div className="w-1/2 bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-sm font-medium">AFTER</span>
                  </div>
                </div>
                {/* Weight loss badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-lg">
                  {item.weightLoss}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-foreground font-bold text-lg">{item.name}</span>
                  <span className="text-primary text-sm font-medium">{item.timeframe}</span>
                </div>
                <p className="text-muted-foreground italic">"{item.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
