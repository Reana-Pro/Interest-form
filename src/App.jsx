import React, { useState } from "react";
import {
  Zap,
  Shield,
  CheckCircle2,
  TrendingUp,
  User,
  ArrowRight,
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
            href="#signup"
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
              comparisons—so you can focus on the next lead, not the next spreadsheet.
            </p>

            <a
              href="#signup"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Get early access
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Deal-math callout */}
          <div className="mt-14 text-center">
            <p
              className="text-sm sm:text-base"
              style={{ color: EARLY_ACCESS_COLORS.textSecondary }}
            >
              The biggest deal-killer isn’t math—it’s fear of getting it wrong.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Decide faster",
                desc: "A clear snapshot of returns, risk, and assumptions—without the spreadsheet sprawl.",
                tone: "#4F7CFF",
                icon: Zap,
              },
              {
                title: "Trust the inputs",
                desc: "Consistent assumptions with explainable outputs you can share with partners.",
                tone: "#B24BF3",
                icon: Shield,
              },
              {
                title: "Act with confidence",
                desc: "See tradeoffs side-by-side so you can make the call and move on to the next deal.",
                tone: "#4F7CFF",
                icon: CheckCircle2,
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border p-8 flex flex-col items-center text-center"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: card.tone,
                    boxShadow: `0 0 0 1px ${card.tone}55, 0 0 26px ${card.tone}22`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border"
                    style={{
                      borderColor: card.tone,
                      color: card.tone,
                      boxShadow: `0 0 16px ${card.tone}55`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="m-0 text-sm leading-relaxed"
                    style={{
                      color: EARLY_ACCESS_COLORS.textSecondary,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* How it works */}
          <div className="mt-20">
            <h3
              className="text-2xl sm:text-3xl font-bold text-center"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              How it works
            </h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "1",
                  title: "Drop in an address",
                  desc: "Start with the property you’re underwriting.",
                },
                {
                  n: "2",
                  title: "Review the snapshot",
                  desc: "See returns, risk, and assumptions in one place.",
                },
                {
                  n: "3",
                  title: "Compare and decide",
                  desc: "Line up multiple deals side-by-side and make the call.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-2xl border p-7"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-4 font-bold"
                    style={{
                      background: "rgba(109, 109, 237, 0.14)",
                      border: `1px solid ${EARLY_ACCESS_COLORS.borderMuted}`,
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: EARLY_ACCESS_COLORS.text,
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
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h3
              className="text-2xl sm:text-3xl font-bold text-center"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Frequently Asked Questions
            </h3>

            <div className="mt-10 max-w-3xl mx-auto space-y-3">
              {[
                {
                  q: "Is Reana replacing my spreadsheet?",
                  a: "Reana is designed to replace the messy parts of underwriting and comparison while keeping assumptions clear and consistent.",
                },
                {
                  q: "What property types do you support?",
                  a: "We focus on 1–4 unit residential deals to start, with more property types coming later.",
                },
                {
                  q: "Can I compare multiple deals?",
                  a: "Yes—compare properties side-by-side to see risk, returns, and tradeoffs quickly.",
                },
                {
                  q: "When will early access open?",
                  a: "We’re onboarding in small waves. Join the list and we’ll email you when your spot is ready.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="rounded-xl border px-5 py-4"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: EARLY_ACCESS_COLORS.borderMuted,
                  }}
                >
                  <summary
                    className="cursor-pointer select-none font-semibold"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {item.q}
                  </summary>
                  <p
                    className="mt-3 mb-0 text-sm leading-relaxed"
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
                "linear-gradient(135deg, rgba(178,75,243,0.20), rgba(79,124,255,0.14))",
              borderColor: "rgba(255,255,255,0.12)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Want early investor access?
            </h3>
            <p
              className="mt-3 mb-7 text-sm sm:text-base max-w-2xl mx-auto"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Join the waitlist and we’ll notify you when onboarding opens. The first
              batch is limited—help us build the fastest way to compare deals.
            </p>
            <a
              href="#signup"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the early access list
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Agents (same page; jump target) */}
      <section id="agents" className="relative z-10 px-6 pb-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Agents
          </h2>
          <p
            className="mt-4 mb-0 text-sm sm:text-base max-w-2xl mx-auto"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Agent-specific content can live here (same page). If you want, I can mirror the investor
            layout with messaging tailored to agents.
          </p>
        </div>
      </section>
    </div>
  );
}
