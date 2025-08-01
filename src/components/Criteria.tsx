const Criteria = () => {
  const criteria = [
    {
      title: "Age & Experience",
      description: "Candidates must be 30 years of age or younger, with demonstrated experience in public affairs, policy, or governance."
    },
    {
      title: "Impact & Achievement",
      description: "Evidence of meaningful contributions to Canadian public policy, government, or civic engagement initiatives."
    },
    {
      title: "Innovation & Vision",
      description: "Demonstrated ability to bring fresh perspectives and innovative approaches to public sector challenges."
    },
    {
      title: "Leadership Potential",
      description: "Clear indication of future leadership capacity and commitment to advancing Canadian public interests."
    },
    {
      title: "Professional Recognition",
      description: "Recognition from peers, supervisors, or industry professionals for outstanding work and potential."
    },
    {
      title: "Canadian Connection",
      description: "Strong ties to Canada through citizenship, residence, or significant contribution to Canadian public affairs."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Selection Criteria
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We evaluate nominees based on six key criteria that reflect excellence, 
            impact, and potential in Canadian public affairs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border hover:shadow-elegant transition-smooth bg-card"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Criteria;