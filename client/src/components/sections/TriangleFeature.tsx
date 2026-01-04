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
    <section id="the-aegix-method" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">The Aegix Method</h2>
          <div className="text-muted-foreground text-lg space-y-6">
            <p>
              Organizations lose an average of 25% in overall performance due to operational downtime, talent mismanagement and failure to execute on strategy.
            </p>
            <p>
              The common denominator, is the human factor. Through our unique approach and experience, we help you set the context & conditions for behaviour to flourish. In doing so, <strong>we enable excellence in the execution of your strategy.</strong>
            </p>
            <p className="font-bold text-foreground pt-4">
              Welcome to The Performance Paradigm
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          <div className="relative w-full max-w-[800px] aspect-[16/14]">
            <svg viewBox="0 0 800 700" className="w-full h-full drop-shadow-2xl">
              {/* Roof / Pediment */}
              <g>
                <path 
                  d="M 400,20 L 780,140 L 20,140 Z" 
                  fill="#0F2F2E" 
                />
                <text 
                  x="400" 
                  y="105" 
                  textAnchor="middle" 
                  className="text-3xl font-bold font-heading fill-white uppercase tracking-[0.2em]"
                >
                  Performance
                </text>
              </g>

              {/* Architrave / Top Base */}
              <g>
                <rect 
                  x="20" 
                  y="155" 
                  width="780" 
                  height="40" 
                  fill="#0F2F2E"
                />
                <text 
                  x="410" 
                  y="180" 
                  textAnchor="middle" 
                  className="text-sm font-bold font-mono fill-white uppercase tracking-[0.3em]"
                >
                  Building Daily Habits
                </text>
              </g>

              {/* Pillars */}
              {[
                { label: "Talent Integration", x: 20 },
                { label: "Culture & Leadership", x: 350 },
                { label: "Sustained Operations", x: 680 }
              ].map((pillar, i) => (
                <g key={i}>
                  {/* Pillar Shaft */}
                  <rect 
                    x={pillar.x + 10} 
                    y="210" 
                    width="100" 
                    height="320" 
                    fill="#0F2F2E"
                  />
                  
                  {/* Pillar Capital & Base */}
                  <rect x={pillar.x} y="210" width="120" height="10" fill="#0F2F2E" className="brightness-125" />
                  <rect x={pillar.x} y="520" width="120" height="10" fill="#0F2F2E" className="brightness-125" />
                  
                  {/* Vertical Text */}
                  <text 
                    x={pillar.x + 60} 
                    y="370" 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    transform={`rotate(-90, ${pillar.x + 60}, 370)`}
                    className="text-lg font-bold font-heading fill-white uppercase tracking-widest pointer-events-none"
                  >
                    {pillar.label}
                  </text>
                </g>
              ))}

              {/* Base / Foundation */}
              <g>
                <rect 
                  x="20" 
                  y="550" 
                  width="780" 
                  height="60" 
                  fill="#0F2F2E"
                />
                <text 
                  x="410" 
                  y="588" 
                  textAnchor="middle" 
                  className="text-xl font-bold font-heading fill-white uppercase tracking-[0.4em]"
                >
                  Strategic Execution
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
