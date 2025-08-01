import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNominate = () => {
    navigate("/nomination-form");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <h3 className="text-3xl font-bold">Know Someone Who Deserves Recognition?</h3>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Help us identify Canada's rising public affairs leaders. Submit your nomination today.
          </p>
          <Button 
            onClick={handleNominate}
            variant="secondary" 
            size="lg"
            className="text-lg px-8 py-4 h-auto"
          >
            Submit a Nomination
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