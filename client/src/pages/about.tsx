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
            
            <div className="space-y-20 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[3/4] overflow-hidden grayscale border border-border">
                  <img 
                    src="/assets/maarten.jpg" 
                    alt="Maarten Van de Wiele" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="border-l-4 border-accent pl-8 py-2">
                  <p>
                    Maarten Van de Wiele is a Major in the Belgian Army with vast experience as a leader in the infantry with multiple deployments to hostile environments. As Senior Officer within the Land Forces, he has built the expertise to combine human behaviour with safe and sustained operations.
                  </p>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 border-r-4 border-primary pr-8 py-2 text-right">
                  <p>
                    Patrick Sauboin retired as a Captain in the Belgian Army in 2025. With five years of operational experience as a leader in various roles and deployments, and five years as digital transformation officer, he has learned what enables organizations to perform when people, processes and technology come together in demanding situations.
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-[3/4] overflow-hidden grayscale border border-border">
                  <img 
                    src="/assets/patrick.jpg" 
                    alt="Patrick Sauboin" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </section>

              <section className="bg-secondary/30 p-8 border border-border text-center">
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
