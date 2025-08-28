// components/SlideText.js
'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import {
  FaCoins,
  FaTrophy,
  FaGamepad,
  FaWallet,
  FaStar,
} from 'react-icons/fa'

const messages = [
  {
    icon: <FaCoins className="text-yellow-500" />,
    text: 'upto 10% Welcome Bonus on First Deposit',
  },
  {
    icon: <FaTrophy className="text-yellow-400" />,
    text: 'Live Cricket Betting Odds - Bet & Win!',
  },
  {
    icon: <FaGamepad className="text-purple-500" />,
    text: 'Play Teen Patti, Andar Bahar & More',
  },
  {
    icon: <FaWallet className="text-green-500" />,
    text: 'Instant Withdrawals via UPI',
  },
  {
    icon: <FaStar className="text-yellow-400" />,
    text: 'Rated 4.9/5 by Players',
  },
]

export default function SlideText() {
  return (
    <div className="bg-white text-black text-sm py-2 px-4 shadow-lg shadow-gray-300">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover
        className="flex items-center"
      >
        {messages.map((msg, idx) => (
          <span
            key={idx}
            className="mx-8 inline-flex items-center whitespace-nowrap"
          >
            <span className="text-lg">{msg.icon}</span>
            <span className="ml-2">{msg.text}</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
