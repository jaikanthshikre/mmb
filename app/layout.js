// app/layout.js (or wherever your RootLayout lives)

import "./globals.css";
import BettingTopbar from "./components/Topbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Money Bets",
  description: "India's Best Betting site || Best betting site in india ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased bg-gray-50 text-gray-900">
        {/* Top navigation */}
        <BettingTopbar />

        {/* Main content grows to fill available space */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer sits at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
