import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0" style={{ backgroundColor: '#ecebe8' }}></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white font-glacial">
        {/* Parliament Building Image */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/bb8b9c79-9aee-4402-97d9-2de36bbf8974.png" 
            alt="Canadian Parliament Building" 
            className="mx-auto h-52 md:h-64 w-auto"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight font-bodoni italic text-black">
          Rising
          <span className="text-black"> 30</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto text-black">
          Celebrating Canada's most promising emerging leaders in public affairs. 
          An annual recognition of innovation, impact, and excellence.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl text-black font-glacial font-bold">Presented by</span>
            <img 
              src="/lovable-uploads/0614deca-3570-4999-8688-929b81ac3f07.png" 
              alt="The Peak logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-black font-glacial font-bold">Supported by</span>
            <img 
              src="/lovable-uploads/acc7899c-082c-4839-95e5-c9d8f3020c75.png" 
              alt="Page logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg"
            className="text-lg px-8 py-4 h-auto text-white !bg-[#418476] hover:!bg-[#367066] !bg-none"
            asChild
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeeZDc-t1t1SLZOG_LQlQzZMcHHDWBb5nnmtUL1iZzwYe_0dg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nominate a Leader
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;