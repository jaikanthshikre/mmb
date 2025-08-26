import Link from "next/link";

// app/cricket-betting/page.jsx
export const metadata = {
  title: "Cricket Betting – Complete Guide | MMB Bet Book",
  description:
    "Safe, trusted and feature-rich cricket betting guide for MMB Bet Book users. Live odds, markets, tips and responsible play.",
};

export default function CricketBettingGuide() {
  return (
    <main
      // Brand variables taken from the referenced site’s look
      style={{
        // soft blush background
        ["--bg-blush"]: "#FFEFF3",
        // primary pink
        ["--brand-pink"]: "#FF5E8A",
        // pink→orange accent gradient
        ["--brand-pink-strong"]: "#FF4F7B",
        ["--brand-orange"]: "#FF8C3E",
        // lavender / purple
        ["--brand-purple"]: "#8B5CF6",
        // sky blue
        ["--brand-sky"]: "#60A5FA",
        // gold accent
        ["--brand-gold"]: "#F2C94C",
      }}
      className="min-h-screen text-slate-900 antialiased"
    >
      {/* Page background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--bg-blush)]" />
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[rgba(255,94,138,0.15)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-[rgba(255,140,62,0.15)] blur-3xl" />
      </div>

     
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Cricket Betting – A Complete Guide for{" "}
              <span className="bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                MMB Bet Book
              </span>{" "}
              Users
            </h1>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Cricket is more than just a sport in India; it’s an emotion. With
              the rise of online platforms, betting has become an engaging way
              to follow every ball and over. This guide shows you how to do it
              safely and smartly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-2xl bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                Register &amp; Explore
              </a>
              <span className="text-sm text-slate-600">
                24/7 support • Secure &amp; transparent
              </span>
            </div>
          </div>

          {/* Glass stats card with theme colors */}
          <div className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-center">
              {[
                ["Live Odds", "Real-time"],
                ["Options", "Multiple"],
                ["Security", "Encrypted"],
                ["Support", "24/7"],
              ].map(([k, v]) => (
                <div key={k} className="space-y-1">
                  <dt className="text-xs uppercase tracking-wider text-slate-600">
                    {k}
                  </dt>
                  <dd className="text-2xl font-bold bg-gradient-to-r from-[var(--brand-purple)] to-[var(--brand-sky)] bg-clip-text text-transparent">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Why Cricket Betting is So Popular?</h2>
          <p className="mt-3 text-slate-700">
            The craze grows across India and worldwide. Key reasons:
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["Passion for Cricket", "India is home to millions of fans who follow every ball. Betting adds an extra thrill."],
            ["Variety of Formats", "From Tests and ODIs to T20 leagues like the IPL, opportunities are endless."],
            ["Real-Time Action", "Live betting lets you place bets ball by ball and over by over."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Features of Cricket Betting on MMB Bet Book
            </h2>
            <p className="mt-3 text-slate-700">
              Smooth, transparent, and secure. Everything you need for a clean experience.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Instant Account Access", "Easy registration and fast login process."],
              ["Live Cricket Odds", "Real-time odds and updates for every match."],
              ["Multiple Betting Options", "Match winner, toss result, total runs, player performance and more."],
              ["Safe Transactions", "Encrypted payment methods keep your money and data secure."],
              ["24/7 Support", "Dedicated customer service whenever you need it."],
              ["User-Friendly Experience", "Clear navigation with a consistent, mobile-first design."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl p-6 shadow text-white
                           bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-sky)]"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm/6 text-white/90">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section id="markets" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Popular Cricket Betting Markets</h2>
          <p className="mt-3 text-slate-700">Explore the most-followed betting markets.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Match Winner", "Bet on which team will win the match."],
            ["Toss Winner", "Predict which team will win the toss."],
            ["Top Batsman / Bowler", "Wager on the best-performing player."],
            ["Over/Under Runs", "Bet on whether the total runs will be over or under a set line."],
            ["Live Betting", "Place bets during the match for maximum excitement."],
          ].map(([title, body], idx) => (
            <article
              key={title}
              className={[
                "rounded-2xl p-6 shadow text-white",
                idx % 2 === 0
                  ? "bg-gradient-to-br from-[var(--brand-pink-strong)] to-[var(--brand-orange)]"
                  : "bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-sky)]",
              ].join(" ")}
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm/6 text-white/90">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why choose MMB */}
      <section id="choose" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Choose MMB Bet Book?</h2>
            <p className="mt-3 text-slate-700">
              Reliability and transparency with full cricket coverage.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["User-Friendly Interface", "Even beginners can place bets easily."],
              ["Competitive Odds", "Attractive odds for better returns."],
              ["Responsible Gaming", "The platform promotes safe and responsible betting practices."],
              ["Exclusive Cricket Coverage", "From IPL to international matches, access all major events."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-700">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Tips for Successful Cricket Betting</h2>
          <p className="mt-3 text-slate-700">
            New to cricket betting? Use these to improve decision-making.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Do Your Research: check team form, player stats, and pitch conditions.",
            "Start Small: begin with small bets and scale as you gain experience.",
            "Follow Live Updates: monitor real-time odds before placing bets.",
            "Manage Your Budget: always set a limit and avoid chasing losses.",
            "Use Expert Predictions: insights can help, but verify before acting.",
          ].map((tip, i) => (
            <li
              key={i}
              className="rounded-2xl border border-white/70 bg-white/60 p-5 text-sm text-slate-800 shadow"
            >
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Final thoughts / CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pt-14">
        <div className="rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900 bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)]">
          <div className="grid gap-8 md:grid-cols-[1.4fr,0.6fr] md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Final Thoughts</h2>
              <p className="mt-3 text-white/90 leading-relaxed">
                Cricket betting is not just luck; it’s understanding the game and
                making smart choices. With MMB Bet Book you get a reliable, exciting
                experience across IPL, international matches and Tests.
              </p>
              <p className="mt-3 text-white/90">
                If you’re passionate about cricket and want to bet responsibly, MMB is a trusted partner.
              </p>
              <p className="mt-6 text-xs text-white/80">
                Always play responsibly. Set budgets, take breaks, and seek help if betting affects your wellbeing.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="http://wa.link/iwantmmbid"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 shadow hover:opacity-95"
                
              >
                Sign Up Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/60 bg-white/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-slate-700">
          © {new Date().getFullYear()} MMB Bet Book. All rights reserved. Play responsibly.
        </div>
      </footer>
    </main>
  );
}
