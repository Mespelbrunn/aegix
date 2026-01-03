import { Shield, Users, Crosshair } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Talent Integration",
      subtitle: "Designing organizations around humans",
      points: [
        "From Surviving to Thriving culture",
        "Values-based recruitment & onboarding",
        "Talent development & behavior analysis",
        "Offboarding as a strategic advantage"
      ]
    },
    {
      icon: Shield,
      title: "Culture & Leadership",
      subtitle: "Guiding with clarity and objectives",
      points: [
        "Leadership principles & coaching",
        "Mission Command & Commander's Intent",
        "Operational Resilience Mindset",
        "Feedback & Reporting Culture"
      ]
    },
    {
      icon: Crosshair,
      title: "Sustained Operations",
      subtitle: "Building daily habits for resilience",
      points: [
        "From Information to Actionable Intelligence",
        "Structured Decision Making (DMP)",
        "Contingency Planning & Red Teaming",
        "High Reliability Organization (HRO) setup"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-primary">
            OPERATIONAL <span className="text-accent">CAPABILITIES</span>
          </h2>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group border border-border p-8 hover:border-accent transition-colors duration-300">
              <div className="mb-6 inline-flex p-3 bg-secondary text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">{service.title}</h3>
              <p className="text-sm font-mono text-accent mb-6 uppercase tracking-wider">{service.subtitle}</p>
              
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 bg-primary mt-1.5 rounded-none" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
