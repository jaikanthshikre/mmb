// app/layout.js

import "./globals.css";
import BettingTopbar from "./components/Topbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";

// Load Poppins from Google Fonts with Next.js optimization
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // pick what you need
  display: "swap",
});

export const metadata = {
  title: "My Money Bets",
  description: "India's Best Betting site || Best betting site in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen antialiased bg-gray-50 text-gray-900`}
      >
        {/* Top navigation */}
        <BettingTopbar />

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
