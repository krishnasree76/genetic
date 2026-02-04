import { Microscope, Leaf, Shield, Award } from "lucide-react";
import isoLogo from "@/assets/iso.png";
import coastalLogo from "@/assets/costal.png";

const About = () => {
  const features = [
    { icon: Microscope, title: "Science-Based", description: "Cutting-edge biotechnology research" },
    { icon: Leaf, title: "Eco-Friendly", description: "Sustainable and non-antibiotic solutions" },
    { icon: Shield, title: "Disease Resistance", description: "Enhanced immunity and protection" },
    { icon: Award, title: "Quality Assured", description: "Rigorous testing and standards" },
  ];

  return (
    <section id="about" className="py-20 bg-ocean-gradient overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fall-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">Genetic Bio Solutions</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            GENETIC BIO SOLUTIONS is a pioneering biotechnology company dedicated to advancing aquatic animal health through innovative and sustainable aqua medicine solutions. We specialize in{" "}
            <span className="text-primary font-medium">probiotics</span>,{" "}
            <span className="text-secondary font-medium">mineral supplements</span>,{" "}
            <span className="text-accent font-medium">herbal therapeutics</span>, and genetic diagnostic tools for fish and shrimp farming.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            We focus on non-antibiotic, eco-friendly approaches that improve water quality, disease resistance, growth performance, and survival rates in aquaculture.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 text-center animate-fall-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center animate-float">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-10 animate-fall-in" style={{ animationDelay: "0.6s" }}>
            Certified & Recognized By
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            
            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center animate-fall-in"
                 style={{ animationDelay: "0.8s" }}>
              <img
                src={isoLogo}
                alt="ISO 9001:2015 Certified Company"
                className="max-h-28 sm:max-h-32 object-contain"
              />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center animate-fall-in"
                 style={{ animationDelay: "1s" }}>
              <img
                src={coastalLogo}
                alt="Coastal Aquaculture Authority Certified"
                className="max-h-28 sm:max-h-32 object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
