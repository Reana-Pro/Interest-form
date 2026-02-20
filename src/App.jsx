import React, { useState } from "react";
import {
  Zap,
  Shield,
  CheckCircle2,
  Check,
  TrendingUp,
  User,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const EARLY_ACCESS_COLORS = {
  bg: "#0a0a14",
  bgCard: "rgba(26, 26, 48, 0.8)",
  text: "#FFFFFF",
  textMuted: "rgba(255, 255, 255, 0.85)",
  textSecondary: "rgba(255, 255, 255, 0.7)",
  logoAccent: "#E07B9E",
  border: "#6D6DED",
  borderMuted: "rgba(109, 109, 237, 0.5)",
  gradientFrom: "#4F7CFF",
  gradientMid: "#6D6DED",
  gradientTo: "#C77BFF",
  tagBg: "rgba(79, 124, 255, 0.15)",
};

export default function App() {
  const [role, setRole] = useState("investor");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="min-h-screen text-white antialiased"
      id="home"
      style={{
        background: EARLY_ACCESS_COLORS.bg,
        fontFamily: "var(--font-lato), sans-serif",
      }}
    >
      {/* Subtle starfield / specks background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 20px 30px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1.5px 1.5px at 40px 70px, rgba(255,255,255,0.2), transparent),
            radial-gradient(1.5px 1.5px at 50px 160px, rgba(255,255,255,0.25), transparent),
            radial-gradient(1.5px 1.5px at 90px 40px, rgba(255,255,255,0.2), transparent),
            radial-gradient(1.5px 1.5px at 130px 80px, rgba(255,255,255,0.3), transparent)`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center">
          <div className="flex-1 min-w-0" aria-hidden />
          <a
            href="#home"
            className="flex flex-1 justify-center items-center no-underline shrink-0"
          >
            <img
              src="/login-page-logo.png"
              alt="Reana — Data driven decisions at speed"
              width={280}
              height={92}
              className="object-contain w-auto h-20 sm:h-24"
            />
          </a>
          <ul className="flex-1 flex justify-end items-center gap-8 list-none m-0 p-0 min-w-0">
            <li>
              <a
                href="#home"
                className="text-white no-underline font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#investors"
                className="text-white no-underline font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Investors
              </a>
            </li>
            <li>
              <a
                href="#agents"
                className="text-white no-underline font-medium hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-lato), sans-serif" }}
              >
                Agents
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* AI-Powered tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 border text-sm uppercase tracking-wider font-medium"
            style={{
              background: EARLY_ACCESS_COLORS.tagBg,
              borderColor: EARLY_ACCESS_COLORS.borderMuted,
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            <Zap className="w-4 h-4 shrink-0" style={{ color: EARLY_ACCESS_COLORS.border }} />
            <span style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              AI-Powered Real Estate Analysis
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            Analyze 1-4 Unit Real Estate Deals{" "}
            <span
              className="block sm:inline"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              in Minutes, Not Days
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana helps investors and agents quickly compare properties, understand risk, and make
            confident decisions — without spreadsheets or jumping between tools.
          </p>

          <a
            href="https://40y6vu.share-na2.hsforms.com/2bjU9sdWrTwqJVsMHQmls4w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            Join the Early Access List
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Role selection */}
          <p
            className="mt-12 mb-4 text-sm"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Select Your Role:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setRole("investor");
                // Jump to the investor section on the same page
                requestAnimationFrame(() => scrollToSection("investors"));
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all"
              style={{
                background: role === "investor" ? "rgba(109, 109, 237, 0.15)" : EARLY_ACCESS_COLORS.bgCard,
                borderColor: EARLY_ACCESS_COLORS.borderMuted,
                color: EARLY_ACCESS_COLORS.text,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              <TrendingUp className="w-5 h-5 shrink-0 text-[#B24BF3]" />
              I&apos;m an Investor
            </button>
            <button
              type="button"
              onClick={() => {
                setRole("agent");
                requestAnimationFrame(() => scrollToSection("agents"));
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all"
              style={{
                background: role === "agent" ? "rgba(178, 75, 243, 0.15)" : EARLY_ACCESS_COLORS.bgCard,
                borderColor: "#B24BF3",
                color: EARLY_ACCESS_COLORS.text,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              <User className="w-5 h-5 shrink-0 text-[#B24BF3]" />
              I&apos;m an Agent
            </button>
          </div>
        </div>
      </section>

      {/* Why Reana */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            Why Reana?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Speed */}
            <div
              className="rounded-2xl border p-8 transition-shadow hover:shadow-lg flex flex-col items-center text-center"
              style={{
                background: EARLY_ACCESS_COLORS.bgCard,
                borderColor: "#4F7CFF",
                boxShadow: "0 0 0 1px rgba(79, 124, 255, 0.4), 0 0 24px rgba(79, 124, 255, 0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border shrink-0"
                style={{
                  borderColor: "#4F7CFF",
                  color: "#4F7CFF",
                  boxShadow: "0 0 16px rgba(79, 124, 255, 0.4)",
                }}
              >
                <Zap className="w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: EARLY_ACCESS_COLORS.text,
                }}
              >
                Speed
              </h3>
              <p
                className="text-base leading-relaxed m-0"
                style={{
                  color: EARLY_ACCESS_COLORS.textSecondary,
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                Analyze and compare multiple properties in one place
              </p>
            </div>

            {/* Clarity */}
            <div
              className="rounded-2xl border p-8 transition-shadow hover:shadow-lg flex flex-col items-center text-center"
              style={{
                background: EARLY_ACCESS_COLORS.bgCard,
                borderColor: "#B24BF3",
                boxShadow: "0 0 0 1px rgba(178, 75, 243, 0.4), 0 0 24px rgba(178, 75, 243, 0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border shrink-0"
                style={{
                  borderColor: "#B24BF3",
                  color: "#B24BF3",
                  boxShadow: "0 0 16px rgba(178, 75, 243, 0.4)",
                }}
              >
                <Shield className="w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: EARLY_ACCESS_COLORS.text,
                }}
              >
                Clarity
              </h3>
              <p
                className="text-base leading-relaxed m-0"
                style={{
                  color: EARLY_ACCESS_COLORS.textSecondary,
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                Consistent assumptions and explainable AI insights
              </p>
            </div>

            {/* Total Confidence */}
            <div
              className="rounded-2xl border p-8 transition-shadow hover:shadow-lg flex flex-col items-center text-center"
              style={{
                background: EARLY_ACCESS_COLORS.bgCard,
                borderColor: "#4F7CFF",
                boxShadow: "0 0 0 1px rgba(79, 124, 255, 0.4), 0 0 24px rgba(79, 124, 255, 0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border shrink-0"
                style={{
                  borderColor: "#4F7CFF",
                  color: "#4F7CFF",
                  boxShadow: "0 0 16px rgba(79, 124, 255, 0.4)",
                }}
              >
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "var(--font-montserrat), sans-serif",
                  color: EARLY_ACCESS_COLORS.text,
                }}
              >
                Total Confidence
              </h3>
              <p
                className="text-base leading-relaxed m-0"
                style={{
                  color: EARLY_ACCESS_COLORS.textSecondary,
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                See risk, returns, and tradeoffs side-by-side
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investors (same page; jump target) */}
      <section
        id="investors"
        className="relative z-10 px-6 py-24 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-xs uppercase tracking-wider font-semibold"
              style={{
                background: "rgba(109, 109, 237, 0.12)",
                borderColor: EARLY_ACCESS_COLORS.borderMuted,
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              <TrendingUp className="w-4 h-4" style={{ color: EARLY_ACCESS_COLORS.border }} />
              <span style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                For Investors
              </span>
            </div>

            <h2
              className="text-3xl sm:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Know if the deal works—without losing your whole weekend.
            </h2>

            <p
              className="mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Reana turns a 1-4 unit analysis into a decision-ready snapshot and side-by-side
              comparisons— and it does the math for you. Less FUD (fear, uncertainty, doubt). More calm, confident action.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://40y6vu.share-na2.hsforms.com/2bjU9sdWrTwqJVsMHQmls4w"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
                style={{
                  background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                Join the Investor Interest List
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#what-you-get"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium no-underline transition-opacity hover:opacity-90 border"
                style={{
                  color: EARLY_ACCESS_COLORS.text,
                  borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                See what you&apos;ll get
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Deal-math callout */}
          <div className="mt-14 text-center space-y-3">
            <p
              className="text-sm sm:text-base"
              style={{ color: EARLY_ACCESS_COLORS.textSecondary }}
            >
              Feel like a pro—even when the deal is moving fast.
            </p>
            <p
              className="text-xl sm:text-2xl font-semibold"
              style={{
                color: EARLY_ACCESS_COLORS.text,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              The biggest deal-killer isn&apos;t math—it&apos;s fear of getting it wrong.
            </p>
          </div>

          {/* Three problem statements */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "A lot of people freeze at the word 'math' or feel intimidated by spreadsheets.",
              "Even confident investors lose hours chasing inputs across websites and tabs.",
              "After all that work, there's still the question: 'Did I miss something?'",
            ].map((text, i) => (
              <div
                key={text.slice(0, 24)}
                className="rounded-xl border p-6 text-left"
                style={{
                  background: EARLY_ACCESS_COLORS.bgCard,
                  borderColor: EARLY_ACCESS_COLORS.borderMuted,
                }}
              >
                <p
                  className="m-0 text-sm sm:text-base leading-relaxed"
                  style={{
                    color: EARLY_ACCESS_COLORS.text,
                    fontFamily: "var(--font-lato), sans-serif",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Solution statement */}
          <p
            className="mt-8 text-center text-base sm:text-lg max-w-3xl mx-auto"
            style={{
              color: "#7C9EED",
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana replaces that stress with relief: the spreadsheet is built, the math is done, and the story is clear.
          </p>

          {/* What Reana helps you do */}
          <h3
            className="mt-16 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            What Reana helps you do
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Compare opportunities quickly",
                desc: "Put 2-3 properties side-by-side so you choose the best move, not just the next move.",
              },
              {
                title: "See the deal story at a glance",
                desc: "A clean summary that highlights what matters: income potential, major cost drivers, and risk signals.",
              },
              {
                title: "Make decisions with confidence",
                desc: "Reana gives you an editable analysis without spreadsheet stress—so you can make offers and negotiate without second-guessing.",
              },
              {
                title: "Keep your assumptions consistent",
                desc: "Save your preferred defaults so each new deal starts closer to how you actually invest.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border p-6"
                style={{
                  background: EARLY_ACCESS_COLORS.bgCard,
                  borderColor: EARLY_ACCESS_COLORS.borderMuted,
                }}
              >
                <h4
                  className="font-bold mb-2 m-0"
                  style={{
                    fontFamily: "var(--font-montserrat), sans-serif",
                    color: EARLY_ACCESS_COLORS.text,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="m-0 text-sm leading-relaxed"
                  style={{
                    color: EARLY_ACCESS_COLORS.textSecondary,
                    fontFamily: "var(--font-lato), sans-serif",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-28">
            <p
              className="text-center text-sm sm:text-base mb-8"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              From &quot;I think...&quot; to &quot;I know.&quot;
            </p>
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              How it works
            </h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "1",
                  title: "Drop in an address",
                  desc: "Start with the property you're considering—Reana organizes the analysis flow for you.",
                },
                {
                  n: "2",
                  title: "Review the snapshot",
                  desc: "See the numbers and the story in one place—clear, structured, and comparable.",
                },
                {
                  n: "3",
                  title: "Compare and decide",
                  desc: "Line up 2-3 options and choose what's worth pursuing with less FUD and more confidence.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border p-7 text-center"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-4 font-bold mx-auto"
                    style={{
                      background: "rgba(178, 75, 243, 0.15)",
                      border: "1px solid rgba(178, 75, 243, 0.5)",
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: "#B24BF3",
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    className="font-bold"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {step.title}
                  </div>
                  <p
                    className="mt-2 mb-0 text-sm"
                    style={{
                      color: EARLY_ACCESS_COLORS.textSecondary,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-8 text-center text-sm"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Built for 1-4 unit investing. Designed for speed, clarity, and confidence.
            </p>
          </div>

          {/* Built for real-world investors */}
          <div className="mt-20">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              Built for real-world investors
            </h3>
            <p
              className="mt-4 text-center text-base max-w-2xl mx-auto"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              If you analyze 1 property a year or 4 a month, the workflow is the same—Reana just makes it faster and calmer.
            </p>
            <div className="mt-8 flex flex-nowrap justify-center gap-3">
              {[
                "Buy & Hold / long-term rental",
                "BRRRR investors",
                "Fix-and-flip investors",
                "Small portfolio owners",
                "Newer investors who want structure and confidence",
              ].map((label) => (
                <span
                  key={label}
                  className="flex-1 min-w-0 flex items-center justify-center px-4 py-3 rounded-xl border text-sm font-medium text-center leading-snug"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: "rgba(255,255,255,0.3)",
                    color: EARLY_ACCESS_COLORS.text,
                    fontFamily: "var(--font-lato), sans-serif",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Frequently Asked Questions
            </h3>

            <div className="mt-10 max-w-3xl mx-auto space-y-3">
              {[
                {
                  q: "Is Reana for beginners or experienced investors?",
                  a: "Reana is built for both. If you're new to underwriting, it gives you structure and clarity. If you're experienced, it speeds up comparison and keeps your assumptions consistent.",
                },
                {
                  q: "What property types does it support?",
                  a: "We focus on 1–4 unit residential deals to start, with more property types coming later.",
                },
                {
                  q: "Do I still need a spreadsheet?",
                  a: "Reana is designed to replace the messy parts of underwriting and comparison—so you can skip the spreadsheet for analysis and side-by-side deals. Many investors find they don't need one; you can still use your own if you prefer.",
                },
                {
                  q: "Will it tell me exactly what to offer?",
                  a: "Reana gives you the numbers and the story—returns, risk, and tradeoffs—so you can decide with confidence. Your offer strategy stays yours.",
                },
                {
                  q: "Can I analyze more than one property at a time?",
                  a: "Yes. Reana lets you run analysis on multiple properties and line them up side-by-side—so you can compare returns, risk, and assumptions in one place and choose the best move.",
                },
                {
                  q: "When can I get access?",
                  a: "We're opening access in small waves. Join the interest list and we'll notify you when onboarding opens for your spot. No spam—just launch updates and early access invites.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border px-5 py-4 group"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: "rgba(109, 109, 237, 0.4)",
                  }}
                >
                  <summary className="cursor-pointer select-none flex items-center justify-between gap-3 list-none">
                    <span
                      className="font-semibold text-left flex-1"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                        color: EARLY_ACCESS_COLORS.text,
                      }}
                    >
                      {item.q}
                    </span>
                    <ChevronDown className="w-5 h-5 shrink-0 text-white/80 group-open:rotate-180 transition-transform" />
                  </summary>
                  <p
                    className="mt-3 mb-0 text-sm leading-relaxed text-left"
                    style={{
                      color: EARLY_ACCESS_COLORS.textSecondary,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-20 rounded-2xl border px-8 py-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(178,75,243,0.22), rgba(79,124,255,0.16))",
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 0 40px rgba(178, 75, 243, 0.15)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Want early investor access?
            </h3>
            <p
              className="mt-4 mb-7 text-sm sm:text-base max-w-xl mx-auto text-center"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Join the list and we&apos;ll notify you when onboarding opens. The
              <br />
              math is handled—so you can feel confident making the call.
            </p>
            <a
              href="https://40y6vu.share-na2.hsforms.com/2bjU9sdWrTwqJVsMHQmls4w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the Investor Interest List
              <ArrowRight className="w-5 h-5" />
            </a>
            <p
              className="mt-4 text-xs sm:text-sm"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              No spam. Just launch updates and early access invites.
            </p>
          </div>
        </div>
      </section>

      {/* Agents (same page; jump target) */}
      <section id="agents" className="relative z-10 px-6 py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* FOR AGENTS hero */}
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-xs uppercase tracking-wider font-semibold"
              style={{
                background: "rgba(178, 75, 243, 0.12)",
                borderColor: "rgba(178, 75, 243, 0.5)",
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              <User className="w-4 h-4 shrink-0" style={{ color: "#B24BF3" }} />
              <span style={{ fontFamily: "var(--font-lato), sans-serif" }}>
                For Agents
              </span>
            </div>

            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight whitespace-nowrap text-center"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              Bring clarity to buyers and confidence to sellers.
            </h2>

            <p
              className="mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Reana helps agents support investor buyers with clean analysis and side-by-side comparisons—and helps listing agents price a property right from the beginning with a numbers-based view buyers will be using.
            </p>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://40y6vu.share-na2.hsforms.com/2bRY17KjtTAG8-fh8bBEJ5Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
                style={{
                  background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                  fontFamily: "var(--font-montserrat), sans-serif",
                }}
              >
                Join the Agent Interest List
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#agents-how"
                className="text-sm font-medium no-underline transition-opacity hover:opacity-90"
                style={{
                  color: "#B24BF3",
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                See how it helps ↓
              </a>
            </div>

            <p
              className="mt-4 text-sm"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Be the agent who brings clarity—and earns trust fast.
            </p>
          </div>

          {/* Your clients don't want more opinions */}
          <div className="mt-20" id="agents-how">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight whitespace-nowrap text-center"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              Your clients don&apos;t want more opinions—they want clarity.
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Investor buyers want numbers and comparisons now—and uncertainty slows them down.",
                "Sellers want to feel sure the listing price is right—before days on market and price drops create doubt.",
                "You're stuck pulling inputs from multiple places and explaining math that clients find intimidating.",
              ].map((text) => (
                <div
                  key={text.slice(0, 30)}
                  className="rounded-xl border p-6 text-left"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  }}
                >
                  <p
                    className="m-0 text-sm sm:text-base leading-relaxed"
                    style={{
                      color: EARLY_ACCESS_COLORS.text,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <p
                className="text-center text-base max-w-3xl leading-relaxed"
                style={{
                  color: "#E8A8B8",
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                Reana reduces FUD by giving you a clear, shareable analysis—without making you &quot;teach spreadsheets.&quot;
              </p>
            </div>
          </div>

          {/* What Reana helps agents do */}
          <div className="mt-20">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              What Reana helps agents do
            </h3>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Deliver investor-ready clarity",
                  desc: "Give clients clean comparisons so they trust your guidance and act faster.",
                },
                {
                  title: "Strengthen listings with confident pricing",
                  desc: "Present a numbers-based story that helps sellers price correctly from day one—with less second-guessing later.",
                },
                {
                  title: "Standardize your workflow",
                  desc: "Same structure every time. Less scrambling. More control and professionalism.",
                },
                {
                  title: "Reduce the back-and-forth",
                  desc: "Instead of 20 texts and 8 links, share one clear snapshot and comparison clients can understand.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border p-6 text-left"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  }}
                >
                  <h4
                    className="font-bold mb-2 m-0"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: EARLY_ACCESS_COLORS.text,
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="m-0 text-sm leading-relaxed"
                    style={{
                      color: EARLY_ACCESS_COLORS.textSecondary,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How it works for agents — same format as investor */}
          <div className="mt-20">
            <p
              className="text-center text-sm sm:text-base mb-8"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Confidence that shows in the conversation.
            </p>
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: EARLY_ACCESS_COLORS.text }}
            >
              How it works for agents
            </h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "1",
                  title: "Enter a property (or a set of properties)",
                  desc: "Start with a listing, a buyer target, or multiple options for comparison.",
                },
                {
                  n: "2",
                  title: "Review the decision-ready snapshot",
                  desc: "Get a clean, structured analysis you can explain in plain English.",
                },
                {
                  n: "3",
                  title: <>Share and guide<br />the decision</>,
                  desc: "Move buyers forward or help sellers feel confident about pricing.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border p-7 text-center"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-4 font-bold mx-auto"
                    style={{
                      background: "rgba(178, 75, 243, 0.15)",
                      border: "1px solid rgba(178, 75, 243, 0.5)",
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: "#B24BF3",
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    className="font-bold"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {step.title}
                  </div>
                  <p
                    className="mt-2 mb-0 text-sm"
                    style={{
                      color: EARLY_ACCESS_COLORS.textSecondary,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-8 text-center text-sm"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Built for buyer&apos;s agents and listing agents working with 1-4 unit investors.
            </p>
          </div>

          {/* Built for agents who want to stand out with clarity */}
          <div className="mt-20">
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                color: EARLY_ACCESS_COLORS.text,
              }}
            >
              Built for agents who want to stand out with clarity
            </h3>
            <div className="mt-10 space-y-4 max-w-3xl mx-auto">
              {[
                "Buyer's agents advising rental, BRRRR, and investment-focused clients",
                "Listing agents who want to price correctly from the start using a numbers-based narrative",
                "Agents who want a repeatable, professional workflow that's easy to explain",
              ].map((item) => (
                <div
                  key={item.slice(0, 24)}
                  className="rounded-lg border px-5 py-4 flex items-center gap-4"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: "rgba(178, 75, 243, 0.5)",
                  }}
                >
                  <Check className="w-5 h-5 shrink-0" style={{ color: "#B24BF3" }} />
                  <span
                    className="text-sm sm:text-base"
                    style={{
                      color: EARLY_ACCESS_COLORS.text,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="mt-10 text-center text-sm"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Show up as the calm expert in a big decision.
            </p>
          </div>
        </div>
      </section>

      {/* Agent FAQ + Early Agent Access */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center mb-10"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Is Reana only for investors?",
                a: "Reana helps both investors and agents. Investors get decision-ready analysis; agents get clear, shareable snapshots to guide buyers and sellers.",
              },
              {
                q: "Will this replace a Comparative Market Analysis?",
                a: "Reana focuses on income and returns for 1-4 unit deals. It complements how you work—use it alongside CMAs or as a numbers-based story for investment-focused clients.",
              },
              {
                q: "How does this help me close more deals?",
                a: "Less back-and-forth, clearer comparisons, and confident pricing. You show up as the calm expert so buyers and sellers can decide faster.",
              },
              {
                q: "Can I use this for multiple clients?",
                a: "Yes. Run analysis for different listings or buyer targets and share decision-ready snapshots with each client.",
              },
              {
                q: "Is it limited to 1-4 units?",
                a: "We focus on 1-4 unit residential properties to start, with more property types coming later.",
              },
              {
                q: "When can I get access?",
                a: "We're opening access in waves. Join the interest list and we'll notify you when onboarding opens.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="rounded-xl border px-5 py-4 group"
                style={{
                  background: EARLY_ACCESS_COLORS.bgCard,
                  borderColor: "rgba(109, 109, 237, 0.4)",
                }}
              >
                <summary className="cursor-pointer select-none flex items-center justify-between gap-3 list-none">
                  <span
                    className="font-semibold text-left flex-1"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: EARLY_ACCESS_COLORS.text,
                    }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown className="w-5 h-5 shrink-0 text-white/80 group-open:rotate-180 transition-transform" />
                </summary>
                <p
                  className="mt-3 mb-0 text-sm leading-relaxed text-left"
                  style={{
                    color: EARLY_ACCESS_COLORS.textSecondary,
                    fontFamily: "var(--font-lato), sans-serif",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Want early agent access — same width as investor CTA (max-w-5xl) */}
        <div className="max-w-5xl mx-auto mt-20">
          <div
            className="rounded-2xl border px-8 py-10 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(178,75,243,0.22), rgba(79,124,255,0.16))",
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 0 40px rgba(178, 75, 243, 0.15)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Want early agent access?
            </h3>
            <p
              className="mt-4 mb-7 text-sm sm:text-base max-w-xl mx-auto text-center"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Join the list for launch updates and early access invites. Reduce client FUD. Increase confident decisions—for buyers and sellers.
            </p>
            <a
              href="https://40y6vu.share-na2.hsforms.com/2bRY17KjtTAG8-fh8bBEJ5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the Agent Interest List
              <ArrowRight className="w-5 h-5" />
            </a>
            <p
              className="mt-4 text-xs sm:text-sm"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              No spam. Just launch updates and early access invites.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t px-6 py-12" style={{ borderColor: "rgba(79, 124, 255, 0.4)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <a href="#home" className="flex items-center gap-2 no-underline">
                <img src="/login-page-logo.png" alt="Reana" className="h-10 w-auto object-contain" />
              </a>
              <p
                className="mt-2 text-xs"
                style={{
                  color: EARLY_ACCESS_COLORS.textSecondary,
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                DATA DRIVEN DECISIONS AT SPEED
              </p>
            </div>
            <div>
              <p
                className="font-semibold text-sm mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: EARLY_ACCESS_COLORS.text }}
              >
                Quick
              </p>
              <ul className="list-none p-0 m-0 space-y-1">
                {["For Agents", "For Investors"].map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4F7CFF" }} />
                    <a href={label === "For Agents" ? "#agents" : "#investors"} className="text-sm no-underline hover:opacity-90" style={{ color: EARLY_ACCESS_COLORS.text, fontFamily: "var(--font-lato), sans-serif" }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="font-semibold text-sm mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif", color: EARLY_ACCESS_COLORS.text }}
              >
                Legal
              </p>
              <ul className="list-none p-0 m-0 space-y-1">
                {["Privacy Policy", "Terms of Service"].map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4F7CFF" }} />
                    <a href="#" className="text-sm no-underline hover:opacity-90" style={{ color: EARLY_ACCESS_COLORS.text, fontFamily: "var(--font-lato), sans-serif" }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p
            className="text-center text-xs pt-6 border-t m-0"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            © 2026 Reana. Building the future of real estate analysis.
          </p>
        </div>
      </footer>
    </div>
  );
}
