const FAQ = () => {
  const faqs = [
    {
      question: "Who will decide the winners?",
      answer: "Winners will be chosen by a panel of judges based on their professional achievements, innovative approaches, leadership qualities, and involvement in the community."
    },
    {
      question: "When will the winners be announced?",
      answer: "September 2025"
    },
    {
      question: "Who's organizing this?",
      answer: "Page: the real-time government relations platform built for professionals"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;