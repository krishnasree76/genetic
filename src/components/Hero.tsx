import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-hero-overlay" /> */}
      
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          {/* <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="Genetic Bio Solutions"
              className="h-28 md:h-36 w-auto drop-shadow-2xl"
            />
          </div> */}

          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            GENETIC BIO SOLUTIONS
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium text-secondary mb-6">
            "Sole of Trust"
          </p>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Innovative, sustainable biotech solutions for aquatic animal health
            and aquaculture productivity.
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToProducts}
            size="lg"
            variant="hero"
            className="group"
          >
            View Products
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
