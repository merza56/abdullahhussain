import { Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#E8E6E1] text-[#1C1C1C] py-12 border-t border-[#1C1C1C]/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <div className="text-2xl font-serif font-medium tracking-tight mb-2">
            Abdullah<span className="text-[#CBA078]">.</span>
          </div>
          <p className="text-[#1C1C1C]/50 text-sm max-w-xs">
            Creating identities that live, breathe, and move people.
          </p>
        </div>
        
        <div className="flex flex-col items-end gap-4">
            <div className="flex gap-6">
                <a href="#" className="text-[#1C1C1C]/60 hover:text-[#1C1C1C] transition-colors text-sm">Privacy</a>
                <a href="#" className="text-[#1C1C1C]/60 hover:text-[#1C1C1C] transition-colors text-sm">Imprint</a>
            </div>
            <p className="text-[#1C1C1C]/30 text-xs">© 2025 Abdullah Hussain.</p>
        </div>
      </div>
    </footer>
  );
};
