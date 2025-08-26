import Link from "next/link";

// app/football-betting/page.jsx
export const metadata = {
  title: "Football Betting – Complete Guide | MMB Bet Book",
  description:
    "Safe, secure, and rewarding football betting with MMB Bet Book. Popular markets, major tournaments, tips, and responsible play.",
};

export default function FootballBettingGuide() {
  return (
    <main
      // Same theme variables as previous pages
      style={{
        ["--bg-blush"]: "#FFEFF3",
        ["--brand-pink-strong"]: "#FF4F7B",
        ["--brand-orange"]: "#FF8C3E",
        ["--brand-purple"]: "#8B5CF6",
        ["--brand-sky"]: "#60A5FA",
        ["--brand-gold"]: "#F2C94C",
      }}
      className="min-h-screen text-slate-900 antialiased"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--bg-blush)]" />
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[rgba(255,79,123,0.15)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-[rgba(255,140,62,0.15)] blur-3xl" />
      </div>

      

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Football Betting – A Complete Guide with{" "}
              <span className="bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                MMB Bet Book
              </span>
            </h1>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Football, the “beautiful game,” has billions of fans and nonstop
              tournaments. Betting adds extra thrill to every goal, card, and
              corner. If you need a safe, rewarding platform, MMB Bet Book is a
              trusted partner for your football betting journey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-2xl bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                Register &amp; Explore
              </a>
              <span className="text-sm text-slate-600">
                Secure payments • Live odds • 24/7 support
              </span>
            </div>
          </div>

          {/* Glass stats card */}
          <div className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-center">
              {[
                ["Live Odds", "Competitive"],
                ["Coverage", "Global"],
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

      {/* Why football betting is popular */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Why Football Betting is So Popular?</h2>
          <p className="mt-3 text-slate-700">
            Loved worldwide with constant fixtures and fast-changing action.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["Global Appeal", "From EPL to the FIFA World Cup, football is everywhere."],
            ["Huge Match Variety", "Club, international, and local leagues almost daily."],
            ["Multiple Options", "Bet on goals, corners, cards, and more."],
            ["Live Betting", "Momentum shifts in seconds, perfect for in-play bets."],
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

      {/* Platform features */}
      <section id="platform" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Football Betting on MMB Bet Book</h2>
            <p className="mt-3 text-slate-700">
              A secure, reliable platform with everything you need.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Real-Time Odds", "Competitive odds for major and minor matches."],
              ["Multiple Markets", "Goals, players, results, and live actions."],
              ["User-Friendly Interface", "Simple, smooth navigation for easy betting."],
              ["Secure Payments", "Fast deposits and withdrawals with full safety."],
              ["24/7 Support", "Dedicated customer service when you need it."],
              ["Mobile-First UI", "Clear layouts that work beautifully on phones."],
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

      {/* Popular markets */}
      <section id="markets" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Popular Football Betting Markets</h2>
          <p className="mt-3 text-slate-700">Explore the most-used markets on the platform.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Match Result (1X2)", "Bet on home win, draw, or away win."],
            ["Both Teams to Score (BTTS)", "Predict if both teams will score."],
            ["Over/Under Goals", "Total goals over or under a set line."],
            ["Correct Score", "Wager on the exact final score."],
            ["Player Performance", "Back goals, assists, or cards for specific players."],
            ["Live In-Play Betting", "Place bets while the match is in progress."],
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

      {/* Tournaments */}
      <section id="tournaments" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Biggest Football Tournaments for Betting</h2>
          <p className="mt-3 text-slate-700">
            Year-round competitions with endless opportunities.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["FIFA World Cup", "The most prestigious tournament in the world."],
            ["UEFA Champions League", "Elite European club competition."],
            ["English Premier League (EPL)", "The most watched league globally."],
            ["La Liga, Serie A, Bundesliga, Ligue 1", "Top domestic leagues with world-class players."],
            ["Copa America & Euro Cup", "International tournaments full of drama and passion."],
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

      {/* Tips */}
      <section id="tips" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Tips for Successful Football Betting</h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Analyze Form: check recent team and player performances.",
            "Study Head-to-Head: past results can hint at likely outcomes.",
            "Understand Team News: injuries, suspensions, and tactics matter.",
            "Home vs Away: some teams excel at home and struggle away.",
            "Bankroll Management: set limits and avoid chasing losses.",
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

      {/* Why choose MMB */}
      <section id="choose" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Choose MMB Bet Book?</h2>
            <p className="mt-3 text-slate-700">Trusted, secure, and beginner-friendly.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Trusted & Secure Platform", "100% safe transactions and fair play."],
              ["Best Betting Odds", "Higher potential returns with competitive pricing."],
              ["Wide Coverage", "From local leagues to global tournaments."],
              ["Beginner-Friendly", "Easy onboarding and simple flows."],
              ["Responsible Gaming Policy", "Encourages safe and controlled betting."],
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

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pt-14">
        <div className="rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900 bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)]">
          <div className="grid gap-8 md:grid-cols-[1.4fr,0.6fr] md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Final Thoughts</h2>
              <p className="mt-3 text-white/90 leading-relaxed">
                Football betting blends passion, analysis, and excitement.
                With MMB Bet Book you get secure transactions, live odds, and
                feature-rich markets that make every match more engaging.
              </p>
              <p className="mt-6 text-xs text-white/80">
                Always play responsibly. Set budgets, take breaks, and seek help if
                betting affects your wellbeing.
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
