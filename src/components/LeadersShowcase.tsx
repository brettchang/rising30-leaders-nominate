import { Card } from "@/components/ui/card";

const leaders = [
  {
    id: 1,
    name: "Michael Ciotti",
    title: "Founder & Managing Partner, Outsider Capital",
    image: "/lovable-uploads/0614deca-3570-4999-8688-929b81ac3f07.png"
  },
  {
    id: 2,
    name: "Sukant Sharma",
    title: "Vice President, M&A and Capital Markets Advisory, Ernst & Young (EY)",
    image: "/lovable-uploads/43b04b5b-4ef4-4e57-9b23-7e47a54752f6.png"
  },
  {
    id: 3,
    name: "Jordan Hill",
    title: "Managing Director & Founder, Growth Partners",
    image: "/lovable-uploads/bb8b9c79-9aee-4402-97d9-2de36bbf8974.png"
  },
  {
    id: 4,
    name: "Idriss Bouhmouch",
    title: "Digital Partnerships Lead, National Bank of Canada",
    image: "/lovable-uploads/acc7899c-082c-4839-95e5-c9d8f3020c75.png"
  }
];

const LeadersShowcase = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-foreground tracking-wide">RISING 30 2025</span>
            <span className="text-sm font-semibold text-primary tracking-wide cursor-pointer hover:underline">BROWSE ALL CATEGORIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Public Affairs & Government Relations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The up-and-coming young leaders shaping Canada's political landscape, policy decisions, and public discourse in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {leaders.map((leader) => (
            <Card key={leader.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                  {leader.title}
                </p>
                <h3 className="text-lg font-bold text-foreground">
                  {leader.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersShowcase;