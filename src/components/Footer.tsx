const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Rising 30</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Celebrating Canada's most promising emerging leaders in public affairs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-smooth">About the Program</a></li>
              <li><a href="#criteria" className="hover:text-primary-foreground transition-smooth">Selection Criteria</a></li>
              <li><a href="#nominate" className="hover:text-primary-foreground transition-smooth">Submit Nomination</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Updates</h4>
            <p className="text-primary-foreground/80 mb-4">
              Stay informed about Rising 30 announcements and deadlines.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md text-foreground"
              />
              <button className="bg-accent hover:bg-accent/90 px-4 py-2 rounded-r-md transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Rising 30. All rights reserved. | Celebrating excellence in Canadian public affairs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;