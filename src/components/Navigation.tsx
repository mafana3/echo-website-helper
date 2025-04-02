
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="mr-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-shipship-green rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">SS</span>
            </div>
            <span className="ml-2 font-bold text-xl">Ship-ship</span>
          </div>
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-sm font-medium">Home</Link>
        <Link to="/about" className="text-sm font-medium">About us</Link>
        <Link to="/track" className="text-sm font-medium">Track shipment</Link>
        <Link to="/contact" className="text-sm font-medium">Contact us</Link>
        <Link to="/faq" className="text-sm font-medium">FAQ</Link>
      </div>
      
      <div>
        <Link to="/contact" className="bg-shipship-yellow px-4 py-2 rounded-md text-sm font-medium">Get in touch</Link>
      </div>
    </nav>
  );
};

export default Navigation;
