import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

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

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for inquiries and support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Contact Cards */}
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-purple transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <info.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">
                {info.value}
              </p>
            </a>
          ))}

          {/* Address Card */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center md:col-span-1">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <MapPin className="h-7 w-7 text-accent" />
            </div>
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
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center">
  <h3 className="text-lg font-semibold text-foreground mb-6">
    Follow Us
  </h3>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
    {socialLinks.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-soft hover:shadow-card transition-all duration-300 w-full max-w-xs sm:w-auto justify-center"
      >
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
          <social.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>

        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
          {social.username}
        </span>
      </a>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Contact;
