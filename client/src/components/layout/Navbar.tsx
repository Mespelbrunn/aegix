import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#the-aegix-method", label: "The Aegix Method" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="cursor-pointer flex items-center">
          <img src="/aegix-logo.png" alt="Aegix Logo" className="h-12 w-auto hover:opacity-80 transition-opacity" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <Button variant="default" className="font-mono uppercase text-xs tracking-widest rounded-none">
            <a href="/contact" className="text-white hover:text-white no-underline">
              Contact
            </a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-12">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold font-heading uppercase hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="w-full font-mono uppercase rounded-none">
                  <a href="/contact" className="text-white hover:text-white no-underline w-full">
                    Contact
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
