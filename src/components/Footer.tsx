import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-ocean-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Genetic Bio Solutions" className="h-16 w-auto" />
              <div>
                <p className="font-bold text-xl text-primary">GENETIC</p>
                <p className="font-semibold text-secondary">BIO SOLUTIONS</p>
              </div>
            </div>
            <p className="text-white/80 italic mb-4">"Sole of Trust"</p>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              Pioneering biotechnology solutions for aquatic animal health and
              sustainable aquaculture productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+918143645716"
                  className="text-white/70 hover:text-secondary transition-colors"
                >
                  8143645716
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:Geneticbiosolution@gmail.com"
                  className="text-white/70 hover:text-secondary transition-colors text-sm"
                >
                  Geneticbiosolution@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Flat no.3-20/svr/203, Floor No.3, Sri Vamsi Residencey, Road No:2,
Dundigal, Medchal-Malkajgiri, Hyderabad - 500090, Telangana,India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center space-y-2">
  <p className="text-white/50 text-sm">
    © {new Date().getFullYear()} Genetic Bio Solutions. All rights reserved.
  </p>

  <p className="text-white/40 text-sm">
    Made with <span className="text-red-500">♥</span> by{" "}
    <a
      href="https://staffarc.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-secondary transition-colors font-medium"
    >
      Staffarc
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
