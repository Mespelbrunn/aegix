import { motion } from "framer-motion";
import { AlertCircle, Users, Target, ArrowDown } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      title: "Disruption of Operations",
      icon: AlertCircle,
      description: "Operational disruption is a structural business risk with direct performance impact.",
      sources: ["Unplanned downtime", "Human error", "Decision making lapses", "Loss of situational awareness"],
      impacts: ["Loss of production", "Quality degradation", "Safety risk exposure", "Reputational damage"],
      stats: "60-75% Human Component | 10-20% Impact on Revenue"
    },
    {
      title: "War for Talent",
      icon: Users,
      description: "Leaky Pipeline: performance loss & costs hiding in plain sight across the employee lifecycle.",
      lifecycle: ["Attract", "Select", "Onboard", "Develop", "Retain", "Offboard"],
      details: "",
      stats: "NEGATIVE COMPOUNDING EFFECT LEAVES COMPANIES IN SURVIVAL MODE"
    },
    {
      title: "Strategy-to-Performance Gap",
      icon: Target,
      description: "Only 63% of average realized performance is achieved versus strategic intent.",
      gaps: [
        { label: "Resource Allocation", value: "7.5%" },
        { label: "Poor Communication", value: "5.2%" },
        { label: "Poor Leadership", value: "4.5%" },
        { label: "Undefined Actions", value: "4.5%" },
        { label: "Unclear Accountability", value: "4.1%" },
        { label: "Organizational Silos", value: "3.7%" },
        { label: "Inadequate Consequences", value: "3.0%" },
        { label: "Inadequate Monitoring", value: "3.0%" },
        { label: "Structural Shortcomings", value: "1.5%" }
      ],
      stats: "37% Average Performance Loss"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-primary uppercase">
            WHY AND WHERE ORGANIZATIONS <span className="text-accent">LOSE PERFORMANCE</span>
          </h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-secondary/20 border border-border p-8 flex flex-col"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-primary text-primary-foreground">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">{problem.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed italic">
                "{problem.description}"
              </p>

              <div className="flex-grow space-y-6">
                {problem.sources && (
                  <div className="flex-grow flex flex-col">
                    <div className="grid grid-cols-2 gap-8 text-[10px] uppercase font-mono tracking-wider relative flex-grow">
                      <div className="flex flex-col h-full">
                        <div className="w-full text-left">
                          <p className="text-accent font-bold mb-3 underline underline-offset-4 text-xs">Sources</p>
                          <ul className="space-y-3 min-h-[120px] text-xs">
                            {problem.sources.map((s, i) => <li key={i}>• {s}</li>)}
                          </ul>
                        </div>
                        <div className="flex flex-col items-center justify-end h-48 mt-auto">
                          <ArrowDown className="w-5 h-24 text-accent/50 shrink-0" />
                          <p className="text-[12px] font-mono font-bold text-muted-foreground mt-4 text-center uppercase tracking-widest leading-tight h-10 flex items-start justify-center">60-75% human component</p>
                        </div>
                      </div>
                      <div className="flex flex-col h-full">
                        <div className="w-full text-left">
                          <p className="text-accent font-bold mb-3 underline underline-offset-4 text-xs">Impact</p>
                          <ul className="space-y-3 min-h-[120px] text-xs">
                            {problem.impacts.map((im, i) => <li key={i}>• {im}</li>)}
                          </ul>
                        </div>
                        <div className="flex flex-col items-center justify-end h-48 mt-auto">
                          <ArrowDown className="w-5 h-24 text-accent/50 shrink-0" />
                          <p className="text-[12px] font-mono font-bold text-muted-foreground mt-4 text-center uppercase tracking-widest leading-tight h-10 flex items-start justify-center">10-20% impact on revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {problem.lifecycle && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="relative w-1/2 aspect-square scale-110 origin-left">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {/* Circular Path for Lifecycle */}
                          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" strokeDasharray="2 2" />
                          {problem.lifecycle.map((step, i) => {
                            const angle = (i * 360) / problem.lifecycle.length - 90;
                            const x = 50 + 35 * Math.cos((angle * Math.PI) / 180);
                            const y = 50 + 35 * Math.sin((angle * Math.PI) / 180);
                            return (
                              <g key={i}>
                                <circle cx={x} cy={y} r="4" fill="hsl(var(--primary))" />
                                <text
                                  x={x}
                                  y={y + (angle > 90 || angle < -270 ? -6 : 8)}
                                  textAnchor="middle"
                                  className="text-[5px] font-bold fill-primary uppercase"
                                >
                                  {step}
                                </text>
                                {/* Arrow to next step */}
                                {i < problem.lifecycle.length && (
                                  <path
                                    d={`M ${50 + 35 * Math.cos(((angle + 10) * Math.PI) / 180)} ${50 + 35 * Math.sin(((angle + 10) * Math.PI) / 180)} 
                                       A 35 35 0 0 1 ${50 + 35 * Math.cos(((angle + 50) * Math.PI) / 180)} ${50 + 35 * Math.sin(((angle + 50) * Math.PI) / 180)}`}
                                    fill="none"
                                    stroke="hsl(var(--accent))"
                                    strokeWidth="0.5"
                                    markerEnd="url(#arrowhead_lifecycle)"
                                  />
                                )}
                              </g>
                            );
                          })}
                          <defs>
                            <marker id="arrowhead_lifecycle" markerWidth="3" markerHeight="3" refX="2" refY="1.5" orient="auto">
                              <polygon points="0 0, 3 1.5, 0 3" fill="hsl(var(--accent))" />
                            </marker>
                          </defs>
                          <text x="50" y="52" textAnchor="middle" className="text-[6px] font-bold fill-accent uppercase tracking-widest">
                            Lifecycle
                          </text>
                        </svg>
                      </div>
                      <div className="w-1/2 space-y-4">
                        {[
                          { val: "40%", label: "of vacancies remain unfilled" },
                          { val: "23%", label: "of new hires leave (bad onboarding)" },
                          { val: "36%", label: "companies lack onboarding process" },
                          { val: "66%", label: "look for new job if unsupported" }
                        ].map((stat, i) => (
                          <div key={i} className="border-l-2 border-accent pl-3">
                            <p className="text-sm font-bold text-primary">{stat.val}</p>
                            <p className="text-[10px] leading-tight text-muted-foreground uppercase font-mono">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {problem.details && (
                      <p className="text-[11px] leading-relaxed text-muted-foreground">
                        {problem.details}
                      </p>
                    )}
                  </div>
                )}

                {problem.gaps && (
                  <div className="space-y-4">
                    {problem.gaps.map((gap, i) => (
                      <div key={i} className="flex justify-between items-center text-[13px] font-mono border-b border-border pb-1">
                        <span className="text-muted-foreground">{gap.label}</span>
                        <span className="text-primary font-bold">-{gap.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-border min-h-[4rem] flex items-center justify-center">
                {problem.title === "Disruption of Operations" ? (
                  <p className="text-xs font-bold text-primary font-mono tracking-widest uppercase text-center leading-relaxed">
                    POOR HUMAN INTEGRATION DIRECTLY AFFECTS REVENUE
                  </p>
                ) : (
                  <p className="text-xs font-bold text-primary font-mono tracking-widest uppercase text-center">
                    {problem.stats}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center py-16 px-8 bg-primary text-primary-foreground relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 font-mono font-bold uppercase tracking-widest text-sm shadow-xl">
            The Performance Leak
          </div>
          <h3 className="text-4xl md:text-6xl font-bold mb-6">AVERAGE <span className="text-accent">-25%</span></h3>
          <p className="text-xl md:text-2xl font-light text-primary-foreground/80 leading-relaxed mb-8">
            Due to one or more of these systemic failures, organizations leak a staggering quarter of their potential realized performance.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="font-mono uppercase tracking-[0.3em] text-xs text-accent">How we solve this</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-8 h-8 text-accent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
