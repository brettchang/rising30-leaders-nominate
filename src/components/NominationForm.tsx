import { Button } from "@/components/ui/button";

const NominationForm = () => {

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Submit a Nomination
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Know someone who deserves recognition? Help us identify Canada's rising public affairs leaders.
          </p>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 h-auto text-white !bg-[#418476] hover:!bg-[#367066] !bg-none"
            asChild
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeeZDc-t1t1SLZOG_LQlQzZMcHHDWBb5nnmtUL1iZzwYe_0dg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Nomination Form
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NominationForm;