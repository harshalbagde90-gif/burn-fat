import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Nutrition",
    title: "10 Foods That Boost Your Metabolism Naturally",
    description: "Discover the science-backed foods that can help accelerate your fat-burning potential.",
    image: "/Product%20image%20adn%20videos/images/image-1.png",
  },
  {
    category: "Fitness",
    title: "The 15-Minute Morning Routine for Weight Loss",
    description: "A quick, effective workout routine you can do at home to kickstart your metabolism.",
    image: "/Product%20image%20adn%20videos/images/image-2.png",
  },
  {
    category: "Lifestyle",
    title: "How Sleep Affects Your Weight Loss Journey",
    description: "Learn why quality sleep is essential for burning fat and maintaining a healthy weight.",
    image: "/Product%20image%20adn%20videos/images/image-3.png",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-muted-foreground text-sm uppercase tracking-widest mb-4 block">Blog</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
              Guides to Help You Lose Weight Faster
            </h2>
          </div>
          <a href="#" className="text-primary font-semibold flex items-center gap-1 mt-4 md:mt-0 hover:underline">
            VIEW ALL
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer"
            >
              {/* Article image */}
              <div className="aspect-video bg-secondary">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{article.category}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
