import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { 
  Plane, 
  Hotel, 
  MapPin, 
  Shield, 
  Award, 
  Users,
  Globe,
  Star
} from 'lucide-react';

const Home: React.FC = () => {
  type ServiceDetails = {
    features: string[];
    benefits: string[];
  };

  type ServiceDetailsMap = {
    [key: string]: ServiceDetails;
  };

  type Service = {
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
  };

  const services: Service[] = [
    {
      icon: Plane,
      title: 'Flight Bookings',
      description: 'Premium flight bookings with exclusive deals on business and first-class travel worldwide.',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg',
    },
    {
      icon: Hotel,
      title: 'Luxury Hotels',
      description: 'Handpicked luxury accommodations and boutique hotels for an unforgettable stay.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    },
    {
      icon: MapPin,
      title: 'Holiday Packages',
      description: 'Curated travel packages combining flights, hotels, and exclusive experiences.',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
    },
  ];

  const [selectedService, setSelectedService] = React.useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const features = [
  { icon: Shield, title: '24/7 Support', description: 'Round-the-clock customer service' },
  { icon: Award, title: 'ATOL Protected', description: 'Your bookings are fully protected' },
  { icon: Users, title: '10+ Years Experience', description: 'Trusted by thousands of travelers' },
  { icon: Globe, title: 'Global Network', description: 'Worldwide travel destinations' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      text: 'Royal Flight Travel made our honeymoon absolutely perfect. Their attention to detail and personalized service exceeded all expectations.',
      rating: 5
    },
    {
      name: 'David Thompson',
      location: 'Manchester, UK',
      text: 'Professional, reliable, and always going the extra mile. I would not book my business trips with anyone else.',
      rating: 5
    },
    {
      name: 'Emma Johnson',
      location: 'Edinburgh, UK',
      text: 'From booking to return, everything was seamless. The luxury accommodations they arranged were absolutely stunning.',
      rating: 5
    }
  ];

  const heroSlides = [
    {
      image: '/hero-images/london.jpg',
      title: 'Discover London',
      subtitle: 'Experience the vibrant heart of the UK with iconic landmarks and world-class culture.',
      details: 'From the historic Tower Bridge to the bustling West End, London offers endless adventures.'
    },
    {
      image: '/hero-images/bigben.jpg',
      title: 'Big Ben & Parliament',
      subtitle: 'Witness the timeless elegance of Big Ben and the Houses of Parliament.',
      details: 'A symbol of British heritage, perfect for history lovers and city explorers.'
    },
    {
      image: '/hero-images/countryside.jpg',
      title: 'UK Countryside',
      subtitle: 'Escape to the serene landscapes of the English countryside.',
      details: 'Rolling hills, charming villages, and tranquil nature await your discovery.'
    },
    {
      image: '/hero-images/towerbridge.jpg',
      title: 'Tower Bridge',
      subtitle: 'Marvel at the architectural beauty of London’s iconic Tower Bridge.',
      details: 'A must-see for every visitor, blending history and modernity.'
    }
  ];

  const serviceDetails: ServiceDetailsMap = {
    'Flight Bookings': {
      features: [
        'Access to exclusive business and first-class deals',
        'Flexible ticket options and upgrades',
        '24/7 travel support and itinerary management',
        'Priority check-in and lounge access',
        'Multi-airline and multi-city bookings',
      ],
      benefits: [
        'Save time and money with our expert fare search',
        'Enjoy a seamless booking experience',
        'Travel with confidence and comfort',
      ],
    },
    'Luxury Hotels': {
      features: [
        'Handpicked 5-star and boutique hotels',
        'VIP amenities and room upgrades',
        'Personalized welcome gifts',
        'Flexible cancellation policies',
        'Exclusive rates and offers',
      ],
      benefits: [
        'Stay in style and comfort',
        'Enjoy unique experiences at every destination',
        'Relax knowing every detail is taken care of',
      ],
    },
    'Holiday Packages': {
      features: [
        'Tailored packages for families, couples, and solo travelers',
        'All-inclusive options available',
        'Excursions, tours, and activities included',
        'Flexible travel dates and durations',
        'Expert local guides and support',
      ],
      benefits: [
        'Stress-free planning and booking',
        'Unforgettable memories and experiences',
        'Best value for your travel budget',
      ],
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-screen w-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-screen flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20 flex flex-col items-center justify-center h-full w-full"
                >
                  <div className="text-center text-white max-w-5xl mx-auto px-8 py-16"
                    style={{
                      background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
                      borderRadius: '2.5rem',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      outline: '1px solid rgba(255, 215, 0, 0.08)',
                    }}
                  >
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight drop-shadow-xl tracking-tight text-white"
                      style={{
                        letterSpacing: '-2px',
                        background: 'linear-gradient(to right, #ffffff, #ffd700)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-3xl md:text-4xl font-semibold mb-6 text-amber-400 drop-shadow-lg"
                    >
                      {slide.subtitle}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                    >
                      {slide.details}
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
                    >
                      <Link 
                        to="/contact" 
                        className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-400 text-white font-bold py-5 px-12 rounded-full text-lg shadow-xl border-0 text-center transform transition-all duration-300 hover:scale-105"
                      >
                        <span className="relative z-10">Plan Your Journey</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Link>
                      <Link 
                        to="/contact" 
                        className="group relative overflow-hidden border-2 border-white text-white font-bold py-5 px-12 rounded-full text-lg shadow-xl text-center transform transition-all duration-300 hover:scale-105"
                      >
                        <span className="relative z-10 group-hover:text-blue-900">Get a Quote</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From luxury flights to exclusive accommodations, we provide comprehensive travel solutions 
              tailored to your unique preferences and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title + ' image'} 
                    loading="lazy" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl mr-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                      {React.createElement(service.icon, { 
                        className: "h-8 w-8 text-blue-700 transform group-hover:scale-110 transition-transform duration-300" 
                      })}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button
                    className="inline-flex items-center text-blue-700 font-semibold group-hover:text-blue-900 transition-colors duration-300"
                    onClick={() => { setSelectedService(service); setIsModalOpen(true); }}
                  >
                    <span className="mr-2">Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Royal Flight Travel?</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of your travel experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.createElement(feature.icon, { className: "h-8 w-8 text-white mx-auto" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6" style={{
              background: 'linear-gradient(to right, #1e40af, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by travelers worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current transform group-hover:scale-110 transition-transform duration-300" />
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-700 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/hero-images/london.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-blue-900/30"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your <span className="text-amber-400">Dream Journey</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Contact our travel experts today and let us create the perfect travel experience for you. 
            Your dream destination awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-400 text-white font-semibold py-5 px-12 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Start Planning Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            <Link 
              to="/contact" 
              className="group relative overflow-hidden border-2 border-white/80 text-white font-semibold py-5 px-12 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-blue-900">Get Custom Quote</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust & Partners Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Accreditation Logos */}
              <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center tracking-tight">Accredited By</h3>
                <div className="flex items-center justify-center gap-12">
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-100 rounded-xl p-3 flex items-center justify-center shadow-md mb-2">
                      <img 
                        src="/abta-logo.png" 
                        alt="ABTA Logo" 
                        className="h-14 w-32 object-contain drop-shadow-lg"
                        loading="lazy" 
                      />
                    </div>
                    <span className="text-xs text-gray-600 mt-1">The Travel Association</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-gray-300 via-gray-400 to-gray-100 rounded-xl p-3 flex items-center justify-center shadow-md mb-2">
                      <img 
                        src="/iata-logo_white.png" 
                        alt="IATA Logo" 
                        className="h-14 w-32 object-contain drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs text-gray-600 mt-1">International Air Transport Association</span>
                  </div>
                </div>
              </div>
              {/* Ready to Get Started */}
              <div className="bg-blue-900 rounded-2xl shadow-xl p-10 text-white flex flex-col items-center justify-center">
                <div className="bg-white rounded-full p-2 mb-6 shadow-lg">
                  <img 
                    src="/hero-images/london.jpg" 
                    alt="Travel Icon" 
                    className="w-16 h-16 object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-3xl font-extrabold mb-3 text-center tracking-tight">Ready to Get Started With Vacations!</h3>
                <p className="text-blue-100 mb-6 text-center text-lg">Let us handle all the details of your dream getaway</p>
                <Link to="/contact" className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center shadow-xl">
                  <span>Plan Your Trip</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              {/* Testimonial */}
              <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-center">
                <div className="bg-blue-100 rounded-full p-2 mb-4 shadow-lg">
                  <img 
                    src="/hero-images/countryside.jpg" 
                    alt="Royal Flight Travel Logo" 
                    className="h-12 w-12 object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 tracking-tight mb-2">Royal Flight Travel</h3>
                <blockquote className="text-gray-700 italic mb-4 text-lg text-center">
                  "Your journey is our expertise – we create unforgettable travel experiences."
                </blockquote>
                <div className="flex mt-4 space-x-4">
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-900">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-4 sm:p-8 relative animate-fade-in" style={{ maxHeight: '90vh', overflow: 'hidden' }}>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold z-10"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center overflow-y-auto" style={{ maxHeight: '75vh', width: '100%' }}>
              <img src={selectedService.image} alt={selectedService.title + ' image'} className="w-full h-56 object-cover rounded-xl mb-6 shadow-lg" />
              <div className="bg-blue-100 p-4 rounded-full mb-4 shadow">
                {React.createElement(selectedService.icon, { className: "h-10 w-10 text-blue-700" })}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">{selectedService.title}</h3>
              <p className="text-gray-700 mb-6 text-center text-lg">{selectedService.description}</p>
              <div className="w-full mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">What's Included:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {serviceDetails[selectedService.title]?.features.map((feature, idx) => (
                    <li key={idx} className="mb-1 flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Benefits:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {serviceDetails[selectedService.title]?.benefits.map((benefit, idx) => (
                    <li key={idx} className="mb-1 flex items-start">
                      <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pb-4">
                <Link
                  to="/contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-xl text-center"
                  style={{ textDecoration: 'none' }}
                  onClick={() => setIsModalOpen(false)}
                >
                  Schedule/Book Now
                </Link>
                <button
                  className="text-blue-700 font-semibold hover:text-blue-900 transition-colors duration-300 underline py-3 px-8 rounded-lg text-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;