import { CheckCircle } from "lucide-react";

const ingredients = [
  { name: "Green Tea Extract", benefit: "Boosts metabolism and thermogenesis" },
  { name: "Garcinia Cambogia", benefit: "Natural appetite suppressant" },
  { name: "L-Carnitine", benefit: "Converts stored fat into energy" },
  { name: "Caffeine Anhydrous", benefit: "Clean energy and focus" },
  { name: "Chromium Picolinate", benefit: "Stabilizes blood sugar levels" },
  { name: "Vitamin B Complex", benefit: "Supports energy metabolism" },
];

const IngredientsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Expert profile card */}
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile image placeholder */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary border-4 border-primary/30 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo</span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-1">Dr. Sarah Chen, Ph.D.</h3>
                <p className="text-primary mb-4">Nutritional Scientist & Formulation Expert</p>
                <p className="text-muted-foreground text-lg mb-8">
                  "Hi, I'm Dr. Sarah Chen. After 15 years of research, I've formulated SlimCore with 
                  scientifically-proven ingredients that work synergistically to maximize fat loss. 
                  Here's what makes our formula so effective:"
                </p>

                {/* Ingredients list */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {ingredients.map((item) => (
                    <div key={item.name} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-foreground">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
