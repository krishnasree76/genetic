import { Microscope, Leaf, Shield, Award } from "lucide-react";
import { motion } from "framer-motion"; // Import motion
import isoLogo from "@/assets/iso.png";
import coastalLogo from "@/assets/costal.png";

const About = () => {
  const features = [
    { icon: Microscope, title: "Science-Based", description: "Cutting-edge biotechnology research" },
    { icon: Leaf, title: "Eco-Friendly", description: "Sustainable and non-antibiotic solutions" },
    { icon: Shield, title: "Disease Resistance", description: "Enhanced immunity and protection" },
    { icon: Award, title: "Quality Assured", description: "Rigorous testing and standards" },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="about" className="py-20 bg-ocean-gradient overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading - Fades in and slides up when in view */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">Genetic Bio Solutions</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            GENETIC BIO SOLUTIONS is a pioneering biotechnology company dedicated to advancing aquatic animal health through innovative and sustainable aqua medicine solutions. We specialize in{" "}
            <span className="text-primary font-medium">probiotics</span>,{" "}
            <span className="text-secondary font-medium">mineral supplements</span>,{" "}
            <span className="text-accent font-medium">herbal therapeutics</span>, and genetic diagnostic tools for fish and shrimp farming.
          </p>
        </motion.div>

        {/* Feature Cards - Staggered entrance */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, translateY: -10 }} // Interaction animation
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications - Pops in with a slight bounce */}
        <div className="mt-20 text-center">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-foreground mb-10"
          >
            Certified & Recognized By
          </motion.h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {[isoLogo, coastalLogo].map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
                className="bg-white rounded-xl p-6 shadow-card w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Certification Logo"
                  className="max-h-28 sm:max-h-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;