import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NominationForm = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/nomination-form");
  };

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
            onClick={handleNavigateToForm}
            size="lg" 
            className="text-lg px-8 py-4 h-auto text-white !bg-[#418476] hover:!bg-[#367066] !bg-none"
          >
            Start Nomination Form
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NominationForm;