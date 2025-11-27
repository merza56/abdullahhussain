import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Purpose", href: "#about" },
    { name: "Experience", href: "#services" },
    { name: "Story", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#E8E6E1]/90 backdrop-blur-md border-b border-[#1C1C1C]/10 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif font-medium tracking-tight text-[#1C1C1C] z-50">
          Abdullah<span className="text-[#CBA078]">.</span>
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#1C1C1C]/80 hover:text-[#1C1C1C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="mailto:abdullahussain.e@gmail.com" className="text-sm font-medium text-[#1C1C1C] hover:opacity-70">
            Email Me
          </a>
          <a 
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium text-[#1C1C1C] hover:opacity-70 border-b border-[#1C1C1C] pb-0.5 transition-all"
          >
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-[#1C1C1C]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-[#E8E6E1] z-40 flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-medium text-[#1C1C1C] hover:text-[#CBA078] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
