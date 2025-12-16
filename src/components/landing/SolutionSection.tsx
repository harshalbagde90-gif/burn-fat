import { Users, Zap, TrendingUp, Package } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Transformations" },
  { icon: Zap, value: 3, suffix: "x", label: "Faster Fat Loss" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate" },
  { icon: Package, value: 30, suffix: "-Day", label: "Supply" },
];

const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(stat.value, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className="bg-card p-6 rounded-2xl border border-border text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(355_100%_64%_/_0.3)] hover:-translate-y-1"
    >
      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
      <div className="text-3xl md:text-4xl font-black text-foreground mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">The Solution</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground max-w-4xl mx-auto">
            LET'S TURN YOUR BODY INTO A <span className="text-gradient">FAT-BURNING MACHINE</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              SlimCore Advanced combines the most powerful natural ingredients into one premium formula. 
              Our scientifically-backed blend targets fat from multiple angles — boosting your metabolism, 
              crushing cravings, and giving you sustained energy throughout the day.
            </p>
            <p className="text-lg text-muted-foreground">
              Unlike other supplements that rely on a single mechanism, SlimCore works synergistically 
              to help you burn fat faster while feeling better than ever.
            </p>
            <ul className="space-y-3">
              {["Green Tea Extract for thermogenesis", "Garcinia Cambogia for appetite control", "L-Carnitine for fat oxidation", "Natural caffeine for clean energy"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Product video */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-transparent rounded-3xl overflow-hidden glow-effect animate-pulse-glow">
              <video
                className="w-full h-full object-cover rounded-3xl"
                src="/Product%20image%20adn%20videos/final%20video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
