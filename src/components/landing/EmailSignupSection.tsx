import { useState } from "react";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailSignupSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're in! 🎉",
      description: "Check your inbox for your free weight loss guide and exclusive discount.",
    });
    
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
            <Gift className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            GET YOUR FREE WEIGHT LOSS GUIDE
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and receive our proven 7-day kickstart guide plus an 
            exclusive 20% discount on your first order.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 bg-secondary border-border text-foreground placeholder:text-muted-foreground rounded-full px-6"
            />
            <Button 
              type="submit"
              disabled={isLoading}
              className="h-14 px-8 bg-gradient-cta hover:opacity-90 rounded-full font-bold whitespace-nowrap"
            >
              {isLoading ? "Sending..." : "Get Free Guide"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSignupSection;
