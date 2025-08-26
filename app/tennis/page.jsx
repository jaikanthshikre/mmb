import Link from "next/link";

// app/tennis-betting/page.jsx
export const metadata = {
  title: "Tennis Betting – Guide to Winning | MMB Bet Book",
  description:
    "Safe, secure and rewarding tennis betting with MMB Bet Book. Popular markets, year-round tournaments, tips, and responsible play.",
};

export default function TennisBettingGuide() {
  return (
    <main
      // Same theme variables as the cricket page
      style={{
        ["--bg-blush"]: "#FFEFF3",
        ["--brand-pink"]: "#FF5E8A",
        ["--brand-pink-strong"]:"##FF4F7B".replace("##","#"),
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
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[rgba(255,94,138,0.15)] blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-[rgba(255,140,62,0.15)] blur-3xl" />
      </div>

      
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Tennis Betting – Guide to Winning with{" "}
              <span className="bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                MMB Bet Book
              </span>
            </h1>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Tennis is one of the world’s most popular sports, with year-round
              tournaments like Wimbledon, US Open, French Open, and Australian
              Open. If you want a reliable start, MMB Bet Book offers a safe,
              secure, and rewarding betting experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-2xl bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                Register &amp; Explore
              </a>
              <span className="text-sm text-slate-600">
                Secure transactions • Live odds • 24/7 support
              </span>
            </div>
          </div>

          {/* Glass stats card */}
          <div className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-center">
              {[
                ["Live Odds", "Real-time"],
                ["Markets", "Variety"],
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

      {/* Why tennis betting is popular */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Why Tennis Betting is Popular?</h2>
          <p className="mt-3 text-slate-700">
            Fast-paced action with clear analytics and global tournaments all year.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["Year-Round Action", "Tournaments happen almost throughout the year."],
            ["Individual Sport", "One-on-one or doubles makes analysis clearer."],
            ["Live Betting Excitement", "Every serve, rally, and point is an opportunity."],
            ["Global Tournaments", "From Grand Slams to ATP/WTA tours worldwide."],
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
            <h2 className="text-2xl md:text-3xl font-semibold">Tennis Betting with MMB Bet Book</h2>
            <p className="mt-3 text-slate-700">
              Choosing a secure platform matters. Here’s what you get with MMB.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Real-Time Odds", "Up-to-date odds for every match."],
              ["Variety of Markets", "From winners to point-by-point betting."],
              ["User-Friendly Platform", "Simple for beginners and pros alike."],
              ["Safe Transactions", "100% secure deposits and withdrawals."],
              ["24/7 Support", "Quick help for all betting queries."],
              ["Mobile-First UI", "Smooth navigation and clear layouts."],
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
          <h2 className="text-2xl md:text-3xl font-semibold">Popular Tennis Betting Markets</h2>
          <p className="mt-3 text-slate-700">Explore common markets used by tennis bettors.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Match Winner", "Bet on the player you think will win."],
            ["Set Betting", "Predict exact set scorelines like 2-0 or 3-1."],
            ["Over/Under Games", "Total games more or less than a set number."],
            ["Handicap Betting", "Balance odds by giving a virtual advantage/disadvantage."],
            ["In-Play Betting", "Bet live, point by point, as the match progresses."],
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
          <h2 className="text-2xl md:text-3xl font-semibold">Top Tennis Tournaments for Betting</h2>
          <p className="mt-3 text-slate-700">
            Opportunities run all year, from majors to tours and team events.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Grand Slams", "Wimbledon, French Open, US Open, Australian Open."],
            ["ATP Tour", "Men’s professional tournaments featuring top players."],
            ["WTA Tour", "Women’s professional tennis competitions."],
            ["Davis Cup & Laver Cup", "International team competitions with elite talent."],
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
          <h2 className="text-2xl md:text-3xl font-semibold">Tips for Successful Tennis Betting</h2>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Study Player Form: recent results, fitness, and rankings.",
            "Analyze Surfaces: grass, clay, and hard courts suit different styles.",
            "Head-to-Head Records: review past matchups between players.",
            "Consider Weather: wind, heat, and rain affect outdoor matches.",
            "Bankroll Management: set a budget and avoid chasing losses.",
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
            <p className="mt-3 text-slate-700">Trusted, transparent, and competitive.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Trusted Brand", "A secure and transparent betting exchange."],
              ["Competitive Odds", "Higher returns compared to many platforms."],
              ["Easy Access", "Simple signup and instant live betting."],
              ["Responsible Environment", "Promotes safe and controlled betting."],
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
                Tennis betting combines skill, analysis, and excitement. With
                MMB Bet Book, you get secure transactions, live odds, and
                rewarding markets across the season.
              </p>
              <p className="mt-6 text-xs text-white/80">
                Always play responsibly. Set budgets, take breaks, and seek help
                if betting affects your wellbeing.
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
