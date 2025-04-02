
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 relative">
      <div className="absolute inset-0 bg-gray-200 z-0">
        <img 
          src="/placeholder.svg" 
          alt="Shipping company office backdrop" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Businesses of All Sizes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden mr-4">
                <img src="/placeholder.svg" alt="Jane Doe" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  "We rely on Ship-Ship's website FCL Shipping and dedicated account management to ensure our manufacturing supplies arrive on time."
                </p>
                <p className="font-bold text-sm">- Jane Doe, Logistics Manager,</p>
                <p className="text-xs text-gray-600">GreenTech Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden mr-4">
                <img src="/placeholder.svg" alt="Mike Smith" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  "Ship-Ship has been a game-changer for our small business. Their LCL options made international trade accessible to smaller customers globally."
                </p>
                <p className="font-bold text-sm">- Mike Smith, Owner, Cozy Crafts Boutique</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden mr-4">
                <img src="/placeholder.svg" alt="Sandra Chen" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  "As a multinational corporation with high-volume shipping needs, our customized logistics plan has been instrumental in expanding our global reach."
                </p>
                <p className="font-bold text-sm">- Sandra Chen, Director of Supply Chain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
