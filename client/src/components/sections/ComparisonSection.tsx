import { Check, X } from "lucide-react";

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-6">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-primary">
              BATTLE PROVEN <br/>
              <span className="text-muted-foreground">VS.</span> ACADEMIC THEORY
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Many consultants offer expensive PowerPoint presentations based on unproven models. 
              We offer concrete, experience-driven implementation based on what actually works 
              in high-stakes environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Us */}
            <div className="bg-primary text-primary-foreground p-8 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold font-heading uppercase mb-6 tracking-wider">Strategic.Ops</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Battle Proven Methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Concrete Implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Actionable Intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Focus on Outcome</span>
                </li>
              </ul>
            </div>

            {/* Them */}
            <div className="bg-secondary/20 border border-border p-8 text-muted-foreground">
               <h3 className="text-xl font-bold font-heading uppercase mb-6 tracking-wider">Traditional</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Academic Theory</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Endless Presentations</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Information Overload</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Focus on Process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
