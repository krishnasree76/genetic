import { Target, Eye } from "lucide-react";
import missionImg from "@/assets/mission.jpg";
import visionImg from "@/assets/Screenshot 2026-02-05 112507.png";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 space-y-20">

        {/* ================= MISSION ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Mission Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src={missionImg}
              alt="Our Mission"
              className="rounded-2xl shadow-xl w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-purple transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-dark" />
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground pt-2">Our Mission</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              To improve aquatic animal health and farm productivity by delivering
              science-based, sustainable aqua medicine and genetic solutions. We are
              committed to helping farmers achieve better yields while maintaining
              ecological balance.
            </p>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-500" />
          </motion.div>
        </div>

        {/* ================= VISION ================= */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Vision Card (First on Desktop Right side layout reversed) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-gold transition-all duration-300 overflow-hidden md:order-1 order-2"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-gold-dark" />
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground pt-2">Our Vision</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              To be a global leader in biotechnology-driven aquaculture health,
              supporting farmers with safe, innovative, and environmentally
              responsible solutions that set new standards in the industry.
            </p>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary/10 group-hover:scale-150 transition-transform duration-500" />
          </motion.div>

          {/* Vision Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group md:order-2 order-1"
          >
            <img
              src={visionImg}
              alt="Our Vision"
              className="rounded-2xl shadow-xl w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary/20 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
