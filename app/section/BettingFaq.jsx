'use client'
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Shield,
  CreditCard,
  Gamepad2,
  Headphones,
  Zap,
  Gift,
  UserCheck,
  Lock,
  Smartphone,
  Star,
  CheckCircle,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Link from 'next/link';

const BettingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('general');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'general', name: 'General', icon: <HelpCircle size={18} />, color: 'text-red-500', bgColor: 'bg-red-50' },
    { id: 'security', name: 'Security', icon: <Shield size={18} />, color: 'text-green-500', bgColor: 'bg-green-50' },
    { id: 'payments', name: 'Payments', icon: <CreditCard size={18} />, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { id: 'games', name: 'Games', icon: <Gamepad2 size={18} />, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { id: 'support', name: 'Support', icon: <Headphones size={18} />, color: 'text-orange-500', bgColor: 'bg-orange-50' }
  ];

  const faqData = {
    general: [
      {
        question: "What is MMB Premium Betting?",
        answer: "MMB is India's leading online betting platform offering secure, fast, and exciting gaming experiences. We provide access to premium games like Aviator, Casino, Slots, and Rummy with the best odds in the market.",
        icon: <Star size={20} />
      },
      {
        question: "How do I get started with MMB?",
        answer: "Getting started is simple! Click 'Register Now', provide your basic details, verify your mobile number, make your first deposit, and start playing. New users get a welcome bonus up to ₹5000.",
        icon: <UserCheck size={20} />
      },
      {
        question: "Is MMB legal and licensed?",
        answer: "Yes, MMB operates under proper licensing and follows all regulatory guidelines. We are committed to providing a safe and legal betting environment for all our users.",
        icon: <CheckCircle size={20} />
      },
      {
        question: "What devices can I use to play?",
        answer: "MMB works perfectly on all devices - smartphones, tablets, and computers. Our mobile app is optimized for the best gaming experience on Android and iOS devices.",
        icon: <Smartphone size={20} />
      }
    ],
    security: [
      {
        question: "How secure is my personal and financial information?",
        answer: "We use bank-level 256-bit SSL encryption to protect all your data. Your personal information and financial details are completely secure with advanced security protocols.",
        icon: <Lock size={20} />
      },
      {
        question: "How do you ensure fair play?",
        answer: "All our games use certified Random Number Generators (RNG) to ensure complete fairness. We are regularly audited by third-party agencies to maintain transparency and fair gaming.",
        icon: <Shield size={20} />
      },
      {
        question: "What should I do if I suspect unauthorized access?",
        answer: "Immediately contact our 24/7 customer support team. Change your password, enable two-factor authentication, and review your account activity. We'll help secure your account within minutes.",
        icon: <Headphones size={20} />
      }
    ],
    payments: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept UPI, Net Banking, Credit/Debit Cards, and popular e-wallets like Paytm, PhonePe, and Google Pay. All transactions are processed securely and instantly.",
        icon: <CreditCard size={20} />
      },
      {
        question: "How fast are withdrawals processed?",
        answer: "Withdrawals are processed within 2 minutes via UPI! Other methods may take 2-24 hours. We pride ourselves on having the fastest withdrawal system in the industry.",
        icon: <Zap size={20} />
      },
      {
        question: "Are there any fees for deposits or withdrawals?",
        answer: "Deposits are completely free! Withdrawal fees may apply based on the method chosen, but UPI withdrawals under ₹10,000 are processed without any charges.",
        icon: <Gift size={20} />
      },
      {
        question: "What is the minimum deposit and withdrawal amount?",
        answer: "Minimum deposit is ₹100 and minimum withdrawal is ₹500. Maximum limits vary by payment method, with UPI supporting up to ₹1,00,000 per transaction.",
        icon: <CreditCard size={20} />
      }
    ],
    games: [
      {
        question: "What games are available on MMB?",
        answer: "We offer a wide variety of games including Aviator, Live Casino (Roulette, Blackjack, Baccarat), Slots, Rummy, Teen Patti, and Sports Betting with live odds.",
        icon: <Gamepad2 size={20} />
      },
      {
        question: "How do I play Aviator?",
        answer: "Aviator is simple! Place your bet, watch the plane fly, and cash out before it crashes. The longer you wait, the higher the multiplier, but if the plane crashes before you cash out, you lose your bet.",
        icon: <Gamepad2 size={20} />
      },
      {
        question: "Can I play multiple games simultaneously?",
        answer: "Yes! You can play multiple games at once on different tabs or windows. Your account balance is shared across all games for seamless gaming experience.",
        icon: <Gamepad2 size={20} />
      }
    ],
    support: [
      {
        question: "How can I contact customer support?",
        answer: "Our 24/7 customer support is available via WhatsApp (+91 9876543210), phone call, live chat on the website, and email. We respond to queries within 2-5 minutes.",
        icon: <Headphones size={20} />
      },
      {
        question: "What if I forget my password?",
        answer: "Click 'Forgot Password' on the login page, enter your registered mobile number or email, and you'll receive a reset link instantly. You can also contact support for immediate assistance.",
        icon: <UserCheck size={20} />
      },
      {
        question: "How do I update my account information?",
        answer: "Log into your account, go to 'Profile Settings', and update your information. For security reasons, some changes may require verification through OTP or customer support.",
        icon: <UserCheck size={20} />
      }
    ]
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <section id="faq-section" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-red-50 py-20 relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/40 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-100/30 to-transparent rounded-full transform -translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-2 bg-gradient-to-r from-transparent via-red-100 to-transparent rotate-45"></div>
          <div className="w-96 h-2 bg-gradient-to-r from-transparent via-red-100 to-transparent -rotate-45 mt-2"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Modern header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">FAQ Center</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-3xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Everything You
            </span>
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
              Need to Know
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive answers to help you get the most out of your MMB experience
          </p>
        </div>

        {/* Sleek category tabs */}
        <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-2 max-w-4xl mx-auto shadow-xl border border-gray-200/50">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30'
                      : 'text-gray-600 hover:bg-white/80'
                  }`}
                >
                  <span className={activeCategory === category.id ? 'text-white' : category.color}>
                    {category.icon}
                  </span>
                  <span className="text-sm font-bold">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modern FAQ cards */}
        <div className={`max-w-5xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid gap-6">
            {currentFAQs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 hover:border-red-200/80"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-red-50/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {faq.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 ml-4 transform transition-all duration-300 ${
                    activeIndex === index ? 'rotate-180 text-red-500' : 'text-gray-400'
                  }`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-8">
                    <div className="ml-20">
                      <div className="bg-gradient-to-r from-gray-50 to-red-50/50 border-l-4 border-red-500 rounded-r-2xl p-6 shadow-inner">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Redesigned help section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl border border-gray-200/50">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-6 py-3 mb-8">
                <Headphones className="text-red-500 animate-bounce" size={20} />
                <span className="font-bold text-red-600 text-sm">24/7 Support Available</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
                Need Personal Assistance?
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Our dedicated support team is here to help you every step of the way
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
               <Link href='http://wa.link/iwantmmbid'>  <button className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                 <h4 className="font-bold text-gray-800 mb-2">WhatsApp</h4>
                  <p className="text-green-600 font-semibold">Fast Response</p>
                </button></Link>

                <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Live Chat</h4>
                  <p className="text-blue-600 font-semibold">Instant Response</p>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-200/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Email</h4>
                  <p className="text-purple-600 font-semibold">support@mmb.com</p>
                </div>
              </div>

             <Link href="http://wa.link/iwantmmbid"> <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-red-500/30 text-lg">
                Get Help Now
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BettingFAQ;