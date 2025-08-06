import { Button } from "@/components/ui/button";

const Footer = () => {

  return (
    <footer className="text-primary-foreground py-12" style={{ backgroundColor: '#418476' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold">Know Someone Who Deserves Recognition?</h3>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Help us identify Canada's rising public affairs leaders. Submit your nomination today.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
            asChild
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeeZDc-t1t1SLZOG_LQlQzZMcHHDWBb5nnmtUL1iZzwYe_0dg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a Nomination
            </a>
          </Button>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Page Technologies Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;