
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted successfully!');
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our shipping services? Our team is here to help you find the right solution for your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-shipship-yellow p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">275 Technology Dr, Syracuse, Commercial 13224</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-shipship-yellow p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">info@ship-ship.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-shipship-yellow p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600">+1-315-937-01</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
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
                    Email Address
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
                    Company (Optional)
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-shipship-green"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-shipship-yellow text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
