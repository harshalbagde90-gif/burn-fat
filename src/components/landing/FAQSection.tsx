import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I see results?",
    answer: "Most customers start noticing changes within the first 2-3 weeks, including reduced cravings and increased energy. Visible weight loss typically becomes apparent within 4-6 weeks when combined with a balanced diet and regular exercise.",
  },
  {
    question: "Are there any side effects?",
    answer: "SlimCore is made with natural, clinically-tested ingredients and is generally well-tolerated. Some people may experience mild caffeine sensitivity initially. If you have any medical conditions or take medications, please consult your doctor before starting any supplement.",
  },
  {
    question: "Do I need to exercise while taking SlimCore?",
    answer: "While SlimCore works to boost your metabolism even at rest, combining it with regular exercise will significantly enhance your results. Even moderate activity like daily walks can make a big difference.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied with your results, simply contact our support team for a full refund — no questions asked.",
  },
  {
    question: "Is it safe for everyone?",
    answer: "SlimCore is designed for healthy adults looking to support their weight loss journey. It's not recommended for pregnant or nursing women, individuals under 18, or those with certain medical conditions. Always consult your healthcare provider before starting any new supplement.",
  },
  {
    question: "How do I take SlimCore?",
    answer: "Take 2 capsules daily with water, preferably 30 minutes before your largest meal. For best results, maintain consistent use and stay hydrated throughout the day.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">FAQs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            CLEARING DOUBTS & CONCERNS
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
