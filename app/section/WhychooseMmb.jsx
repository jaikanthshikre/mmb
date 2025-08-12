'use client'

import React, { useState, useEffect } from 'react';
import { 
  FaShieldAlt, 
  FaBolt, 
  FaGift, 
  FaHeadset, 
  FaMobile, 
  FaTrophy,
  FaClock,
  FaUsers,
  FaStar,
  FaRocket,
  FaCheckCircle,
  FaFire,
  FaCrown,
  FaHeart
} from 'react-icons/fa';

const WhyChooseMMB = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    // detect mobile on mount
    if (window.innerWidth < 640) {
      setIsMobile(true);
    }

    // intersection observer to trigger animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // animate numbers
          const targets = [50, 99.9, 4.8, 24];
          targets.forEach((target, idx) => {
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setAnimatedStats(prev => {
                const copy = [...prev];
                copy[idx] = parseFloat(current.toFixed(1));
                return copy;
              });
            }, 25);
          });
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    const el = document.getElementById('why-choose-mmb');
    if (el) observer.observe(el);

    // auto-rotate features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(featureInterval);
    };
  }, []);

  const show = isVisible || isMobile;

  const features = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Bank-Level Security",
      description: "Advanced 256-bit SSL encryption protects all your transactions and personal data",
      color: "from-red-400 to-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-red-100",
      hoverColor: "hover:from-red-100 hover:to-red-200",
      accentColor: "text-red-500",
      glowColor: "shadow-red-500/20",
      badge: "Verified"
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Lightning Fast Payouts",
      description: "Instant UPI withdrawals processed within 2 minutes, fastest in the industry",
      color: "from-orange-400 to-yellow-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-100",
      hoverColor: "hover:from-orange-100 hover:to-yellow-200",
      accentColor: "text-orange-500",
      glowColor: "shadow-orange-500/20",
      badge: "2 Min"
    },
    {
      icon: <FaGift className="text-2xl" />,
      title: "Mega Bonus Rewards",
      description: "Up to 10% daily recharge bonus + welcome bonus up to ₹5000 for new players",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      hoverColor: "hover:from-pink-100 hover:to-rose-200",
      accentColor: "text-pink-500",
      glowColor: "shadow-pink-500/20",
      badge: "₹5000"
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "VIP Customer Care",
      description: "Dedicated support team available 24/7 via WhatsApp, call, and live chat",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      hoverColor: "hover:from-green-100 hover:to-emerald-200",
      accentColor: "text-green-500",
      glowColor: "shadow-green-500/20",
      badge: "Live"
    },
    {
      icon: <FaMobile className="text-2xl" />,
      title: "Premium Mobile App",
      description: "Optimized for all devices with smooth gameplay and lightning-fast loading",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      hoverColor: "hover:from-blue-100 hover:to-cyan-200",
      accentColor: "text-blue-500",
      glowColor: "shadow-blue-500/20",
      badge: "4.8★"
    },
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "Exclusive Game Library",
      description: "Access premium games: Aviator, Live Casino, Slots, Rummy with best odds",
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
      hoverColor: "hover:from-purple-100 hover:to-indigo-200",
      accentColor: "text-purple-500",
      glowColor: "shadow-purple-500/20",
      badge: "Premium"
    }
  ];

  const stats = [
    { 
      number: animatedStats[0], 
      suffix: "K+", 
      label: "Active Players", 
      icon: <FaUsers />, 
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    { 
      number: animatedStats[1], 
      suffix: "%", 
      label: "Uptime", 
      icon: <FaClock />, 
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    { 
      number: animatedStats[2], 
      suffix: "/5", 
      label: "User Rating", 
      icon: <FaStar />, 
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    { 
      number: animatedStats[3], 
      suffix: "/7", 
      label: "Support", 
      icon: <FaHeadset />, 
      color: "text-red-500",
      bgColor: "bg-red-50"
    }
  ];

  const testimonials = [
    { name: "Rajesh K.", text: "Best platform! Fast withdrawals and great support.", rating: 5 },
    { name: "Priya M.", text: "Love the daily bonuses and secure transactions.", rating: 5 },
    { name: "Amit S.", text: "Amazing gaming experience, highly recommended!", rating: 5 }
  ];

  return (
    <section id="why-choose-mmb" className="bg-white py-10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm border border-red-200 rounded-full px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300">
            <FaCrown className="text-red-500 mr-2 text-sm animate-bounce" />
            <span className="text-red-600 font-bold text-sm">India's #1 Betting Platform</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black md:mb-6 mb-3 leading-tight">
            <span className="block text-3xl md:text-5xl bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mt-2">
              Why Choose MMB?
            </span>
          </h2>
          <p className="text-gray-600 md:max-w-3xl mx-auto md:text-lg leading-relaxed mb-8">
            Experience the ultimate betting platform trusted by over 50,000 players across India.{' '}
            <span className="text-red-500 font-semibold">Fast, secure, and rewarding</span> – everything you need for the perfect gaming experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <FaCheckCircle className="text-green-500 mr-2 text-sm" />
              <span className="text-green-700 font-medium text-sm">Licensed & Regulated</span>
            </div>
            <div className="flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2">
              <FaShieldAlt className="text-blue-500 mr-2 text-sm" />
              <span className="text-blue-700 font-medium text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center bg-purple-50 border border-purple-200 rounded-full px-4 py-2">
              <FaShieldAlt className="text-purple-500 mr-2 text-sm" />
              <span className="text-purple-700 font-medium text-sm">Premium Service</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative ${stat.bgColor} border-2 border-gray-100 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden`}
              onMouseEnter={() => setHoveredCard(`stat-${i}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className={`${stat.color} text-3xl mb-3 flex justify-center group-hover:scale-125 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
                  {stat.number.toFixed(
                    stat.suffix.includes('%') || stat.suffix.includes('/') ? 1 : 0
                  )}
                  {stat.suffix}
                </div>
                <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
              {hoveredCard === `stat-${i}` && (
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-2xl animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-400 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative ${feature.bgColor} border-2 border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl ${feature.glowColor} hover:scale-105 cursor-pointer overflow-hidden`}
              onMouseEnter={() => {
                setHoveredCard(idx);
                setActiveFeature(idx);
              }}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 group-hover:from-white/80 group-hover:to-gray-50/60 transition-all duration-500 rounded-3xl" />
              <div className="absolute top-4 right-4">
                <span className={`bg-gradient-to-r ${feature.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {feature.badge}
                </span>
              </div>
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold text-gray-800 mb-4 group-hover:${feature.accentColor} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                {activeFeature === idx && (
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${feature.color} rounded-full animate-pulse`} />
                  </div>
                )}
              </div>
              {hoveredCard === idx && (
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-20 animate-pulse`} />
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={`mb-16 transform transition-all duration-1000 delay-600 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            What Our Players Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <FaStar key={j} className="text-yellow-400 text-sm mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{t.text}"</p>
                <p className="font-semibold text-red-500 text-sm">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`relative bg-[#FB6765] rounded-3xl p-12 text-center text-white overflow-hidden transform transition-all duration-1000 delay-800 ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-6 left-6 w-24 h-24 border-2 border-white rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-6 right-6 w-20 h-20 border-2 border-white rounded-full animate-spin-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 mb-6 hover:scale-105 transition-transform duration-300">
              <FaFire className="mr-2 text-lg animate-bounce" />
              <span className="font-bold">Join the Winners Circle</span>
            </div>
            <h3 className="text-2xl md:text-5xl font-black mb-6 leading-tight">
              Ready to Experience<br/>
              <span className="text-yellow-300">Premium Betting?</span>
            </h3>
            <p className="md:text-xl mb-8 md:max-w-3xl mx-auto opacity-95 leading-relaxed">
              Join over 50,000 satisfied players and start winning with MMB's premium platform.{' '}
              <span className="font-bold text-yellow-300">Get ₹5000 welcome bonus</span> on your first deposit!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8">
              <button className="group relative bg-white text-red-500 font-bold py-4 px-7 rounded-2xl hover:bg-yellow-300 hover:text-red-600 transition-all duration-300 transform hover:scale-110 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <FaRocket className="mr-2 group-hover:animate-bounce" />
                  Register & Get Bonus
                </div>
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span>2,847 players online now</span>
              </div>
              <div className="flex items-center">
                <FaHeart className="text-red-300 mr-2 animate-pulse" />
                <span>₹12,45,678 won today</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
};

export default WhyChooseMMB;
