// components/Footer.jsx
'use client'

import Link from 'next/link'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">MMB Betting</h2>
          <p className="text-sm">
            MMB Betting is a leading online gaming platform offering fast payouts,
            top-tier security, and exclusive bonuses. Play responsibly.
          </p>
        </div>

        {/* Products / Games */}
        <div>
          <h3 className="font-semibold text-white mb-4">Games</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Cricket
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Live Casino
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Sportsbook
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Tennis
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Responsible Gaming
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="http://wa.link/iwantmmbid" className="hover:text-white">
                License Info
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <Link
              href="http://wa.link/iwantmmbid"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="http://wa.link/iwantmmbid"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter />
            </Link>
            <Link
              href="http://wa.link/iwantmmbid"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              href="http://wa.link/iwantmmbid"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="http://wa.link/iwantmmbid"
              aria-label="YouTube"
              className="hover:text-white"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <span>
            © {new Date().getFullYear()} MMB Betting. All rights reserved.
          </span>
          <span>
            Licensed & regulated by the Govt. of India | Play responsibly
          </span>
        </div>
      </div>
    </footer>
  )
}
