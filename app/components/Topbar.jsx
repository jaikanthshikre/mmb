'use client'
import React, { useState, useEffect } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaWallet, 
  FaBell, 
  FaGift, 
  FaHeadset, 
  FaSignInAlt,
  FaUserPlus,
  FaHome,
  FaGamepad,
  FaFire,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaStar,
  FaPhoneAlt
} from 'react-icons/fa';

const BettingTopbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [notifications, setNotifications] = useState(3);

  // Simulate balance animation
  useEffect(() => {
    let balance = 0;
    const target = 15750;
    const increment = target / 50;
    const timer = setInterval(() => {
      balance += increment;
      if (balance >= target) {
        balance = target;
        clearInterval(timer);
      }
      setCurrentBalance(Math.floor(balance));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Home', icon: <FaHome />, active: true },
    { name: 'Live Casino', icon: <FaGamepad />, badge: 'HOT' },
    { name: 'Promotions', icon: <FaGift />, badge: 'NEW' },
     { name: 'Games', icon: <FaGamepad />, badge: 'NEW' }
  ];

  return (
    <div className="relative">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-9">
            <div className="flex  items-center space-x-2">
              <FaPhoneAlt className="text-[#FB6765]" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-400" />
              <span>WhatsApp Support</span>
            </div>
           {/*  <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#FB6765]" />
              <span>support@betting.com</span>
            </div> */}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <FaStar className="text-yellow-400" />
              <span>4.9/5 Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>24/7 Live Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#FB6765] via-[#FF7B79] to-[#FB6765] shadow-2xl relative overflow-visible">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 hover:bg-white/30 transition-all duration-300">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <FaFire className="text-[#FB6765] text-xl" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">MMB</h1>
                <p className="text-xs text-white/80 -mt-1">Premium Betting</p>
              </div>
            </div>

            {/* Desktop Navigation (≥ md) */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    item.active
                      ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span
                      className={`px-2 py-1 text-xs font-bold rounded-full ${
                        item.badge === 'HOT'
                          ? 'bg-orange-500 text-white'
                          : 'bg-green-500 text-white'
                      } animate-pulse`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* User Section & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              {/* Balance */}
              <div className="hidden md:flex bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 items-center space-x-2">
                <FaWallet className="text-white" />
                <div>
                  <p className="text-xs text-white/80">Balance</p>
                  <p className="text-sm font-bold text-white">
                    ₹{currentBalance.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300 relative">
                  <FaBell className="text-white" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>

              {/* User Menu */}
             {/*  <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <FaUser className="text-[#FB6765]" />
                  </div>
                  <span className="hidden md:block text-white font-semibold">
                    User
                  </span>
                  <FaChevronDown className="text-white text-xs" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl py-2 z-50 border border-gray-100">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-bold text-gray-800">User</p>
                      <p className="text-sm text-gray-600">User@email.com</p>
                      <div className="flex items-center mt-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-xs" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600 ml-2">VIP Member</span>
                      </div>
                    </div>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-50">My Profile</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-50">Transaction History</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-50">Bonuses</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-50">Settings</a>
                    <div className="border-t border-gray-100 mt-2">
                      <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50">Logout</a>
                    </div>
                  </div>
                )}
              </div>
 */}
              {/* Support Button */}
              <button className="hidden md:flex bg-white text-[#FB6765] px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg items-center space-x-2">
                <FaHeadset/>
                <span >Support</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                {isMobileMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Balance */}
              <div className="bg-gradient-to-r from-[#FB6765] to-[#FF7B79] rounded-xl p-4 mb-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Current Balance</p>
                    <p className="text-2xl font-bold">₹{currentBalance.toLocaleString()}</p>
                  </div>
                  <FaWallet className="text-2xl opacity-90" />
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-2 mb-4">
                {navItems.map((item, idx) => (
                  <button
                    key={idx}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      item.active ? 'bg-[#FB6765] text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs font-bold rounded-full ml-auto ${
                        item.badge === 'HOT' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-[#FB6765] text-white py-3 rounded-xl font-bold hover:bg-[#e55856] transition-colors flex items-center justify-center space-x-2">
                  <FaSignInAlt />
                  <span>Login</span>
                </button>
                <button className="border-2 border-[#FB6765] text-[#FB6765] py-3 rounded-xl font-bold hover:bg-[#FB6765] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <FaUserPlus />
                  <span>Register</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BettingTopbar;
