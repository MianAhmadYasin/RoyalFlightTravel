import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      title: 'Discover World',
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
      <Helmet>
        <title>Royal Flight Travel - Premium Travel Agency & Luxury Holidays | UK</title>
        <meta name="description" content="Experience luxury travel with Royal Flight Travel. Premium flights, exclusive hotels, and tailored holiday packages. ATOL protected, ABTA member. Start your journey today!" />
        <meta name="keywords" content="luxury travel agency, premium flights UK, luxury holidays, travel packages, Royal Flight Travel, ATOL protected travel" />
        <link rel="canonical" href="https://royalflighttravel.co.uk" />
        <meta property="og:title" content="Royal Flight Travel - Premium Travel Agency & Luxury Holidays | UK" />
        <meta property="og:description" content="Discover luxury travel experiences with Royal Flight Travel. From premium flights to exclusive holiday packages, we create unforgettable journeys tailored to you." />
        <meta property="og:url" content="https://royalflighttravel.co.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://royalflighttravel.co.uk/hero-images/london.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Royal Flight Travel - Premium Travel Services" />
        <meta name="twitter:description" content="Experience luxury travel with Royal Flight Travel. Book premium flights, hotels, and tailored holiday packages." />
        <meta name="twitter:image" content="https://royalflighttravel.co.uk/hero-images/london.jpg" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet custom-pagination',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          loop={true}
          className="h-screen w-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax Effect */}
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading={idx === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ 
                      transformOrigin: 'center',
                    }}
                  />
                </motion.div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                
                {/* Animated Particles Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_25%)] animate-[pulse_4s_ease-in-out_infinite]"></div>

                {/* Content Container */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="relative z-20 w-full max-w-[90%] xl:max-w-7xl mx-auto px-4"
                >
                  <div className="flex flex-col items-start max-w-4xl mx-auto">
                    {/* Title with Creative Animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="mb-6 relative"
                    >
                      <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none"
                        style={{
                          background: 'linear-gradient(135deg, #FFD700 0%, #FFF5B8 50%, #FFD700 100%)',
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          animation: 'shine 3s linear infinite',
                        }}
                      >
                        {slide.title}
                      </h1>
                      <div className="absolute -bottom-2 left-0 w-24 h-1 bg-amber-400"></div>
                    </motion.div>

                    {/* Subtitle with Fade-In */}
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold mb-6 text-white/90 drop-shadow-2xl"
                    >
                      {slide.subtitle}
                    </motion.h2>

                    {/* Description with Gradient Border */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mb-10 p-6 rounded-2xl text-white/85 backdrop-blur-sm"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <p className="text-xl md:text-2xl leading-relaxed">
                        {slide.details}
                      </p>
                    </motion.div>

                    {/* CTA Buttons with Enhanced Animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-6"
                    >
                      <Link 
                        to="/contact" 
                        className="group relative overflow-hidden px-12 py-5 rounded-full text-lg font-bold text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #FFB938 0%, #FF8438 100%)',
                          boxShadow: '0 10px 30px -10px rgba(255, 185, 56, 0.5)',
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <span>Plan Your Journey</span>
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                            className="ml-2"
                          >
                            →
                          </motion.span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Link>
                      <Link 
                        to="/contact" 
                        className="group relative overflow-hidden px-12 py-5 rounded-full text-lg font-bold transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white/10 backdrop-blur-md"
                        style={{
                          border: '2px solid rgba(255,255,255,0.4)',
                        }}
                      >
                        <span className="relative z-10 text-white group-hover:text-blue-900">
                          Get a Quote
                        </span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-[128px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles for Pagination */}
        <style>{`
          .custom-pagination {
            width: 12px !important;
            height: 12px !important;
            background: rgba(255, 255, 255, 0.3) !important;
            border: 2px solid rgba(255, 255, 255, 0.5) !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
          }
          .custom-pagination.swiper-pagination-bullet-active {
            background: #FFD700 !important;
            border-color: #FFD700 !important;
            transform: scale(1.2) !important;
          }
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight" style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'shine 3s linear infinite'
            }}>Our Premium Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From luxury flights to exclusive accommodations, we provide comprehensive travel solutions 
              tailored to your unique preferences and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title + ' image'} 
                    loading="lazy" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 z-20 flex items-center"
                  >
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg">
                      {React.createElement(service.icon, { 
                        className: "h-6 w-6 text-blue-700" 
                      })}
                    </div>
                  </motion.div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button
                    className="inline-flex items-center text-blue-700 font-semibold text-sm sm:text-base group-hover:text-blue-900 transition-colors duration-300"
                    onClick={() => { setSelectedService(service); setIsModalOpen(true); }}
                  >
                    <span className="mr-2">Learn More</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="transform transition-transform duration-300"
                    >→</motion.span>
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-2 w-2 rounded-full bg-blue-600"
              />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex h-3 w-3 rounded-full bg-blue-500"
              />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex h-4 w-4 rounded-full bg-blue-400"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight" style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              animation: 'shine 3s linear infinite'
            }}>What Our Clients Say</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Trusted by travelers worldwide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-400 opacity-5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-400 to-amber-200 opacity-5 rounded-full -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Rating */}
                <div className="flex items-center mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-current transform group-hover:scale-110 transition-transform duration-300" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-blue-200 opacity-50">"</span>
                  <p className="relative text-gray-700 mb-6 sm:mb-8 italic leading-relaxed text-sm sm:text-base lg:text-lg">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <span className="text-blue-700 font-bold text-base sm:text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-blue-600 text-sm">{testimonial.location}</p>
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