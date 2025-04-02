
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-shipship-yellow pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center relative">
                <div className="absolute w-8 h-1 bg-black"></div>
                <div className="absolute w-1 h-8 bg-black"></div>
                <div className="w-12 h-12 border-2 border-black rounded-full"></div>
              </div>
              <span className="ml-2 text-2xl font-bold">Ship-<br/>ship®</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-2">Company Links</h3>
              <ul className="space-y-1">
                <li><Link to="/about" className="text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-sm">Contact Us</Link></li>
                <li><Link to="/track" className="text-sm">Track your Shipment</Link></li>
                <li><Link to="/faq" className="text-sm">FAQs</Link></li>
                <li><Link to="/blog" className="text-sm">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t border-black/20">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-xs mb-1">275 Technology Dr, Syracuse</p>
            <p className="text-xs mb-1">Commercial 13224</p>
            <p className="text-xs mb-4 md:mb-0">info@ship-ship.com</p>
            <p className="text-xs">+1-315-937-01</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link to="#" aria-label="Facebook">
                <Facebook size={16} />
              </Link>
              <Link to="#" aria-label="Twitter">
                <Twitter size={16} />
              </Link>
              <Link to="#" aria-label="Instagram">
                <Instagram size={16} />
              </Link>
            </div>
            <div className="flex space-x-4 text-xs">
              <Link to="/privacy" className="text-xs">Privacy Policy</Link>
              <Link to="/terms" className="text-xs">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
