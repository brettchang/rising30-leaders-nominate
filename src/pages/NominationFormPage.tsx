import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NominationFormPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={handleGoBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nomination Form
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Help us identify Canada's rising public affairs leaders by submitting your nomination.
          </p>
        </div>
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Submit Your Nomination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nominator-name">Your Name</Label>
                <Input id="nominator-name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nominator-email">Your Email</Label>
                <Input id="nominator-email" type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nominee-name">Nominee's Name</Label>
                <Input id="nominee-name" placeholder="Enter nominee's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nominee-organization">Organization</Label>
                <Input id="nominee-organization" placeholder="Current organization or role" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nominee-email">Nominee's Email</Label>
              <Input id="nominee-email" type="email" placeholder="nominee.email@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Why should this person be recognized?</Label>
              <Textarea 
                id="reason" 
                placeholder="Describe their achievements, impact, and why they deserve to be included in Rising 30..."
                className="min-h-32"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="achievements">Key Achievements & Impact</Label>
              <Textarea 
                id="achievements" 
                placeholder="Provide specific examples of their contributions to Canadian public affairs..."
                className="min-h-32"
              />
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="w-full text-lg py-3 text-white !bg-[#418476] hover:!bg-[#367066] !bg-none"
              >
                Submit Nomination
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              By submitting this form, you confirm that you have the nominee's consent to share their information 
              and that all details provided are accurate to the best of your knowledge.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NominationFormPage;