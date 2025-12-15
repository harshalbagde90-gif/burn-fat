import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter Pack",
    price: 49,
    duration: "1 Month Supply",
    features: [
      "Metabolism Support",
      "Appetite Control",
      "60-Day Money-Back Guarantee",
    ],
    popular: false,
  },
  {
    name: "Best Value",
    price: 39,
    duration: "3 Month Supply",
    savings: "SAVE 40%",
    features: [
      "Everything in Starter",
      "FREE Shipping",
      "Bonus Diet Guide",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Ultimate Transformation",
    price: 29,
    duration: "6 Month Supply",
    savings: "SAVE 60%",
    features: [
      "Everything in Best Value",
      "FREE Meal Plan",
      "1-on-1 Consultation Call",
      "VIP Support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            SELECT YOUR PACKAGE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative bg-card rounded-2xl border-2 p-8 transition-all duration-300 hover-lift ${
                pkg.popular ? 'border-primary' : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    <Sparkles className="h-4 w-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 pt-2">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-foreground">${pkg.price}</span>
                  <span className="text-muted-foreground">/bottle</span>
                </div>
                <p className="text-muted-foreground mt-2">{pkg.duration}</p>
                {pkg.savings && (
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-success/20 text-success text-sm font-bold">
                    {pkg.savings}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full h-12 rounded-full font-bold ${
                  pkg.popular 
                    ? 'bg-gradient-cta hover:opacity-90' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                GET STARTED
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
