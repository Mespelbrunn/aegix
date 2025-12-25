export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold font-heading mb-6 tracking-tighter">
              AEGIX
            </h3>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Enabling human potential in organizations through battle-proven military principles.
              Focus on growth, profit, and contribution to society.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold uppercase mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-bold uppercase mb-4 text-accent">Contact</h4>
            <p className="text-sm text-primary-foreground/70 mb-2">
              info@aegix.com
            </p>
            <p className="text-sm text-primary-foreground/70">
              Brussels, Belgium
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/40 font-mono">
          <p>© 2024 Aegix. All rights reserved.</p>
          <p>Designed with Tactical Precision.</p>
        </div>
      </div>
    </footer>
  );
}
