import React from 'react';
import { Plane, Mail, MapPin, Clock, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Plane className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Royal Flight Travel</h3>
                <p className="text-sm text-blue-200">Premium Travel Services</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner for luxury travel experiences worldwide. We create unforgettable journeys tailored to your dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Flight Bookings</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Hotel Reservations</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Holiday Packages</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Travel Insurance</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Visa Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200 text-sm">info@royalflighttravel.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-300 mt-1" />
                <span className="text-blue-200 text-sm">123 Premium Street,<br />London, UK W1A 0AA</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-300" />
                <div>
                  <p className="text-blue-200 text-sm">Mon - Fri: 9:00 - 18:00</p>
                  <p className="text-blue-200 text-sm">Sat: 10:00 - 16:00</p>
                  <p className="text-blue-200 text-sm">Sun: Closed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200 text-sm">24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Royal Flight Travel. All rights reserved. | 
            <span className="ml-1">ATOL Protected | ABTA Member</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;