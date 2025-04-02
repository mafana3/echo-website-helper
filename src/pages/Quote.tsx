
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    shippingDate: '',
    additionalInfo: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Quote request submitted successfully! Our team will contact you shortly.');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">Get a Free Quote</h1>
          <p className="text-gray-600 mb-8">
            Fill out the form below to receive a customized shipping quote based on your specific needs.
          </p>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                />
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">Shipment Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="origin" className="block text-sm font-medium mb-1">
                  Origin (City, Country) *
                </label>
                <input
                  type="text"
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-sm font-medium mb-1">
                  Destination (City, Country) *
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="cargoType" className="block text-sm font-medium mb-1">
                  Cargo Type *
                </label>
                <select
                  id="cargoType"
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                >
                  <option value="">Select cargo type</option>
                  <option value="generalCargo">General Cargo</option>
                  <option value="hazardousMaterials">Hazardous Materials</option>
                  <option value="perishableGoods">Perishable Goods</option>
                  <option value="fragileItems">Fragile Items</option>
                  <option value="heavyEquipment">Heavy Equipment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="weight" className="block text-sm font-medium mb-1">
                  Approximate Weight (kg) *
                </label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="dimensions" className="block text-sm font-medium mb-1">
                  Dimensions (L x W x H)
                </label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                  placeholder="e.g., 100cm x 50cm x 30cm"
                />
              </div>
              
              <div>
                <label htmlFor="shippingDate" className="block text-sm font-medium mb-1">
                  Preferred Shipping Date
                </label>
                <input
                  type="date"
                  id="shippingDate"
                  name="shippingDate"
                  value={formData.shippingDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                placeholder="Any special requirements or questions?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="bg-shipship-yellow text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Request Quote
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
