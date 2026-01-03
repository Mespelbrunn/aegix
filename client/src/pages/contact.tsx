import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Linkedin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-16"
            >
              {/* Left Side: Info */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 text-primary uppercase tracking-tighter">
                  START YOUR <span className="text-accent">MISSION</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  Ready to bridge the gap between strategy and performance? Reach out to begin your organizational transformation.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-sm tracking-widest text-accent mb-1">Direct Line</h4>
                      <p className="text-lg font-mono">+32 472 76 28 39</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary text-primary">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase text-sm tracking-widest text-accent mb-1">Connect on LinkedIn</h4>
                      <div className="flex flex-col gap-2">
                        <a 
                          href="https://www.linkedin.com/in/patricksauboin/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors flex items-center gap-2"
                        >
                          Patrick Sauboin <span className="text-xs font-mono opacity-50">/ in / patricksauboin</span>
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/maarten-van-de-wiele-5b25159b/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors flex items-center gap-2"
                        >
                          Maarten Van de Wiele <span className="text-xs font-mono opacity-50">/ in / maarten-vdw</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-secondary/30 p-8 border border-border">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="font-mono uppercase text-[10px] tracking-widest">First Name</Label>
                      <Input id="first-name" placeholder="John" className="rounded-none border-border bg-background focus-visible:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="font-mono uppercase text-[10px] tracking-widest">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" className="rounded-none border-border bg-background focus-visible:ring-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono uppercase text-[10px] tracking-widest">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-none border-border bg-background focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question" className="font-mono uppercase text-[10px] tracking-widest">Your Question</Label>
                    <Textarea id="question" placeholder="How can we help your organization?" className="rounded-none border-border bg-background focus-visible:ring-accent min-h-[150px]" />
                  </div>
                  <Button className="w-full rounded-none h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-widest">
                    Submit Mission Briefing
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
