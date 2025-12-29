import { Check, X } from "lucide-react";
import aegixLogoDark from "/aegix-logo-dark.png";

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
              BATTLE-PROVEN <br/>
              <span className="text-muted-foreground">VS.</span> UNTESTED THEORY
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer concrete implementation based on experience in high-stakes environments backed up by scientific research. 
              No expensive paperwork or strictly theoretical presentations based on unproven models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Us */}
            <div className="bg-primary text-primary-foreground p-8 flex flex-col items-center justify-start">
              <div className="mb-4 flex justify-center w-full">
                <img src={aegixLogoDark} alt="Aegix Logo" className="h-40 w-auto" />
              </div>
              <ul className="space-y-4 w-full">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Battle-proven Methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Concrete Implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">From Information to Actionable Intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5" />
                  <span className="text-sm font-medium">Focus on Outcome</span>
                </li>
              </ul>
            </div>

            {/* Them */}
            <div className="bg-secondary/20 border border-border p-8 text-muted-foreground flex flex-col items-center justify-start">
              <h3 className="text-xl font-bold font-heading uppercase mb-12 tracking-wider text-center">Traditional Consultancy</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Theoretical Foundations only</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Generic Programs without Ownership</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Information Overload</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/50 mt-0.5" />
                  <span className="text-sm">Focus on Presentations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
