
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const TransportModes = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define the base and expanded widths for each section
  const getColumnClass = (index: number) => {
    if (hoveredIndex === null) {
      return "transition-all duration-300 ease-in-out"; // All columns equal by default
    }
    
    if (index === hoveredIndex) {
      return "md:col-span-2 transition-all duration-300 ease-in-out"; // Expanded column
    }
    
    return "transition-all duration-300 ease-in-out"; // Normal column
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 bg-white">
      <div 
        className={`relative h-full min-h-[320px] ${getColumnClass(0)}`}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img 
          src="/lovable-uploads/e23a03b8-6b2b-4a8a-b4cf-982b7060c5e6.png" 
          alt="Transport modes showing airplane, ship, truck and train" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div 
        className={`bg-shipship-blue text-white p-8 flex flex-col justify-center ${getColumnClass(1)}`}
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
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
      
      <div 
        className={`bg-shipship-green text-white p-8 flex flex-col justify-between ${getColumnClass(2)}`}
        onMouseEnter={() => setHoveredIndex(2)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
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
      
      <div 
        className={`grid grid-rows-2 ${getColumnClass(3)}`}
        onMouseEnter={() => setHoveredIndex(3)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="bg-amber-200 p-8">
          <h3 className="text-xl font-medium">Medium business</h3>
          <p className="text-sm mt-2">Optimized solutions for growing companies</p>
        </div>
        <div className="bg-shipship-yellow p-8">
          <h3 className="text-xl font-medium">Large Enterprises</h3>
          <p className="text-sm mt-2">Enterprise-level logistics management</p>
        </div>
      </div>
    </section>
  );
};

export default TransportModes;
