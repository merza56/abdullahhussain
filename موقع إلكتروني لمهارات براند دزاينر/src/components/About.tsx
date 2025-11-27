import { motion } from "motion/react";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-[#E8E6E1]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
             <span className="text-[#1C1C1C]/60 font-sans text-sm tracking-wider uppercase mb-6 block">About</span>
             <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight mb-8">
                I build brands with <span className="italic text-[#CBA078]">emotion</span> and clarity.
             </h2>
          </div>

          <div className="lg:col-span-7 lg:pl-12 border-l border-[#1C1C1C]/10">
             <p className="text-lg md:text-xl text-[#1C1C1C]/80 leading-relaxed mb-12 font-light">
                Based in Basra, I am a Graphic Design Specialist with deep experience in hospitality, sports branding, and luxury identities. My work connects local culture with modern aesthetics, creating visual systems that feel both grounded and aspirational.
             </p>
             
             <div className="grid sm:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-serif text-xl mb-4">Experience</h3>
                    <ul className="space-y-4">
                        <li className="border-b border-[#1C1C1C]/10 pb-2">
                            <span className="block font-medium">Grand Millennium Al-Seef</span>
                            <span className="text-sm text-[#1C1C1C]/50">2024 — Present</span>
                        </li>
                        <li className="border-b border-[#1C1C1C]/10 pb-2">
                            <span className="block font-medium">Freelance Specialist</span>
                            <span className="text-sm text-[#1C1C1C]/50">2023 — 2024</span>
                        </li>
                        <li className="border-b border-[#1C1C1C]/10 pb-2">
                            <span className="block font-medium">Creative Direction</span>
                            <span className="text-sm text-[#1C1C1C]/50">2022 — 2023</span>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-serif text-xl mb-4">Focus</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Hospitality', 'Luxury', 'Sports', 'Packaging', 'AI Art'].map(tag => (
                            <span key={tag} className="px-3 py-1 border border-[#1C1C1C]/20 rounded-full text-sm text-[#1C1C1C]/70">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
