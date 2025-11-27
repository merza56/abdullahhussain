import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const allProjects = [
  {
    id: 1,
    title: "Melody Café",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1546351651-8f87e407da50?auto=format&fit=crop&w=800&q=80",
    year: "2024"
  },
  {
    id: 2,
    title: "Indian Palace",
    category: "Restaurant",
    image: "https://images.unsplash.com/photo-1712488067128-080974f6ab73?auto=format&fit=crop&w=800&q=80",
    year: "2023"
  },
  {
    id: 3,
    title: "Olive Italian",
    category: "Identity",
    image: "https://images.unsplash.com/photo-1762857362838-b1c61a2689d2?auto=format&fit=crop&w=800&q=80",
    year: "2023"
  },
  {
    id: 4,
    title: "Sports Café",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1726514731107-b881d296c490?auto=format&fit=crop&w=800&q=80",
    year: "2024"
  },
  {
    id: 5,
    title: "Basra Marathon",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1565642902549-61d5d0039855?auto=format&fit=crop&w=800&q=80",
    year: "2025"
  },
  {
    id: 6,
    title: "Camarada",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1592480071809-f42c1dfd4939?auto=format&fit=crop&w=800&q=80",
    year: "2023"
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-[#E8E6E1]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-serif text-[#1C1C1C] mb-6">Selected Work</h2>
            <p className="text-[#1C1C1C]/60 max-w-xl mx-auto">A collection of projects that define brands and drive culture.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
            {allProjects.map((project, index) => (
              <div key={project.id} className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-20' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#DEDBD6]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="flex justify-between items-end border-b border-[#1C1C1C]/10 pb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-[#1C1C1C] mb-1">{project.title}</h3>
                    <p className="text-sm text-[#1C1C1C]/50">{project.category}</p>
                  </div>
                  <span className="text-sm text-[#1C1C1C]/50">{project.year}</span>
                </div>
              </div>
            ))}
        </div>
        
        <div className="mt-20 text-center">
            <button className="px-8 py-3 border border-[#1C1C1C] rounded-full hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
};
