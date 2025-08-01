import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#ecebe8' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center font-glacial">
        <p className="text-xl md:text-2xl leading-relaxed text-black font-bold">
          Rising 30 is the search for Canada's best and brightest public affairs leaders. Winners will be chosen by a panel of judges based on their professional achievements, innovative approaches and leadership qualities. Winners will be announced in September 2025.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;