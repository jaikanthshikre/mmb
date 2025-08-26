import Link from "next/link";

// app/casino-betting/page.jsx
export const metadata = {
  title: "Casino Betting – Premium Online Experience | MMB Bet Book",
  description:
    "A themed page for MMB Bet Book: casino games, live dealers, tips, safety, and responsible play — styled to match your pink→orange + purple/sky theme.",
};

export default function CasinoBettingGuide() {
  return (
    <main
      // Same theme variables used on your other pages
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
              Casino Betting at{" "}
              <span className="bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                MMB Bet Book
              </span>{" "}
              – A World of Excitement and Big Wins
            </h1>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Spin the wheel, double down, or chase that jackpot. Enjoy a premium
              online casino experience with world-class games, modern tech, and
              fair play so you can focus on the fun.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-2xl bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                Register &amp; Explore
              </a>
              <span className="text-sm text-slate-600">
                Live dealers • Bonuses • Secure payouts
              </span>
            </div>
          </div>

          {/* Glass stats card */}
          <div className="rounded-2xl border border-white/70 bg-white/60 p-6 shadow backdrop-blur">
            <dl className="grid grid-cols-2 gap-6 text-center">
              {[
                ["Game Variety", "Hundreds"],
                ["Live Tables", "Real-time"],
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

      {/* Why choose casino betting */}
      <section id="why" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Casino Betting?</h2>
          <p className="mt-3 text-slate-700">
            More than luck: a blend of strategy, skills, and excitement.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["Variety of Games", "Choose from hundreds of different options."],
            ["Convenience", "Play from phone or computer, 24/7."],
            ["Live Casino", "Interact with professional dealers in real time."],
            ["Exciting Rewards", "Jackpots, bonuses, and promotions."],
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

      {/* Games at MMB */}
      <section id="games" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Casino Betting at MMB Bet Book</h2>
            <p className="mt-3 text-slate-700">
              Designed for a premium experience whether you’re new or seasoned.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Online Slots",
                "Simple to play with massive jackpots, vivid visuals, and exciting themes.",
              ],
              [
                "Roulette",
                "Pick numbers, colors, or combos. European, American, and French variants.",
              ],
              [
                "Blackjack",
                "Race to 21 without going over. Strategy-friendly and fast paced.",
              ],
              [
                "Poker",
                "Texas Hold’em, Omaha, and more. Mix of skill, psychology, and probability.",
              ],
              [
                "Live Casino",
                "High-quality streams with real dealers and chat for an authentic feel.",
              ],
              [
                "Promotions",
                "Seasonal bonuses and events to keep things interesting.",
              ],
            ].map(([title, body], idx) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Tips for Winning at Casino Betting</h2>
          <p className="mt-3 text-slate-700">
            Improve your chances with smart preparation and discipline.
          </p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Understand the Rules: learn basics before you play.",
            "Set a Budget: decide what you’ll spend and stick to it.",
            "Play What You Enjoy: you’ll focus better in games you like.",
            "Use Bonuses Wisely: leverage promos and free spins.",
            "Practice First: try demo modes before real bets.",
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

      {/* Safety */}
      <section id="safety" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Safe and Secure Casino Betting</h2>
            <p className="mt-3 text-slate-700">
              Advanced encryption protects your data and transactions. Tools for
              limits and breaks support responsible play.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Encryption", "Modern security to protect personal and payment data."],
              ["Responsible Tools", "Set limits, timeouts, and cool-offs to stay in control."],
              ["Support 24/7", "Help whenever you need it, right inside the app."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl p-6 shadow text-white bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-sky)]"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm/6 text-white/90">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MMB */}
      <section id="choose" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why MMB Bet Book is the Best Choice
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            ["Wide Variety of Casino Games", "Hundreds of options across slots, tables, and live."],
            ["High Payouts & Fast Withdrawals", "Quick processing with transparent timelines."],
            ["24/7 Customer Support", "Always on for questions or help."],
            ["Mobile-Friendly Experience", "Optimized for phones and tablets."],
            ["Trusted & Transparent", "Clear rules, fair play, and verified results."],
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

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pt-14">
        <div className="rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900 bg-gradient-to-r from-[var(--brand-pink-strong)] to-[var(--brand-orange)]">
          <div className="grid gap-8 md:grid-cols-[1.4fr,0.6fr] md:items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Conclusion</h2>
              <p className="mt-3 text-white/90 leading-relaxed">
                Casino betting blends variety, real-time experiences, and the
                chance to win big. MMB Bet Book brings you a safe, reliable,
                and thrilling platform every time you play.
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
