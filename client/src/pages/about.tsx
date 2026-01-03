import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-12 text-primary uppercase tracking-tighter">
              ABOUT <span className="text-accent">AEGIX</span>
            </h1>
            
            <div className="space-y-12 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <section className="border-l-4 border-accent pl-8 py-2">
                <p>
                  Maarten Van de Wiele is a Major in the Belgian Army with vast experience as a leader in the infantry with multiple deployments to hostile environments. As Safety Officer for Land Forces, he has built the expertise to combine human behaviour with safe and sustained operations.
                </p>
              </section>

              <section className="border-l-4 border-primary pl-8 py-2">
                <p>
                  Patrick Sauboin retired as a Captain in the Belgian Army in 2025. With five years of operational experience as a leader in various roles and deployments, and five years as digital transformation officer, he has learned what enables organizations to perform when people, processes and technology come together in demanding situations.
                </p>
              </section>

              <section className="bg-secondary/30 p-8 border border-border">
                <p className="text-foreground font-medium">
                  Maarten and Patrick have combined their complementary knowledge and skills to help organizations perform where it matters: people and operations. Their shared vision of human potential in an organization has led to the birth of Aegix.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
