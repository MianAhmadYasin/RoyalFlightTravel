import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-2 sm:p-3 rounded-xl shadow-md 
                             group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <Plane className="h-6 w-6 sm:h-8 sm:w-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent leading-tight">
                  Royal Flight Travel
                </span>
                <span className="text-xs sm:text-sm text-gray-600 font-medium hidden sm:block">Premium Travel Services</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-end items-center space-x-1 xl:space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 xl:px-5 py-2 xl:py-2.5 rounded-lg font-medium text-sm xl:text-base transition-all duration-300
                    ${location.pathname === item.path
                      ? 'text-white'
                      : 'text-gray-700 hover:text-blue-700'
                    }`}
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6 text-blue-900" /> : 
              <Menu className="h-6 w-6 text-blue-900" />
            }
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-[64px] sm:top-[80px] bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg z-50"
            >
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-base transition-all duration-300
                        ${location.pathname === item.path
                          ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-md'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-lg">
                        <Plane className={`h-5 w-5 ${location.pathname === item.path ? 'text-white' : 'text-blue-700'}`} />
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;