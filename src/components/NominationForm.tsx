import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
        
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Nomination Form</CardTitle>
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
              <Button variant="premium" size="lg" className="w-full text-lg py-3">
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
    </section>
  );
};

export default NominationForm;