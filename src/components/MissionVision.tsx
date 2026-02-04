import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-purple transition-all duration-300 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-dark" />
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground pt-2">Our Mission</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              To improve aquatic animal health and farm productivity by
              delivering science-based, sustainable aqua medicine and genetic
              solutions. We are committed to helping farmers achieve better
              yields while maintaining ecological balance.
            </p>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-500" />
          </div>

          {/* Vision Card */}
          <div className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-gold transition-all duration-300 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-gold-dark" />
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground pt-2">Our Vision</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              To be a global leader in biotechnology-driven aquaculture health,
              supporting farmers with safe, innovative, and environmentally
              responsible solutions that set new standards in the industry.
            </p>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/10 group-hover:scale-150 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
