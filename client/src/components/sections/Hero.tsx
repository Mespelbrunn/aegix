import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tactical_topographic_map_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay for Fade */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Battle-Proven Methodology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 text-primary">
              FROM SURVIVAL <br />
              TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">PERFORMANCE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              We don't sell academic models. We apply battle-proven military principles 
              to transform your organization's culture, leadership, and operations. 
              Turn information into <span className="text-foreground font-semibold">actionable intelligence</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none text-base px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider group">
                Start Mission
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-none text-base px-8 h-14 border-primary text-primary hover:bg-primary/5 font-mono uppercase tracking-wider">
                Explore The Model
              </Button>
            </div>
          </motion.div>

          {/* Stats / Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8"
          >
            {[
              { label: "Experience", value: "25+ YEARS" },
              { label: "Approach", value: "BATTLE-PROVEN" },
              { label: "Focus", value: "ACTIONABLE" },
              { label: "Outcome", value: "SUSTAINED" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xl font-bold font-heading text-primary">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
