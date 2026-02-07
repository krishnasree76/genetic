import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-bg.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import logo from "@/assets/logo.png";

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
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-[position:60%_center]"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-32 sm:pt-36">

            {/* Logo */}
            <img
  src={logo}
  alt="Genetic Bio Solutions"
  className="h-28 sm:h-32 md:h-40 lg:h-44 w-auto mb-8 animate-fade-in drop-shadow-[0_0_40px_rgba(255,255,255,0.45)]"
/>



            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-secondary mb-4">
              {slide.subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mb-8">
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

      {/* Arrows (desktop only) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur transition"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur transition"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all ${
              index === current ? "bg-white scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
