

import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <>

      <Separator className="max-w-4xl mx-auto" />

      <section aria-labelledby="why-heading" className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-foreground">Why we're doing this</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Canada's public affairs community is filled with talented young professionals who rarely get the spotlight. Rising 30 exists to celebrate their impact, elevate their stories, and inspire the next generation of leaders.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;