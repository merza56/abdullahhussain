import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#E8E6E1] border-t border-[#1C1C1C]/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1C1C1C] mb-8 leading-tight">
              Let’s start a <br/> conversation.
            </h2>
            <p className="text-lg text-[#1C1C1C]/70 mb-12 max-w-md">
              Interested in working together? Fill out the form or drop me an email directly.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1C1C1C]/40 mb-2">Email</h4>
                <a href="mailto:abdullahussain.e@gmail.com" className="text-2xl font-serif text-[#1C1C1C] hover:opacity-60 transition-opacity">
                  abdullahussain.e@gmail.com
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1C1C1C]/40 mb-4">Connect</h4>
                <div className="flex gap-6">
                  {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                    <a key={social} href="#" className="text-sm font-medium text-[#1C1C1C] hover:text-[#CBA078] transition-colors underline decoration-[#1C1C1C]/20 underline-offset-4">
                        {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E0DED9] p-8 md:p-12 rounded-none">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/40">Name</label>
                <Input placeholder="Your Name" className="bg-transparent border-x-0 border-t-0 border-b border-[#1C1C1C]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#1C1C1C] text-lg placeholder:text-[#1C1C1C]/20 shadow-none" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/40">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-transparent border-x-0 border-t-0 border-b border-[#1C1C1C]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#1C1C1C] text-lg placeholder:text-[#1C1C1C]/20 shadow-none" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C]/40">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-transparent border-x-0 border-t-0 border-b border-[#1C1C1C]/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[#1C1C1C] text-lg placeholder:text-[#1C1C1C]/20 min-h-[100px] resize-none shadow-none" />
              </div>

              <div className="pt-4">
                <Button type="submit" className="bg-[#1C1C1C] text-[#E8E6E1] hover:bg-[#333] rounded-none px-8 py-6 text-sm uppercase tracking-widest">
                    Send Inquiry
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
