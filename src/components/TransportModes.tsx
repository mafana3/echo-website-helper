
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TransportModes = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 bg-white">
      <div className="relative">
        <img 
          src="/public/lovable-uploads/50e7d1a6-f372-4206-b14d-4a48be0bf536.png" 
          alt="Airplane and cargo ship" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="bg-shipship-blue text-white p-6 flex flex-col justify-center">
        <div className="mb-4">
          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center mb-2">
            <span className="text-lg">⚓</span>
          </div>
        </div>
        <h3 className="text-xl font-medium mb-2">FCL shipping is the most cost-effective option for transporting large cargo volumes.</h3>
        <p className="text-sm opacity-80 mb-2">
          (Source: Industry report on FCL shipping)
        </p>
      </div>
      
      <div className="bg-shipship-green text-white p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium">Small business</h3>
          <ArrowUpRight size={24} />
        </div>
        
        <div className="mt-auto">
          <h2 className="text-2xl font-bold mb-4">
            Scale Your Shipping Needs with Confidence
          </h2>
          <p className="text-sm mb-4">
            Get started with affordable LCL solutions for smaller shipments and enjoy hassle-free international trade.
          </p>
        </div>
      </div>
      
      <div className="grid grid-rows-2">
        <div className="bg-amber-200 p-6">
          <h3 className="text-xl font-medium">Medium business</h3>
        </div>
        <div className="bg-shipship-yellow p-6">
          <h3 className="text-xl font-medium">Large Enterprises</h3>
        </div>
      </div>
    </section>
  );
};

export default TransportModes;
