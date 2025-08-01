import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#ecebe8' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white font-glacial">
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight font-bodoni italic text-black">
          Rising
          <span className="text-black"> 30</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Celebrating Canada's most promising emerging leaders in public affairs. 
          An annual recognition of innovation, impact, and excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            Nominate a Leader
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary"
          >
            Learn More
          </Button>
        </div>
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