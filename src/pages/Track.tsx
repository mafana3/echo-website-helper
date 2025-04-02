
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tracking logic would go here
    alert(`Tracking shipment with number: ${trackingNumber}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-8 text-center">Track Your Shipment</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="tracking" className="block text-sm font-medium mb-2">
                  Enter your tracking number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                    placeholder="e.g. SS12345678"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-shipship-green text-white p-2 rounded-md"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Enter the tracking number provided in your shipping confirmation email. 
                Track multiple shipments by separating tracking numbers with a comma.
              </p>
              
              <button 
                type="submit"
                className="w-full bg-shipship-yellow text-black font-medium py-3 rounded-md hover:bg-yellow-400 transition-colors"
              >
                Track Shipment
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Track;
