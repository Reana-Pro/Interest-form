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

  return (
    <div
      className="min-h-screen text-white antialiased"
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
            href="/"
            className="flex flex-1 justify-center items-center no-underline shrink-0"
          >
            <img
              src="/login-page-logo.svg"
              alt="Reana"
              width={220}
              height={72}
              className="object-contain w-auto h-14 sm:h-16"
            />
          </a>
          <ul className="flex-1 flex justify-end items-center gap-8 list-none m-0 p-0 min-w-0">
            <li>
              <a
                href="/"
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
              onClick={() => setRole("investor")}
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
              onClick={() => setRole("agent")}
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
    </div>
  );
}
