const PageInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Column */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/43b04b5b-4ef4-4e57-9b23-7e47a54752f6.png" 
              alt="Page logo" 
              className="h-48 w-auto"
            />
          </div>
          
          {/* Text Column */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Page is real-time government relations platform built for professionals.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Page turns government noise into a competitive advantage — real-time insights, effortless tracking, and a suite of AI-powered tools for government relations professionals.
            </p>
            
            <a 
              href="https://withpage.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg text-foreground font-semibold hover:text-[#418476] transition-colors"
            >
              Learn more about Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageInfo;