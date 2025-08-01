const PageInfo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Logo Column */}
          <div className="flex justify-center md:justify-start">
            <img 
              src="/lovable-uploads/acc7899c-082c-4839-95e5-c9d8f3020c75.png" 
              alt="Page logo" 
              className="h-24 w-auto"
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
            
            <p className="text-lg text-foreground font-semibold">
              Learn more about Page
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageInfo;