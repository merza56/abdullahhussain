import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const servicesList = [
  {
    title: "Brand Identity",
    items: ["Logo Systems", "Color Strategy", "Typography"],
    description: "Building visual systems that tell your story efficiently."
  },
  {
    title: "Packaging",
    items: ["Dielines", "Luxury Finishes", "Unboxing"],
    description: "Creating physical touchpoints that elevate value."
  },
  {
    title: "Hospitality",
    items: ["Menus", "Signage", "Interior Graphics"],
    description: "Holistic experiences for cafes and restaurants."
  },
  {
    title: "Sports Branding",
    items: ["Event Gates", "Medals", "Jerseys"],
    description: "Dynamic designs for major sporting events."
  },
  {
    title: "Digital Content",
    items: ["Social Strategy", "Templates", "Motion"],
    description: "Consistent digital presence for modern brands."
  },
  {
    title: "AI Art",
    items: ["Prompts", "Concepts", "Exploration"],
    description: "Leveraging AI tools to push creative boundaries."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#E8E6E1] border-t border-[#1C1C1C]/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
                <span className="text-[#1C1C1C]/60 font-sans text-sm tracking-wider uppercase mb-4 block">Capabilities</span>
                <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C]">Expertise & <br/>Methodology</h2>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 hover:opacity-60 transition-opacity">
                Start a project <ArrowRight className="w-4 h-4" />
            </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#1C1C1C]/10">
          {servicesList.map((service, index) => (
            <div key={index} className="group border-r border-b border-[#1C1C1C]/10 p-8 md:p-12 hover:bg-[#E0DED9] transition-colors duration-300 min-h-[320px] flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-serif mb-4 text-[#1C1C1C]">{service.title}</h3>
                    <p className="text-[#1C1C1C]/70 mb-8 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-2">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center text-xs uppercase tracking-wide text-[#1C1C1C]/50">
                      {item}
                    </div>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
