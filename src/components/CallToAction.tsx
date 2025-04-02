
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-shipship-green text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          Ready to Streamline<br />
          Your Shipping?
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/quote" className="bg-shipship-yellow text-black font-semibold py-3 px-8 rounded-md hover:bg-yellow-300 transition-colors">
            Get a Free Quote
          </Link>
          
          <Link to="/contact" className="bg-white text-black font-semibold py-3 px-8 rounded-md border border-black hover:bg-gray-100 transition-colors flex items-center justify-center">
            Contact us
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
