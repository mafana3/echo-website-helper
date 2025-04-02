
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-shipship-yellow pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center mb-6">
              <div className="w-16 h-16 border-4 border-black rounded-full flex items-center justify-center relative">
                <div className="absolute w-8 h-1 bg-black"></div>
                <div className="absolute w-1 h-8 bg-black"></div>
                <div className="w-12 h-12 border-2 border-black rounded-full"></div>
              </div>
              <span className="ml-3 text-2xl font-bold">Ship-<br/>ship®</span>
            </Link>
            <p className="text-sm max-w-xs">
              Your trusted partner for global shipping solutions since 2010.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-sm">Contact Us</Link></li>
                <li><Link to="/track" className="text-sm">Track your Shipment</Link></li>
                <li><Link to="/faq" className="text-sm">FAQs</Link></li>
                <li><Link to="/blog" className="text-sm">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services/air-freight" className="text-sm">Air Freight</Link></li>
                <li><Link to="/services/ocean-fcl" className="text-sm">Ocean FCL</Link></li>
                <li><Link to="/services/ocean-lcl" className="text-sm">Ocean LCL</Link></li>
                <li><Link to="/services/customs" className="text-sm">Customs Clearance</Link></li>
                <li><Link to="/services/cargo-insurance" className="text-sm">Cargo Insurance</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-sm">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-sm">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-sm">Cookie Policy</Link></li>
                <li><Link to="/compliance" className="text-sm">Compliance</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 border-t border-black/20">
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="text-xs mb-1">275 Technology Dr, Syracuse</p>
            <p className="text-xs mb-1">Commercial 13224</p>
            <p className="text-xs mb-1">info@ship-ship.com</p>
            <p className="text-xs">+1-315-937-0150</p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link to="#" aria-label="Facebook" className="bg-black rounded-full p-2">
                <Facebook size={16} className="text-shipship-yellow" />
              </Link>
              <Link to="#" aria-label="Twitter" className="bg-black rounded-full p-2">
                <Twitter size={16} className="text-shipship-yellow" />
              </Link>
              <Link to="#" aria-label="Instagram" className="bg-black rounded-full p-2">
                <Instagram size={16} className="text-shipship-yellow" />
              </Link>
            </div>
            <div className="flex space-x-6 text-xs">
              <Link to="/privacy" className="text-xs">Privacy Policy</Link>
              <Link to="/terms" className="text-xs">Terms of Use</Link>
              <span className="text-xs">© 2023 Ship-ship. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
