
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-white pt-8 pb-4 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Effortless Cargo<br />
              Shipping: Solutions for<br />
              Businesses of All Sizes
            </h1>
            <p className="text-lg mb-6 text-gray-700">
              Get competitive rates and reliable service. No matter where you're<br />
              shipping or how much you are sending.
            </p>
            <div className="flex space-x-4">
              <Link to="/quote" className="quote-button">
                Get a Free Quote
              </Link>
              <Link to="/services" className="flex items-center font-medium text-black hover:underline">
                Explore Our Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/3 flex flex-col space-y-6">
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-green-700">20%</span>
              <p className="text-sm text-gray-600">Lower costs compared to industry average on ocean cargo</p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-green-700">90%</span>
              <p className="text-sm text-gray-600">Of shipments arrive on time or ahead of estimation</p>
            </div>
            
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-green-700">85%</span>
              <p className="text-sm text-gray-600">Digital documentation makes shipment tracking easier</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
