import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion"; // Make sure to install framer-motion

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8143645716",
      href: "tel:+918143645716",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Geneticbiosolution@gmail.com",
      href: "mailto:Geneticbiosolution@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/Geneticbiosolutions",
      username: "Geneticbiosolutions",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/Geneticbiosolutions",
      username: "Geneticbiosolutions",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Heading - Fade Down */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for inquiries and support
          </p>
        </motion.div>

        {/* Contact Grid - Staggered Entry */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {contactInfo.map((info) => (
            <motion.a
              key={info.label}
              href={info.href}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <info.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}

          {/* Address Card - Slide in from right */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-card rounded-2xl p-6 shadow-card text-center"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center"
            >
              <MapPin className="h-7 w-7 text-accent" />
            </motion.div>
            <h3 className="font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Flat No.3-20, Sri Vamsi Residency,
              <br />
              Road No-2, Dundigal,
              <br />
              Medchal-Malkajgiri, Hyderabad – 500090,
              <br />
              Telangana, India
            </p>
          </motion.div>
        </motion.div>

        {/* Social Media - Pop up effect */}
        <div className="mt-12 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-foreground mb-6"
          >
            Follow Us
          </motion.h3>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "var(--primary-light)" }}
                className="group flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-soft hover:shadow-card transition-all w-full max-w-xs sm:w-auto justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                  <social.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                  {social.username}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;