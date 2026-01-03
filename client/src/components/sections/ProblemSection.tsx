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
      description: "The 'Leaky Pipeline': Performance loss hiding in plain sight across the employee lifecycle.",
      lifecycle: ["Attract", "Select", "Onboard", "Develop", "Retain", "Offboard"],
      details: "40-80% of companies struggle to attract and retain. Growth pains = people problems.",
      stats: "66% leave if culturally unsupported | Negative compounding effect"
    },
    {
      title: "Strategy-to-Performance Gap",
      icon: Target,
      description: "Only 63% of average realized performance is achieved versus strategic intent.",
      gaps: [
        { label: "Resource Allocation", value: "7.5%" },
        { label: "Poor Communication", value: "5.2%" },
        { label: "Undefined Actions", value: "4.5%" },
        { label: "Unclear Accountability", value: "4.1%" }
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
                  <div className="grid grid-cols-2 gap-4 text-[10px] uppercase font-mono tracking-wider">
                    <div>
                      <p className="text-accent font-bold mb-2 underline underline-offset-4 text-xs">Sources</p>
                      <ul className="space-y-1">
                        {problem.sources.map((s, i) => <li key={i}>• {s}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-accent font-bold mb-2 underline underline-offset-4 text-xs">Impact</p>
                      <ul className="space-y-1">
                        {problem.impacts.map((im, i) => <li key={i}>• {im}</li>)}
                      </ul>
                    </div>
                  </div>
                )}

                {problem.lifecycle && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {problem.lifecycle.map((step, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-[10px] font-bold text-primary border border-primary/20">
                          {step}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{problem.details}</p>
                  </div>
                )}

                {problem.gaps && (
                  <div className="space-y-3">
                    {problem.gaps.map((gap, i) => (
                      <div key={i} className="flex justify-between items-center text-[11px] font-mono border-b border-border pb-1">
                        <span className="text-muted-foreground">{gap.label}</span>
                        <span className="text-primary font-bold">-{gap.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xs font-bold text-primary font-mono tracking-widest uppercase">
                  {problem.stats}
                </p>
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
