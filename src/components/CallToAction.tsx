
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-shipship-green text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Streamline<br />
          Your Shipping?
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/quote" className="quote-button">
            Get a Free Quote
          </Link>
          
          <Link to="/contact" className="contact-button flex items-center justify-center">
            Contact us
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
