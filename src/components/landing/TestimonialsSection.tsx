import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Amanda K.",
    duration: "Lost 10kg in 8 weeks",
    quote: "I was skeptical at first, but SlimCore really works! I've tried so many supplements before, but this is the first one that actually helped me see real results.",
    rating: 5,
  },
  {
    name: "David T.",
    duration: "Lost 8kg in 6 weeks",
    quote: "The energy boost is incredible. I'm working out more consistently and the weight is finally coming off. Best investment in my health!",
    rating: 5,
  },
  {
    name: "Maria S.",
    duration: "Lost 15kg in 12 weeks",
    quote: "After having my second child, I thought I'd never get my body back. SlimCore helped me lose the stubborn baby weight and feel confident again.",
    rating: 5,
  },
  {
    name: "James R.",
    duration: "Lost 12kg in 10 weeks",
    quote: "Finally something that controls my appetite! I used to snack constantly, but now I can stick to my meals without cravings.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    duration: "Lost 7kg in 5 weeks",
    quote: "The customer support team is amazing, and the product delivered exactly what it promised. I'm ordering my second batch!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            PROOF THAT IT WORKS
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center">
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">Photo</span>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-foreground mb-6 max-w-2xl mx-auto">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-primary text-sm">{testimonial.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-border hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-border hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
