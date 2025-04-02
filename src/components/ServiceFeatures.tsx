
import React from 'react';
import { Gauge, BarChart3, ArrowRightLeft } from 'lucide-react';

const ServiceFeatures = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        
        <div className="text-4xl font-bold mb-12">
          Your Trusted<br />
          Partner in Global<br />
          Shipping
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-shipship-lightYellow p-8 rounded-md">
            <div className="mb-4">
              <Gauge size={32} className="text-shipship-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Competitive Rates</h3>
            <p className="text-sm">
              Get transparent pricing and exclusive discounts for frequent shippers.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-md">
            <div className="mb-4">
              <BarChart3 size={32} className="text-shipship-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Seamless Logistics</h3>
            <p className="text-sm">
              Our expert team handles all documentation and customs clearance for a stress-free experience.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-md">
            <div className="mb-4">
              <ArrowRightLeft size={32} className="text-shipship-green" />
            </div>
            <h3 className="text-xl font-medium mb-2">Flexible Solutions</h3>
            <p className="text-sm">
              We offer a variety of shipping options from Air Freight and Ocean FCL to Less-Than-Container-Load (LCL) and Full Container Load (FCL).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
