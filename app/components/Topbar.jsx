'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiCricketBat } from "react-icons/gi";
import {
  FaBars,
  FaTimes,
  FaWallet,
  FaBell,
  FaHeadset,
  FaSignInAlt,
  FaUserPlus,
  FaGamepad,
  FaPhoneAlt,
  FaWhatsapp,
  FaStar,
  FaFootballBall,
  FaTableTennis,
} from 'react-icons/fa';

const BettingTopbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications] = useState(3);

  // define a balance so the mobile menu doesn’t crash
  const [currentBalance] = useState(0);

  const pathname = usePathname();

  const navItems = [
    { name: 'Cricket', href: '/cricket', icon: <GiCricketBat /> },
    { name: 'Live Casino', href: '/casino', icon: <FaGamepad />, badge: 'HOT' },
    { name: 'FootBall', href: '/football', icon: <FaFootballBall />, badge: 'NEW' },
    { name: 'Tennis', href: '/tennis', icon: <FaTableTennis />, badge: 'NEW' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <div className="relative">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-9">
            {/* <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[#FB6765]" />
              <span>+91 87087 96295</span>
            </div> */}
            <Link href="http://wa.link/iwantmmbid">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-400" />
                <span>WhatsApp Support</span>
              </div>
            </Link>
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
            {/* Logo + Name */}
            <div className="flex items-center space-x-3">
              <Link href="/">
                <img src="/logo.png" alt="Logo" className="h-25" />
              </Link>
      {/*         <span className="text-white font-bold text-lg uppercase">My money bets</span> */}
            </div>

            {/* Desktop Navigation (≥ md) */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      active
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                    {item.badge && (
                      <span
                        className={`px-2 py-1 text-xs font-bold rounded-full ${
                          item.badge === 'HOT' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                        } animate-pulse`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* User Section & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              {/* Balance (desktop) */}
              <div className="hidden md:flex bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 items-center space-x-2">
                <FaWallet className="text-white" />
                <div>
                  <p className="text-xs text-white/80">Bonus upto:</p>
                  <p className="text-sm font-bold text-white">₹ 5000.00</p>
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

              {/* Support Button */}
              <Link
                href="http://wa.link/iwantmmbid"
                className="hidden md:flex bg-white text-[#FB6765] px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg items-center space-x-2"
              >
                <FaHeadset />
                <span>Support</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="md:hidden bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all duration-300"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Balance */}
              <div className="bg-gradient-to-r from-[#FB6765] to-[#FF7B79] rounded-xl p-4 mb-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Current Balance</p>
                    <p className="text-2xl font-bold">
                      ₹{Number(currentBalance ?? 0).toLocaleString('en-IN')}
                    </p>
                  </div>
                  <FaWallet className="text-2xl opacity-90" />
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-2 mb-4">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        active ? 'bg-[#FB6765] text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                      {item.badge && (
                        <span
                          className={`px-2 py-1 text-xs font-bold rounded-full ml-auto ${
                            item.badge === 'HOT' ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#FB6765] text-white py-3 rounded-xl font-bold hover:bg-[#e55856] transition-colors flex items-center justify-center space-x-2"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-2 border-[#FB6765] text-[#FB6765] py-3 rounded-xl font-bold hover:bg-[#FB6765] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaUserPlus />
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default BettingTopbar;
