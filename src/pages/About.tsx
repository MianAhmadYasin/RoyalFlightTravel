import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Award, 
  Users, 
  Globe, 
  Shield,
  Star
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Travelers' },
    { number: '150+', label: 'Global Destinations' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service, ensuring that each journey exceeds expectations.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Our dedicated travel consultants provide personalized attention to create tailor-made experiences.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'ATOL protected bookings and comprehensive travel insurance provide complete peace of mind.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive partnerships worldwide ensure exclusive access to premium accommodations and experiences.'
    }
  ];



  return (
    <div>
      <Helmet>
        <title>About Us | Royal Flight Travel - Premium Travel Agency London</title>
        <meta name="description" content="Founded in 2014, Royal Flight Travel is a leading luxury travel agency in London. Discover our story, values, and commitment to excellence in travel services." />
        <meta name="keywords" content="luxury travel agency London, Royal Flight Travel history, ATOL protected travel, premium travel services UK" />
        <link rel="canonical" href="https://royalflighttravel.co.uk/about" />
        <meta property="og:title" content="About Royal Flight Travel - Leading Luxury Travel Agency in London" />
        <meta property="og:description" content="Discover the story of Royal Flight Travel, your trusted partner in luxury travel since 2014. ATOL protected, ABTA member, offering premium travel services." />
        <meta property="og:url" content="https://royalflighttravel.co.uk/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg')`
          }}
        ></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Royal Flight Travel</h1>
          <p className="text-xl text-blue-200 leading-relaxed">
            Your trusted partner in luxury travel experiences since 2014. 
            We transform journeys into unforgettable memories with our commitment to excellence and personalized service.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014 by a team of passionate travel professionals, Royal Flight Travel began with a simple mission: 
                  to redefine luxury travel by providing unparalleled personal service and exclusive experiences.
                </p>
                <p>
                  Over the years, we have built strong relationships with premium airlines, luxury hotels, and exclusive 
                  service providers worldwide. This network allows us to offer our clients access to experiences and 
                  amenities that are simply not available through standard booking channels.
                </p>
                <p>
                  Today, we are proud to serve discerning travelers who value quality, authenticity, and attention to detail. 
                  Every journey we plan is crafted with care, ensuring that each client's individual preferences and dreams 
                  are brought to life.
                </p>
              </div>
            </div>
            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-xl"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg')`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure we deliver exceptional service to every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-700 p-3 rounded-full">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Accreditations & Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <Shield className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ATOL Protected</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Award className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ABTA Protected</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <Star className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel Trust Association</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;