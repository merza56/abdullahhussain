import { useRef, useEffect } from "react";
import { motion } from "motion/react";

const works = [
  {
    title: "Melody Café",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1546351651-8f87e407da50?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports Café",
    category: "Menu Identity",
    image: "https://images.unsplash.com/photo-1726514731107-b881d296c490?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Basra Marathon",
    category: "Sports Branding",
    image: "https://images.unsplash.com/photo-1565642902549-61d5d0039855?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Indian Palace",
    category: "Restaurant Visuals",
    image: "https://images.unsplash.com/photo-1712488067128-080974f6ab73?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Camarada",
    category: "Luxury Fashion",
    image: "https://images.unsplash.com/photo-1592480071809-f42c1dfd4939?auto=format&fit=crop&w=800&q=80",
  },
];

export const Showcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="py-20 bg-[#E8E6E1] border-b border-[#1C1C1C]/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1C1C1C]">Latest Updates</h2>
        </div>
        <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-[#1C1C1C]/50">Scroll</span>
            <div className="w-12 h-[1px] bg-[#1C1C1C]/20"></div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-12 px-6 md:px-12 scrollbar-hide"
      >
        {works.map((work, index) => (
          <motion.div 
            key={index}
            className="min-w-[300px] md:min-w-[400px] group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-[#DEDBD6]">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            <h3 className="text-lg font-serif text-[#1C1C1C]">{work.title}</h3>
            <p className="text-sm text-[#1C1C1C]/50">{work.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
