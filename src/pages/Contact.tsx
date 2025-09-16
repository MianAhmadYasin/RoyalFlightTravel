import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  MapPin, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  MessageCircle
} from 'lucide-react';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'GAguWvpAoTgDmutFg'; // Replace this with your actual public key
const EMAILJS_SERVICE_ID = 'service_yrwi1hi';
const EMAILJS_TEMPLATE_ID = 'template_qw2og2t';

const Contact: React.FC = () => {
  useEffect(() => {
    // Initialize EmailJS
    try {
      console.log('Initializing EmailJS...');
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Starting email send...');
      
      const templateParams = {
        fullName: formData.name,
        email: formData.email,
        service: formData.service,
        destination: formData.destination || "Not specified",
        message: formData.message
      };

      console.log('Template params:', templateParams);

      console.log('Sending email with service:', EMAILJS_SERVICE_ID);
      console.log('Template ID:', EMAILJS_TEMPLATE_ID);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email response:', response);

      if (response.status === 200) {
        console.log('Email sent successfully');
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          destination: '',
          message: ''
        });

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }
    } catch (err: any) {
      console.error('Detailed email error:', {
        error: err,
        message: err.message,
        text: err.text,
        name: err.name
      });
      setError(`Failed to send message: ${err.message || 'Unknown error'}. Please try again later or contact us directly at info@royalflighttravel.co.uk`);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: '123 Premium Street, London, UK W1A 0AA',
      action: 'Get Directions'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@royalflighttravel.co.uk',
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9:00-18:00, Sat: 10:00-16:00',
      action: 'Contact Us'
    }
  ];

  const services = [
    'Flight Bookings',
    'Hotel Reservations',
    'Holiday Packages',
    'Business Travel',
    'Luxury Travel',
    'Group Travel',
    'Travel Insurance',
    'Visa Services',
    'Other'
  ];

  return (
    <div>
      <Helmet>
        <title>Contact Us | Royal Flight Travel - Premium Travel Services</title>
        <meta name="description" content="Get in touch with Royal Flight Travel for personalized travel planning, flight bookings, and luxury holiday packages. Visit our office in London or contact us online." />
        <meta name="keywords" content="contact Royal Flight Travel, travel agency London, luxury travel planning, holiday bookings UK" />
        <link rel="canonical" href="https://royalflighttravel.co.uk/contact" />
        <meta property="og:title" content="Contact Royal Flight Travel - Premium Travel Services in London" />
        <meta property="og:description" content="Reach out to our travel experts for personalized travel planning and premium holiday packages. Visit our London office or contact us online." />
        <meta property="og:url" content="https://royalflighttravel.co.uk/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg')`
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Ready to plan your next adventure? Our travel experts are here to help you create the perfect journey. 
            Contact us today and let's make your travel dreams come true.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We're here to help you plan your perfect journey. Choose the most convenient way to connect with our travel experts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-5 rounded-xl w-20 h-20 mx-auto mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <info.icon className="h-10 w-10 text-blue-700 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">{info.details}</p>
                    <button 
                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition-colors duration-300"
                    >
                      <span>{info.action}</span>
                      <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been sent successfully. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Destination
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Where would you like to go?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                      placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                      isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-800 hover:to-blue-900'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <MessageCircle className="h-6 w-6 mr-3 text-blue-300" />
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3 text-blue-100">
                    <li>• Personalized travel planning</li>
                    <li>• 24/7 customer support</li>
                    <li>• ATOL protected bookings</li>
                    <li>• Exclusive deals and upgrades</li>
                    <li>• Expert destination knowledge</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Globe className="h-6 w-6 mr-3 text-blue-300" />
                    Popular Destinations
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-blue-100 text-sm">
                    <span>• Dubai & UAE</span>
                    <span>• Thailand</span>
                    <span>• Maldives</span>
                    <span>• Japan</span>
                    <span>• USA & Canada</span>
                    <span>• Europe</span>
                    <span>• Australia</span>
                    <span>• Caribbean</span>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">24/7 Support</h4>
                  <p className="text-blue-100 text-sm mb-3">
                    Need assistance while traveling? Our support team is available 24/7 through email.
                  </p>
                  <p className="text-lg font-semibold">info@royalflighttravel.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;