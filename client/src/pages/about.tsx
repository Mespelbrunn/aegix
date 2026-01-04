import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

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
            
            <div className="space-y-32 text-lg md:text-xl leading-relaxed text-muted-foreground">
              <section className="grid md:grid-cols-[1fr_2fr] gap-16 items-center">
                <div className="aspect-[3/4] overflow-hidden grayscale border border-border w-3/4 mx-auto md:ml-0">
                  <img 
                    src="/assets/maarten.jpg" 
                    alt="Maarten Van de Wiele" 
                    className="w-full h-full object-cover object-[center_5%] hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="border-l-4 border-accent pl-12 py-4 relative group/bio">
                  <p className="tracking-wide">
                    <strong>Maarten Van de Wiele</strong> is a Major in the Belgian Army with vast experience as a leader in the infantry with multiple deployments to hostile environments. As Senior Officer within the Land Forces, he has built the expertise to combine human behaviour with safe and sustained operations.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/maarten-van-de-wiele-5b25159b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-xs font-mono uppercase tracking-widest font-bold">Connect</span>
                  </a>
                </div>
              </section>

              <section className="grid md:grid-cols-[2fr_1fr] gap-16 items-center">
                <div className="order-2 md:order-1 border-r-4 border-primary pr-12 py-4 text-right">
                  <p className="tracking-wide">
                    <strong>Patrick Sauboin</strong> left the Belgian Army in 2025 as an experienced Captain. After five years of operational leadership in various roles and deployments, and five years as digital transformation officer and hands-on IT manager, he has learned what enables organizations to perform when people, processes and technology come together in critical situations.
                  </p>
                  <div className="flex justify-end">
                    <a 
                      href="https://www.linkedin.com/in/patricksauboin/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                    >
                      <span className="text-xs font-mono uppercase tracking-widest font-bold">Connect</span>
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2 aspect-[3/4] overflow-hidden grayscale border border-border w-3/4 mx-auto md:mr-0">
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
