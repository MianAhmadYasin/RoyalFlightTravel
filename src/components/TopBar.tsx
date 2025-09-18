import React from 'react';
import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-2 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        {/* Contact Information */}
        <div className="flex flex-wrap items-center space-x-4 sm:space-x-6 mb-1 sm:mb-0">
          <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-300">
            <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>info@royalflighttravel.com</span>
          </div>
          {/* <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-300">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>+44 20 7123 4567</span>
          </div> */}
          <div className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-300">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>London, UK</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="text-blue-200 hidden sm:inline">Follow us:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-300 transform hover:scale-110"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors duration-300 transform hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;