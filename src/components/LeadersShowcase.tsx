import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
interface Leader {
  id: string;
  name: string;
  title: string;
  company: string;
  image_url: string | null;
  category: string;
  order_index: number;
}
const LeadersShowcase = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const {
          data,
          error
        } = await supabase.from('leaders').select('*').order('order_index', {
          ascending: true
        });
        if (error) {
          console.error('Error fetching leaders:', error);
          return;
        }
        setLeaders(data || []);
      } catch (error) {
        console.error('Error fetching leaders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);
  return <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-semibold text-foreground tracking-wide">RISING 30 2025</span>
            
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Public Affairs & Government Relations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The up-and-coming young leaders shaping Canada's political landscape, policy decisions, and public discourse in 2025.
          </p>
        </div>

        {loading ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[...Array(4)].map((_, i) => <Card key={i} className="overflow-hidden border-0 shadow-lg">
                <div className="aspect-[3/4] bg-muted animate-pulse"></div>
                <div className="p-6 text-center space-y-2">
                  <div className="h-4 bg-muted rounded animate-pulse"></div>
                  <div className="h-5 bg-muted rounded animate-pulse"></div>
                </div>
              </Card>)}
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {leaders.map(leader => <Card key={leader.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={leader.image_url || '/placeholder.svg'} alt={`${leader.name} - ${leader.title} at ${leader.company}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                    {leader.title}, {leader.company}
                  </p>
                  <h3 className="text-lg font-bold text-foreground">
                    {leader.name}
                  </h3>
                </div>
              </Card>)}
          </div>}
      </div>
    </section>;
};
export default LeadersShowcase;