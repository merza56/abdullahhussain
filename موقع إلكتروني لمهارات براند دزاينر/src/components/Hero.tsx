import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#E8E6E1]">
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="mb-6 text-sm md:text-base text-[#1C1C1C]/70 font-sans tracking-wide">
            Graphic Design Specialist
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#1C1C1C] leading-[1.1] mb-8 max-w-4xl mx-auto tracking-tight">
            Clarity and Beauty <br />
            <span className="italic">with Abdullah</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#1C1C1C]/70 max-w-lg mx-auto font-sans font-light leading-relaxed mb-12">
            Unified brand identities that deliver emotional impact and actionable results.
          </p>
        </motion.div>
      </div>

      {/* Abstract Ring Graphic imitating the LimeIQ dial */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] rounded-full border-[1px] border-[#1C1C1C]/5 pointer-events-none flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-full border-[1px] border-[#1C1C1C]/5 flex items-center justify-center">
           <div className="w-[90%] h-[90%] rounded-full border-[1px] border-[#1C1C1C]/5 flex items-center justify-center bg-gradient-to-t from-[#CBA078]/20 to-transparent">
              {/* Inner gold accented circle */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-[80%] h-[80%] rounded-full border-[40px] md:border-[80px] border-[#CBA078]/30 border-t-[#CBA078]/60 border-r-transparent border-b-transparent border-l-[#CBA078]/10 blur-xl"
              />
           </div>
        </div>
        
        {/* Ticks */}
        <div className="absolute inset-0 rounded-full">
            {[...Array(60)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-[1px] h-[20px] bg-[#1C1C1C]/20 top-0 left-1/2 origin-bottom"
                    style={{ 
                        transform: `rotate(${i * 6}deg) translateY(0)`,
                        transformOrigin: `50% ${40}vw` // Approximate radius
                    }}
                />
            ))}
        </div>
      </div>
      
      {/* Overlay gradient to fade the bottom into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E8E6E1] to-transparent z-10" />
    </section>
  );
};
