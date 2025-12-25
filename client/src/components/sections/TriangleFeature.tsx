import { motion } from "framer-motion";

export function TriangleFeature() {
  return (
    <section id="methodology" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">The Strategic Trinity</h2>
          <p className="text-muted-foreground text-lg">
            A balanced organization requires stability in three critical dimensions. 
            We integrate these to achieve sustained performance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
          {/* Abstract Triangle Visualization */}
          <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
            
            {/* The Triangle SVG */}
            <svg viewBox="0 0 400 350" className="w-full h-full drop-shadow-2xl">
              {/* Paths for sides */}
              <motion.path
                d="M 200,20 L 380,330 L 20,330 Z"
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                className="opacity-20"
              />
              
              {/* Side 1: Talent Integration (Left) */}
              <motion.g whileHover={{ scale: 1.05 }} className="cursor-pointer group">
                <path d="M 200,20 L 20,330" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
                <circle cx="110" cy="175" r="40" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="110" y="180" textAnchor="middle" className="text-[10px] font-mono fill-primary font-bold uppercase">Talent</text>
                <foreignObject x="-40" y="100" width="140" height="100" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="p-2 bg-popover border border-border text-xs text-center shadow-lg">
                    <p className="font-bold text-primary mb-1">Talent Integration</p>
                    <p className="text-muted-foreground text-[10px]">Selection, Onboarding, Nurture</p>
                  </div>
                </foreignObject>
              </motion.g>

              {/* Side 2: Culture & Leadership (Right) */}
              <motion.g whileHover={{ scale: 1.05 }} className="cursor-pointer group">
                <path d="M 200,20 L 380,330" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
                <circle cx="290" cy="175" r="40" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="290" y="180" textAnchor="middle" className="text-[10px] font-mono fill-primary font-bold uppercase">Culture</text>
                 <foreignObject x="300" y="100" width="140" height="100" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="p-2 bg-popover border border-border text-xs text-center shadow-lg">
                    <p className="font-bold text-primary mb-1">Culture & Leadership</p>
                    <p className="text-muted-foreground text-[10px]">Values, HRO Principles, Resilience</p>
                  </div>
                </foreignObject>
              </motion.g>

              {/* Side 3: Sustained Operations (Bottom) */}
              <motion.g whileHover={{ scale: 1.05 }} className="cursor-pointer group">
                <path d="M 20,330 L 380,330" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
                <circle cx="200" cy="330" r="40" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
                <text x="200" y="335" textAnchor="middle" className="text-[10px] font-mono fill-primary font-bold uppercase">Ops</text>
                <foreignObject x="130" y="360" width="140" height="100" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="p-2 bg-popover border border-border text-xs text-center shadow-lg">
                    <p className="font-bold text-primary mb-1">Sustained Operations</p>
                    <p className="text-muted-foreground text-[10px]">Workflow, Decision Making, Planning</p>
                  </div>
                </foreignObject>
              </motion.g>

              {/* Center */}
              <motion.g
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <circle cx="200" cy="215" r="60" fill="hsl(var(--accent))" className="opacity-10" />
                <circle cx="200" cy="215" r="50" fill="hsl(var(--primary))" />
                <text x="200" y="210" textAnchor="middle" className="text-[12px] font-bold font-heading fill-primary-foreground uppercase">Sustained</text>
                <text x="200" y="225" textAnchor="middle" className="text-[12px] font-bold font-heading fill-primary-foreground uppercase">Performance</text>
              </motion.g>

            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
