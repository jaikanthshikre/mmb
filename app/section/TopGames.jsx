'use client'
import { ArrowDownCircle, ArrowUpCircle, Clock, Shield, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TopGames = () => {
  const whatsappLink = "http://wa.link/iwantmmbid"

  return (
    <>

<div className="bg-gradient-to-r from-[#f15a57] via-[#e76e6c] to-[#FB6765] py-4 px-4 border-t border-gray-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left side - Brand info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="text-left">
                  <div className="text-white text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
             mymoneybets.com
                  </div>
                  <div className="text-white text-sm flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure & Instant Transactions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - badges + actions */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-green-400" />
                  <span className="text-white">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-white">Instant Processing</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs md:text-sm">
                <button
                  onClick={() => window.open("https://www.mymoneybets.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowUpCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Deposit</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => window.open("https://www.mymoneybets.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Withdraw</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom notification bar */}
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <div className="flex items-center justify-center lg:justify-between">
              <div className="hidden lg:flex items-center space-x-6 text-xs text-white">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </span>
                <span>Last processed: 39 seconds ago</span>
                <span>Next maintenance: 07:09 UTC</span>
              </div>

              <div className="text-center lg:text-right">
                <div className="text-xs text-white mb-1">Processing Speed</div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-semibold text-white">Ultra Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div>
        <h1 className="px-5 text-2xl font-bold mt-5 text-[#FB6765] uppercase text-center">
          Some Trending Games
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 px-1">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/aviator.png" alt="Aviator" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/Casino.png" alt="Casino" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/Slots.png" alt="Slots" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/rummy.png" alt="Rummy" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/fishing.png" alt="Fishing" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/sports.png" alt="Sports" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/lottery.png" alt="Lottery" className="rounded-md" />
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="/popular.png" alt="Popular" className="rounded-md" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default TopGames
