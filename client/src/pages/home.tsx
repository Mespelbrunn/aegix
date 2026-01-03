import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TriangleFeature } from "@/components/sections/TriangleFeature";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { Services } from "@/components/sections/Services";
import { ProblemSection } from "@/components/sections/ProblemSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main>
        <Hero />
        <ComparisonSection />
        <ProblemSection />
        <TriangleFeature />
        <Services />
        
        {/* Contact CTA */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">READY TO TRANSFORM YOUR OPERATIONS?</h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-bold">
              Stop relying on theory to change your strategy. Start implementing proven techniques to execute on your strategy and perform sustainably.
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-4 font-bold font-mono uppercase tracking-wider hover:bg-white hover:text-primary transition-colors">
              Schedule Briefing
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
