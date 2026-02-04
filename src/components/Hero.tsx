import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-bg.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "GENETIC BIO SOLUTIONS",
    subtitle: '"Sole of Trust"',
    description:
      "Innovative, sustainable biotech solutions for aquatic animal health and aquaculture productivity.",
    buttonText: "View Products",
    action: "products",
  },
  {
    image: hero2,
    title: "About Genetic Bio Solutions",
    subtitle: "Biotechnology for Better Aquaculture",
    description:
      "We provide eco-friendly, science-driven solutions that improve water quality, immunity, and farm productivity.",
    buttonText: "About Us",
    action: "about",
  },
  {
    image: hero3,
    title: "Get in Touch With Us",
    subtitle: "We’re Here to Support Farmers",
    description:
      "Have questions or need product guidance? Our experts are ready to help you improve your farm performance.",
    buttonText: "Contact Us",
    action: "contact",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrent(index);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const handleAction = (action: string) => {
    const el = document.getElementById(action);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            
            {/* Title */}
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-secondary mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {slide.subtitle}
            </p>

            {/* Description */}
            <p
              className="text-lg md:text-xl text-white/90 max-w-3xl mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {slide.description}
            </p>

            <Button
              size="lg"
              variant="hero"
              onClick={() => handleAction(slide.action)}
            >
              {slide.buttonText}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
