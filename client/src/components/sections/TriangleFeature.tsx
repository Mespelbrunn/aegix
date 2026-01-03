import { motion } from "framer-motion";

export function TriangleFeature() {
  const pillars = [
    { 
      label: "Talent Integration", 
      description: "Selection, Onboarding, Nurture",
      color: "hsl(var(--primary))"
    },
    { 
      label: "Culture & Leadership", 
      description: "Values, HRO Principles, Resilience",
      color: "hsl(var(--primary))"
    },
    { 
      label: "Sustained Operations", 
      description: "Workflow, Decision Making, Planning",
      color: "hsl(var(--primary))"
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Strategic Architecture</h2>
          <p className="text-muted-foreground text-lg">
            Our framework for excellence is built on a solid foundation of strategic execution, 
            supported by three critical pillars to achieve peak performance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          <div className="relative w-full max-w-[800px] aspect-[16/14]">
            <svg viewBox="0 0 800 700" className="w-full h-full drop-shadow-2xl">
              {/* Shadow/Depth Base */}
              <motion.rect
                x="40"
                y="570"
                width="740"
                height="20"
                fill="#051515"
                initial={{ opacity: 0.3 }}
              />

              {/* Roof / Pediment */}
              <motion.g whileHover={{ y: -5, scale: 1.01 }} className="cursor-pointer group">
                {/* 3D Side Depth for Roof */}
                <path d="M 400,10 L 790,145 L 780,140 L 400,20 Z" fill="#081A1A" />
                <path 
                  d="M 400,20 L 780,140 L 20,140 Z" 
                  fill="#0F2F2E"
                  className="transition-colors hover:brightness-110"
                />
                <text 
                  x="400" 
                  y="105" 
                  textAnchor="middle" 
                  className="text-3xl font-bold font-heading fill-white uppercase tracking-[0.2em] drop-shadow-md"
                >
                  Performance
                </text>
                
                {/* Tooltip for Roof */}
                <foreignObject x="300" y="-30" width="200" height="60" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="p-2 bg-popover border border-border text-xs text-center shadow-lg">
                    <p className="font-bold text-primary">Outcome</p>
                    <p className="text-muted-foreground">The result of aligned execution</p>
                  </div>
                </foreignObject>
              </motion.g>

              {/* Architrave / Top Base */}
              <motion.g whileHover={{ scale: 1.01 }} className="cursor-pointer group">
                {/* 3D Sides for Architrave */}
                <rect x="25" y="160" width="780" height="40" fill="#081A1A" />
                <rect 
                  x="20" 
                  y="155" 
                  width="780" 
                  height="40" 
                  fill="#0F2F2E"
                  className="transition-all hover:brightness-110"
                />
                <text 
                  x="410" 
                  y="180" 
                  textAnchor="middle" 
                  className="text-sm font-bold font-mono fill-white uppercase tracking-[0.3em]"
                >
                  Building Daily Habits
                </text>
              </motion.g>

              {/* Pillars */}
              {[
                { label: "Talent Integration", description: "Selection, Onboarding, Nurture", x: 20 },
                { label: "Culture & Leadership", description: "Values, HRO Principles, Resilience", x: 350 },
                { label: "Sustained Operations", description: "Workflow, Decision Making, Planning", x: 680 }
              ].map((pillar, i) => (
                <motion.g 
                  key={i}
                  whileHover={{ scale: 1.03, y: -2, rotateY: 10 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="cursor-pointer group"
                >
                  {/* Pillar Shaft Depth */}
                  <rect x={pillar.x + 15} y="215" width="100" height="320" fill="#081A1A" />
                  <rect 
                    x={pillar.x + 10} 
                    y="210" 
                    width="100" 
                    height="320" 
                    fill="#0F2F2E"
                    className="transition-all hover:brightness-110"
                  />
                  
                  {/* Pillar Capital & Base Depth */}
                  <rect x={pillar.x + 5} y="215" width="120" height="10" fill="#081A1A" />
                  <rect x={pillar.x} y="210" width="120" height="10" fill="#0F2F2E" className="brightness-125" />
                  
                  <rect x={pillar.x + 5} y="525" width="120" height="10" fill="#081A1A" />
                  <rect x={pillar.x} y="520" width="120" height="10" fill="#0F2F2E" className="brightness-125" />
                  
                  {/* Vertical Text */}
                  <text 
                    x={pillar.x + 60} 
                    y="370" 
                    textAnchor="middle" 
                    transform={`rotate(-90, ${pillar.x + 60}, 370)`}
                    className="text-lg font-bold font-heading fill-white uppercase tracking-widest pointer-events-none drop-shadow-sm"
                  >
                    {pillar.label}
                  </text>

                  {/* Tooltip for Pillar */}
                  <foreignObject x={pillar.x - 10} y="250" width="140" height="100" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="p-3 bg-popover border border-border text-xs text-center shadow-xl">
                      <p className="font-bold text-primary mb-1">{pillar.label}</p>
                      <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                  </foreignObject>
                </motion.g>
              ))}

              {/* Base / Foundation */}
              <motion.g whileHover={{ y: 2 }} className="cursor-pointer group">
                {/* 3D Base Depth */}
                <rect x="25" y="555" width="780" height="65" fill="#051515" />
                <rect 
                  x="20" 
                  y="550" 
                  width="780" 
                  height="60" 
                  fill="#0F2F2E"
                  className="transition-all hover:brightness-110"
                />
                <text 
                  x="410" 
                  y="588" 
                  textAnchor="middle" 
                  className="text-xl font-bold font-heading fill-white uppercase tracking-[0.4em] drop-shadow-md"
                >
                  Strategic Execution
                </text>
                
                {/* Tooltip for Base */}
                <foreignObject x="300" y="485" width="200" height="60" className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="p-2 bg-popover border border-border text-xs text-center shadow-lg">
                    <p className="font-bold text-primary">Foundation</p>
                    <p className="text-muted-foreground">The bedrock of operational success</p>
                  </div>
                </foreignObject>
              </motion.g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
