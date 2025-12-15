import HeroSection from "@/components/landing/HeroSection";
import TransformationsSection from "@/components/landing/TransformationsSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import CTABreakSection from "@/components/landing/CTABreakSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import IngredientsSection from "@/components/landing/IngredientsSection";
import PricingSection from "@/components/landing/PricingSection";
import EmailSignupSection from "@/components/landing/EmailSignupSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import BlogSection from "@/components/landing/BlogSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TransformationsSection />
      <ProblemSection />
      <SolutionSection />
      <CTABreakSection />
      <BenefitsSection />
      <IngredientsSection />
      <PricingSection />
      <EmailSignupSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
