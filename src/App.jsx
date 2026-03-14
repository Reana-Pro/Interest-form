import React, { useState, useRef, useEffect } from "react";
import {
  Zap,
  Shield,
  CheckCircle2,
  Check,
  TrendingUp,
  User,
  ArrowRight,
  ChevronDown,
  Menu,
} from "lucide-react";
import { getUtmParamsFromSearch, trackEarlyAccessSubmitted } from "./lib/analytics";

const UTM_STORAGE_KEY = "ea_landing_utm";
const SUBMIT_TRACKED_KEY = "ea_submit_tracked";

function useScrollReveal(opts = {}) {
  const { threshold = 0.12, rootMargin = "0px 0px -80px 0px", initialVisible = false } = opts;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

const EARLY_ACCESS_COLORS = {
  bg: "#0A0E27",
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

const PRIVACY_POLICY = {
  title: "Privacy Policy",
  effectiveDate: "August 1, 2025",
  intro: [
    "Reana is a product of Jascot Development LLC, a Wyoming limited liability company (“Jascot,” “we,” “our,” or “us”).",
    "This Privacy Policy explains how we collect, use, share, and protect your information when you use the Reana website, mobile application, and related services (collectively, the “Services”).",
    "By using the Services, you agree to the practices described in this Policy.",
  ],
  sections: [
    {
      heading: "1. Information We Collect",
      blocks: [
        { type: "subheading", content: "1.1 Information You Provide" },
        {
          type: "list",
          items: [
            "Account Information: name, email address, and login credentials when you create an account.",
            "Payment Information: payment method details processed securely by our third-party payment processors (we do not store full payment card details).",
            "Communications: messages you send to us, including support requests, surveys, or feedback.",
            "Recruitment Data: resumes, portfolios, and application information (retained for one year in compliance with employment law).",
          ],
        },
        { type: "subheading", content: "1.2 Information We Collect Automatically" },
        {
          type: "list",
          items: [
            "Usage Data: interactions with the Services, pages visited, features used, date and time of activity.",
            "Device and Log Data: IP address, browser type, operating system, referring/exit pages.",
            "Analytics: collected via Google Analytics and similar tools.",
          ],
        },
        { type: "subheading", content: "1.3 Information From Third Parties" },
        {
          type: "list",
          items: [
            "Forms and Hosting: Information submitted via Google Forms and stored with Hostinger and other service providers.",
            "Integrations: Information from third-party partners if you link accounts or use integrated services.",
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Information",
      blocks: [
        { type: "paragraph", content: "We use your information to:" },
        {
          type: "list",
          items: [
            "Provide, operate, and improve the Services.",
            "Personalize user experience and deliver relevant content.",
            "Process payments and manage subscriptions.",
            "Communicate with you, including updates, offers, and support.",
            "Ensure security, prevent fraud, and comply with legal obligations.",
            "Evaluate and improve hiring/recruitment processes.",
          ],
        },
        { type: "paragraph", content: "We do not sell personal information." },
      ],
    },
    {
      heading: "3. How We Share Information",
      blocks: [
        { type: "paragraph", content: "We may share your information as follows:" },
        {
          type: "list",
          items: [
            "Service Providers: with vendors such as payment processors, hosting providers, analytics services, and CRM tools who assist in operating the Services.",
            "Business Transfers: in connection with mergers, acquisitions, or sale of company assets.",
            "Legal Compliance: if required by law, subpoena, or government request.",
            "Consent: when you direct us to share information or give explicit consent.",
          ],
        },
        { type: "subheading", content: "Do Not Sell or Share My Personal Information" },
        {
          type: "paragraph",
          content:
            "We do not sell or share personal information as defined under U.S. state privacy laws, including the California Consumer Privacy Act (CCPA/CPRA). If our practices change, we will update this Policy and provide the required opt-out options.",
        },
      ],
    },
    {
      heading: "4. Cookies and Tracking",
      blocks: [
        { type: "paragraph", content: "We use cookies, pixels, and similar technologies to:" },
        {
          type: "list",
          items: [
            "Remember user preferences.",
            "Analyze usage trends.",
            "Improve the functionality and security of the Services.",
          ],
        },
        {
          type: "paragraph",
          content:
            "You may disable cookies through your browser, but some features may not function properly.",
        },
      ],
    },
    {
      heading: "5. Data Retention",
      blocks: [
        {
          type: "list",
          items: [
            "Account and subscription data: retained as long as your account is active.",
            "Resumes/applicant information: retained for 1 year, then deleted.",
            "Analytics and log data: retained as needed for operations and compliance.",
            "We may retain minimal information as required by law (e.g., tax records).",
          ],
        },
      ],
    },
    {
      heading: "6. Data Security",
      blocks: [
        {
          type: "paragraph",
          content:
            "We use administrative, technical, and physical safeguards to protect your data. However, no system is 100% secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      heading: "7. Your Rights",
      blocks: [
        { type: "subheading", content: "7.1 U.S. State Privacy Rights" },
        {
          type: "paragraph",
          content:
            "Residents of certain U.S. states, including California, Colorado, Connecticut, Virginia, and Utah, may have specific privacy rights under state law. These rights may include:",
        },
        {
          type: "list",
          items: [
            "Right to know what categories of personal information we collect and how we use it.",
            "Right to access specific personal information we hold about you.",
            "Right to request deletion of your personal information.",
            "Right to correct inaccurate personal information.",
            "Right to opt-out of targeted advertising or the “sale” of personal information (we do not sell personal information).",
          ],
        },
        {
          type: "paragraph",
          content:
            "To exercise these rights, please contact us at info@jascotdevelopment.com. We will verify your request as required by law.",
        },
        { type: "subheading", content: "7.2 EU/EEA (GDPR) Rights" },
        {
          type: "list",
          items: [
            "Right of access to your personal data.",
            "Right to rectification or deletion.",
            "Right to restrict or object to processing.",
            "Right to data portability.",
            "Right to lodge a complaint with your supervisory authority.",
          ],
        },
      ],
    },
    {
      heading: "8. International Users",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you access the Services from outside the U.S., your data may be transferred and processed in the United States, where privacy laws may not provide the same level of protection as your jurisdiction.",
        },
      ],
    },
    {
      heading: "9. Children’s Privacy",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Services are not directed to individuals under 18. We do not knowingly collect data from minors. If we discover we have unintentionally collected information from a minor, we will delete it.",
        },
      ],
    },
    {
      heading: "10. Changes to This Policy",
      blocks: [
        {
          type: "paragraph",
          content:
            "We may update this Privacy Policy from time to time. Updates will be posted here with the “Effective Date” revised. Continued use of the Services after changes indicates your acceptance of the new Policy.",
        },
        { type: "subheading", content: "Policy Review" },
        {
          type: "paragraph",
          content:
            "We review our Privacy Policy at least once every 12 months and update it as needed to remain compliant with applicable U.S. state and federal privacy laws.",
        },
      ],
    },
    {
      heading: "11. Contact Us",
      blocks: [
        { type: "paragraph", content: "For questions or privacy requests:" },
        { type: "paragraph", content: "Jascot Development LLC" },
        { type: "paragraph", content: "Email: info@jascotdevelopment.com" },
      ],
    },
  ],
};

const TERMS_OF_SERVICE = {
  title: "Terms of Service",
  effectiveDate: "August 1, 2025",
  intro: [
    "Reana is a product of Jascot Development LLC, a Wyoming limited liability company (“Jascot,” “we,” “our,” or “us”).",
    "By accessing or using the Reana website, mobile application, or related services (collectively, the “Services”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree, you must not use the Services.",
  ],
  sections: [
    {
      heading: "1. Eligibility and Accounts",
      blocks: [
        { type: "paragraph", content: "1.1 Minimum Age: You must be at least 18 years of age to use the Services. By using the Services, you represent that you meet this requirement." },
        { type: "paragraph", content: "1.2 Account Creation: To access certain features, you must create an account. You agree to provide accurate, current, and complete information and to update such information as needed." },
        { type: "paragraph", content: "1.3 Security: You are responsible for maintaining the confidentiality of your login credentials and all activities under your account. Notify us immediately of any unauthorized use." },
      ],
    },
    {
      heading: "2. Purpose of Services",
      blocks: [
        { type: "paragraph", content: "2.1 Educational and Informational Use Only: Reana provides tools and insights to assist with real estate investment analysis. It is not a substitute for professional financial, investment, legal, or tax advice." },
        { type: "paragraph", content: "2.2 No Guarantee of Accuracy: While we strive for accuracy, the Services may contain errors or incomplete information. You are solely responsible for verifying any outputs and making independent decisions." },
        { type: "paragraph", content: "2.3 No Fiduciary Relationship: Your use of Reana does not create a fiduciary or advisory relationship with Jascot." },
      ],
    },
    {
      heading: "3. Subscriptions, Fees, and Payment",
      blocks: [
        { type: "paragraph", content: "3.1 Subscription Plans: Some features require a paid subscription. Plans and pricing are posted on the Services." },
        { type: "paragraph", content: "3.2 Billing: By subscribing, you authorize us (or our third-party payment processor) to charge your chosen payment method on a recurring basis until you cancel." },
        { type: "paragraph", content: "3.3 Free Trials and Promotions: Free trial terms, if offered, will be explained at sign-up. We reserve the right to modify or terminate trial offers at any time." },
        { type: "paragraph", content: "3.4 Refunds: Except where required by law, payments are non-refundable." },
        { type: "paragraph", content: "3.5 Price Changes: We may change subscription fees with reasonable notice. Continued use of the Services after a price change constitutes acceptance of the new pricing." },
      ],
    },
    {
      heading: "4. Acceptable Use",
      blocks: [
        { type: "paragraph", content: "You agree not to:" },
        {
          type: "list",
          items: [
            "Use the Services for unlawful, fraudulent, or harmful purposes.",
            "Attempt to reverse engineer, copy, or distribute the Services without consent.",
            "Interfere with the operation, security, or integrity of the Services.",
            "Upload malicious code or attempt unauthorized access.",
          ],
        },
      ],
    },
    {
      heading: "5. Intellectual Property",
      blocks: [
        { type: "paragraph", content: "5.1 Ownership: The Services, including software, logos, content, and designs, are the property of Jascot Development LLC and are protected by copyright, trademark, and other laws." },
        { type: "paragraph", content: "5.2 License to You: Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal or internal business purposes." },
        { type: "paragraph", content: "5.3 Restrictions: You may not use our marks, content, or materials without prior written consent." },
      ],
    },
    {
      heading: "6. Third-Party Services and Data",
      blocks: [
        { type: "paragraph", content: "6.1 Integrations: Reana may integrate with third-party tools and data providers. We are not responsible for the accuracy, availability, or performance of these third parties." },
        { type: "paragraph", content: "6.2 Third-Party Terms: Your use of third-party services may be subject to their separate terms and policies." },
      ],
    },
    {
      heading: "7. Disclaimer of Warranties",
      blocks: [
        { type: "paragraph", content: "The Services are provided “as is” and “as available.”" },
        {
          type: "list",
          items: [
            "We make no warranties regarding accuracy, reliability, availability, or suitability for your purposes.",
            "We disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.",
          ],
        },
      ],
    },
    {
      heading: "8. Limitation of Liability",
      blocks: [
        { type: "paragraph", content: "To the fullest extent permitted by law:" },
        {
          type: "list",
          items: [
            "Jascot and its affiliates are not liable for indirect, incidental, consequential, special, punitive, or exemplary damages.",
            "Our total liability for all claims in any 12-month period will not exceed the greater of (a) the amount you paid for the Services in that period or (b) $100.",
          ],
        },
        { type: "paragraph", content: "Some jurisdictions may not allow certain exclusions, so these limitations may not apply to you." },
      ],
    },
    {
      heading: "9. Indemnification",
      blocks: [
        { type: "paragraph", content: "You agree to indemnify, defend, and hold harmless Jascot, its affiliates, officers, employees, and agents from any claims, damages, liabilities, costs, or expenses (including attorneys’ fees) arising from:" },
        {
          type: "list",
          items: [
            "Your use of the Services;",
            "Your violation of these Terms;",
            "Your violation of any rights of a third party.",
          ],
        },
      ],
    },
    {
      heading: "10. Dispute Resolution",
      blocks: [
        { type: "paragraph", content: "10.1 Informal Resolution: Before filing a claim, you agree to try to resolve the dispute informally by contacting us at info@jascotdevelopment.com." },
        { type: "paragraph", content: "10.2 Arbitration Agreement: Any disputes arising under these Terms shall be resolved by binding arbitration, administered by the American Arbitration Association (AAA) under its rules, in Wyoming." },
        { type: "paragraph", content: "10.3 Class Action Waiver: You agree to resolve disputes only on an individual basis. Class, collective, or representative actions are not permitted." },
        { type: "paragraph", content: "10.4 Exceptions: You may bring claims in small claims court if they qualify." },
      ],
    },
    {
      heading: "11. Termination",
      blocks: [
        { type: "paragraph", content: "We may suspend or terminate your account or access at any time for violations of these Terms or misuse of the Services. You may cancel your account at any time." },
      ],
    },
    {
      heading: "12. Changes to Terms",
      blocks: [
        { type: "paragraph", content: "We may revise these Terms from time to time. Updates will be posted with the “Effective Date” revised above. Continued use of the Services after changes constitutes acceptance." },
      ],
    },
    {
      heading: "13. Governing Law",
      blocks: [
        { type: "paragraph", content: "These Terms are governed by the laws of the State of Wyoming, excluding its conflict of law rules." },
      ],
    },
    {
      heading: "14. Entire Agreement",
      blocks: [
        { type: "paragraph", content: "These Terms, along with our Privacy Policy, constitute the entire agreement between you and Jascot regarding use of the Services and supersede all prior agreements." },
      ],
    },
    {
      heading: "15. Contact Information",
      blocks: [
        { type: "paragraph", content: "For questions or concerns about these Terms:" },
        { type: "paragraph", content: "Jascot Development LLC" },
        { type: "paragraph", content: "Email: info@jascotdevelopment.com" },
      ],
    },
  ],
};

const LEGAL_PAGES = {
  "/privacy-policy": PRIVACY_POLICY,
  "/terms-of-service": TERMS_OF_SERVICE,
};

function RightEdgeNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const clearLeaveTimeout = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearLeaveTimeout();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => {
    return () => clearLeaveTimeout();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const linkClass =
    "block w-full text-left py-2.5 px-4 rounded-lg text-white no-underline font-medium transition-colors hover:opacity-95 ";
  const linkStyle = { fontFamily: "var(--font-lato), sans-serif" };

  return (
    <div
      ref={menuRef}
      className="fixed right-6 top-6 z-20 flex flex-col items-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
        style={{ background: "rgba(26, 26, 48, 0.9)" }}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-5 h-5" strokeWidth={2} />
      </button>

      {isOpen && (
        <div
          className="mt-2 rounded-xl border border-white/10 overflow-hidden transition-all duration-200 shadow-xl"
          style={{
            background: "rgba(26, 26, 48, 0.95)",
            backdropFilter: "blur(12px)",
            minWidth: 160,
          }}
        >
          <ul className="list-none m-0 p-2 flex flex-col gap-0.5">
            <li>
              <a
                href="#home"
                className={linkClass}
                style={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#investors"
                className={linkClass}
                style={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Investors
              </a>
            </li>
            <li>
              <a
                href="#agents"
                className={linkClass}
                style={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Agents
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function PageBackground() {
  return (
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
  );
}

function AppHeader({ homeHref = "/", showBackLink = false }) {
  return (
    <header className="relative z-10 border-b border-white/10">
      <nav
        className={`max-w-6xl mx-auto px-6 py-5 flex items-center gap-6 ${
          showBackLink ? "justify-between" : "justify-center"
        }`}
      >
        <a href={homeHref} className="flex items-center no-underline shrink-0">
          <img
            src="/reana-logo.png"
            alt="Reana — Data driven decisions at speed"
            width={280}
            height={92}
            className="object-contain w-auto h-20 sm:h-24"
          />
        </a>
        {showBackLink && (
          <a
            href="/"
            className="text-base sm:text-lg font-semibold no-underline transition-opacity hover:opacity-90"
            style={{
              color: EARLY_ACCESS_COLORS.text,
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            Back to Home
          </a>
        )}
      </nav>
    </header>
  );
}

function AppFooter({ refProp = null, isVisible = true, homeHref = "/", quickLinks = null }) {
  const resolvedQuickLinks = quickLinks ?? [
    { label: "For Agents", href: `${homeHref}#agents` },
    { label: "For Investors", href: `${homeHref}#investors` },
  ];

  return (
    <footer
      ref={refProp}
      className={`relative z-10 border-t px-6 py-12${refProp ? ` scroll-reveal ${isVisible ? "is-visible" : ""}` : ""}`}
      style={{ borderColor: "rgba(79, 124, 255, 0.4)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href={homeHref} className="flex items-center gap-2 no-underline">
              <img src="/reana-logo.png" alt="Reana" className="h-10 w-auto object-contain" />
            </a>
            <p
              className="mt-2 text-sm"
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
              className="font-semibold text-base mb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: EARLY_ACCESS_COLORS.text }}
            >
              Quick
            </p>
            <ul className="list-none p-0 m-0 space-y-1">
              {resolvedQuickLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4F7CFF" }} />
                  <a
                    href={link.href}
                    className="text-base no-underline hover:opacity-90"
                    style={{ color: EARLY_ACCESS_COLORS.text, fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="font-semibold text-base mb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: EARLY_ACCESS_COLORS.text }}
            >
              Legal
            </p>
            <ul className="list-none p-0 m-0 space-y-1">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
              ].map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#4F7CFF" }} />
                  <a
                    href={link.href}
                    className="text-base no-underline hover:opacity-90"
                    style={{ color: EARLY_ACCESS_COLORS.text, fontFamily: "var(--font-lato), sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className="text-center text-sm pt-6 border-t m-0"
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
  );
}

function LegalDocument({ document }) {
  return (
    <div className="legal-prose">
      {document.intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {document.sections.map((section) => (
        <section key={section.heading} className="legal-section">
          <h2>{section.heading}</h2>
          {section.blocks.map((block) => {
            if (block.type === "subheading") {
              return <h3 key={block.content}>{block.content}</h3>;
            }
            if (block.type === "list") {
              return (
                <ul key={block.items.join("|")}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={block.content}>{block.content}</p>;
          })}
        </section>
      ))}
    </div>
  );
}

function LegalPage({ document }) {
  return (
    <div
      className="min-h-screen text-white antialiased"
      style={{
        background: EARLY_ACCESS_COLORS.bg,
        fontFamily: "var(--font-lato), sans-serif",
      }}
    >
      <PageBackground />
      <AppHeader showBackLink />
      <main className="relative z-10 px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p
              className="text-base uppercase tracking-[0.28em]"
              style={{ color: EARLY_ACCESS_COLORS.textSecondary }}
            >
              Legal
            </p>
            <h1
              className="mt-4 text-4xl sm:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {document.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg" style={{ color: EARLY_ACCESS_COLORS.textMuted }}>
              Effective Date: {document.effectiveDate}
            </p>
          </div>

          <div
            className="mt-10 rounded-[28px] border px-6 py-8 sm:px-10 sm:py-12"
            style={{
              background: "linear-gradient(180deg, rgba(20, 29, 76, 0.82), rgba(15, 20, 52, 0.92))",
              borderColor: "rgba(109, 109, 237, 0.42)",
              boxShadow: "0 20px 60px rgba(4, 9, 30, 0.35)",
            }}
          >
            <LegalDocument document={document} />
          </div>
        </div>
      </main>
      <AppFooter
        homeHref="/"
        quickLinks={[
          { label: "Home", href: "/" },
          { label: "Join Early Access", href: "/#home" },
        ]}
      />
    </div>
  );
}

export default function App() {
  const [role, setRole] = useState("investor");
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isThanksPage = pathname === "/thanks";
  const legalDocument = LEGAL_PAGES[pathname];
  const isLegalPage = Boolean(legalDocument);

  const [heroRef, heroVisible] = useScrollReveal({ initialVisible: true });
  const [whyRef, whyVisible] = useScrollReveal();
  const [investorsRef, investorsVisible] = useScrollReveal();
  const [investorsProRef, investorsProVisible] = useScrollReveal();
  const [investorsHelpRef, investorsHelpVisible] = useScrollReveal();
  const [investorsBuiltRef, investorsBuiltVisible] = useScrollReveal();
  const [investorsFaqRef, investorsFaqVisible] = useScrollReveal();
  const [agentsRef, agentsVisible] = useScrollReveal();
  const [agentsClientsRef, agentsClientsVisible] = useScrollReveal();
  const [agentsHelpRef, agentsHelpVisible] = useScrollReveal();
  const [agentsBuiltRef, agentsBuiltVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [footerRef, footerVisible] = useScrollReveal();

  useEffect(() => {
    if (typeof window === "undefined" || pathname !== "/") return;

    const utmParams = getUtmParamsFromSearch(window.location.search);
    const hasUtm = Object.keys(utmParams).length > 0;
    if (hasUtm) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined" || !isThanksPage) return;
    if (window.sessionStorage.getItem(SUBMIT_TRACKED_KEY) === "1") return;

    const thanksUtm = getUtmParamsFromSearch(window.location.search);
    const hasThanksUtm = Object.keys(thanksUtm).length > 0;

    let storedUtm = {};
    const stored = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      try {
        storedUtm = JSON.parse(stored);
      } catch {
        storedUtm = {};
      }
    }

    trackEarlyAccessSubmitted({
      page_url: window.location.href,
      ...(hasThanksUtm ? thanksUtm : storedUtm),
    });

    window.sessionStorage.setItem(SUBMIT_TRACKED_KEY, "1");
  }, [isThanksPage]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (isThanksPage) {
    return (
      <div
        className="min-h-screen text-white antialiased flex items-center justify-center px-6"
        style={{
          background: EARLY_ACCESS_COLORS.bg,
          fontFamily: "var(--font-lato), sans-serif",
        }}
      >
        <PageBackground />
        <div
          className="relative z-10 w-full max-w-2xl rounded-2xl border p-8 sm:p-10 text-center"
          style={{
            background: EARLY_ACCESS_COLORS.bgCard,
            borderColor: EARLY_ACCESS_COLORS.borderMuted,
          }}
        >
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Thanks, you&apos;re on the early access list.
          </h1>
          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: EARLY_ACCESS_COLORS.textSecondary }}
          >
            We&apos;ll reach out when your access wave opens. Keep an eye on your inbox for launch updates.
          </p>
          <a
            href="/"
            className="inline-flex mt-8 items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95"
            style={{
              background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            Back to Reana
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    );
  }

  if (isLegalPage) {
    return <LegalPage document={legalDocument} />;
  }

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
      <PageBackground />

      {/* Header — Reana metallic logo; nav in top-right menu */}
      <AppHeader homeHref="#home" />

      {/* Right-edge nav bar — appears when user moves toward the right */}
      <RightEdgeNavBar />

      {/* Hero */}
      <section
        ref={heroRef}
        className={`relative z-10 pt-20 pb-24 px-6 scroll-reveal ${heroVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* AI-Powered tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 border text-base uppercase tracking-wider font-medium"
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
            className="mt-12 mb-4 text-base"
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
      <section
        ref={whyRef}
        className={`relative z-10 py-20 px-6 scroll-reveal ${whyVisible ? "is-visible" : ""}`}
      >
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

      {/* Investors — Section 1: Know if the deal works */}
      <section
        ref={investorsRef}
        id="investors"
        className={`relative z-10 px-6 py-24 scroll-mt-24 scroll-reveal ${investorsVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-base uppercase tracking-wider font-semibold"
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
                href="https://40y6vu.share-na2.hsforms.com/2n7Jll8amQZKIGul5C3xMOA"
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
                href="#investors-pro"
                className="text-base font-medium no-underline transition-opacity hover:opacity-90"
                style={{
                  color: "#B24BF3",
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                See what you&apos;ll get ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investors — Section 2: Feel like a pro */}
      <section
        ref={investorsProRef}
        id="investors-pro"
        className={`relative z-10 px-6 py-24 scroll-reveal ${investorsProVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <p
              className="text-base sm:text-lg"
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

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "A lot of people freeze at the word 'math' or feel intimidated by spreadsheets.",
              "Even confident investors lose hours chasing inputs across websites and tabs.",
              "After all that work, there's still the question: 'Did I miss something?'",
            ].map((text) => (
              <div
                key={text.slice(0, 24)}
                className="rounded-xl border p-6 text-left"
                style={{
                  background: EARLY_ACCESS_COLORS.bgCard,
                  borderColor: EARLY_ACCESS_COLORS.borderMuted,
                }}
              >
                <p
                  className="m-0 text-base sm:text-lg leading-relaxed"
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

          <p
            className="mt-8 text-center text-base sm:text-lg max-w-3xl mx-auto"
            style={{
              color: "#7C9EED",
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana replaces that stress with relief: the spreadsheet is built, the math is done, and the story is clear.
          </p>
        </div>
      </section>

      {/* Investors — Section 3: What Reana helps you do + From "I think..." to "I know." */}
      <section
        ref={investorsHelpRef}
        id="investors-how"
        className={`relative z-10 px-6 py-24 scroll-reveal ${investorsHelpVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
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
                  className="m-0 text-base leading-relaxed"
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

          {/* From "I think..." to "I know." */}
          <p
            className="mt-20 text-center text-base sm:text-lg mb-8"
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
                  className="mt-2 mb-0 text-base"
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
            className="mt-8 text-center text-base"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Built for 1-4 unit investing. Designed for speed, clarity, and confidence.
          </p>
        </div>
      </section>

      {/* Investors — Section 4: Built for real-world investors */}
      <section
        ref={investorsBuiltRef}
        className={`relative z-10 px-6 py-24 scroll-reveal ${investorsBuiltVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
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
                className="flex-1 min-w-0 flex items-center justify-center px-4 py-3 rounded-xl border text-base font-medium text-center leading-snug"
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
      </section>

      {/* Investors — Section 5: Frequently Asked Questions */}
      <section
        ref={investorsFaqRef}
        className={`relative z-10 px-6 py-24 scroll-reveal ${investorsFaqVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
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
                a: "Both. Beginners get structure. Experienced investors get speed.",
              },
              {
                q: "What property types does it support?",
                a: "Residential 1–4 unit properties.",
              },
              {
                q: "Do I still need a spreadsheet?",
                a: "Reana builds the spreadsheet for you and does the math automatically. You can edit assumptions if you want—but most people love not starting from a blank spreadsheet.",
              },
              {
                q: "Will it tell me exactly what to offer?",
                a: "Reana helps you evaluate and compare and can surface a suggested range based on your inputs. You make the decision—Reana reduces the FUD.",
              },
              {
                q: "Can I analyze more than one property at a time?",
                a: "Yes—comparison is the point. You'll be able to compare multiple opportunities quickly.",
              },
              {
                q: "When can I get access?",
                a: "Join the list and we'll notify you when investor onboarding opens.",
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
                  className="mt-3 mb-0 text-base leading-relaxed text-left"
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
              className="mt-4 mb-7 text-base sm:text-lg max-w-xl mx-auto text-center"
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
              href="https://40y6vu.share-na2.hsforms.com/2n7Jll8amQZKIGul5C3xMOA"
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
              className="mt-4 text-base sm:text-lg"
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
      <section
        ref={agentsRef}
        id="agents"
        className={`relative z-10 px-6 py-24 scroll-mt-24 scroll-reveal ${agentsVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          {/* FOR AGENTS hero */}
          <div className="text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-base uppercase tracking-wider font-semibold"
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
                className="text-base font-medium no-underline transition-opacity hover:opacity-90"
                style={{
                  color: "#B24BF3",
                  fontFamily: "var(--font-lato), sans-serif",
                }}
              >
                See how it helps ↓
              </a>
            </div>

            <p
              className="mt-4 text-base"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Be the agent who brings clarity—and earns trust fast.
            </p>
          </div>
        </div>
      </section>

      {/* Agents — Section 2: Your clients don't want more opinions */}
      <section
        ref={agentsClientsRef}
        id="agents-how"
        className={`relative z-10 px-6 py-24 scroll-reveal ${agentsClientsVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
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
                  className="m-0 text-base sm:text-lg leading-relaxed"
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
      </section>

      {/* Agents — Section 3: What Reana helps agents do + Confidence that shows in the conversation */}
      <section
        ref={agentsHelpRef}
        className={`relative z-10 px-6 py-24 scroll-reveal ${agentsHelpVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
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
                  className="m-0 text-base leading-relaxed"
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

          {/* Confidence that shows in the conversation */}
          <p
            className="mt-20 text-center text-base sm:text-lg mb-8"
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
                  className="mt-2 mb-0 text-base"
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
            className="mt-8 text-center text-base"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Built for buyer&apos;s agents and listing agents working with 1-4 unit investors.
          </p>
        </div>
      </section>

      {/* Agents — Section 4: Built for agents who want to stand out with clarity */}
      <section
        ref={agentsBuiltRef}
        className={`relative z-10 px-6 py-24 scroll-reveal ${agentsBuiltVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
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
                  className="text-base sm:text-lg"
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
            className="mt-10 text-center text-base"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Show up as the calm expert in a big decision.
          </p>
        </div>
      </section>

      {/* Agent FAQ + Early Agent Access */}
      <section
        ref={faqRef}
        className={`relative z-10 px-6 py-20 scroll-reveal ${faqVisible ? "is-visible" : ""}`}
      >
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
                a: "No—agents are a core user. It's built to help you support investor clients faster and more clearly.",
              },
              {
                q: "Will this replace a Comparative Market Analysis?",
                a: "No. A Comparative Market Analysis is still important. Reana adds an investor-style analysis and side-by-side comparisons that help buyers and sellers feel confident about the numbers behind the decision.",
              },
              {
                q: "How does this help me close more deals?",
                a: "Clarity reduces hesitation. Clients decide sooner, make stronger offers, and stay engaged.",
              },
              {
                q: "Can I use this for multiple clients?",
                a: "Yes. It's designed for repeat use and a consistent workflow.",
              },
              {
                q: "Is it limited to 1–4 units?",
                a: "Yes—Reana is focused on residential 1–4 unit properties.",
              },
              {
                q: "When can I get access?",
                a: "Join the list and we'll notify you when agent onboarding opens.",
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
                  className="mt-3 mb-0 text-base leading-relaxed text-left"
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
              className="mt-4 mb-7 text-base sm:text-lg max-w-xl mx-auto text-center"
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
              className="mt-4 text-base sm:text-lg"
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
      <AppFooter
        refProp={footerRef}
        isVisible={footerVisible}
        homeHref="#home"
        quickLinks={[
          { label: "For Agents", href: "#agents" },
          { label: "For Investors", href: "#investors" },
        ]}
      />
    </div>
  );
}
