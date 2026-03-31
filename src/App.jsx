import React, { useState, useRef, useEffect } from "react";
import {
  Zap,
  Shield,
  CheckCircle2,
  Check,
  TrendingUp,
  User,
  ArrowRight,
  Menu,
} from "lucide-react";
import { getUtmParamsFromSearch, trackEarlyAccessSubmitted } from "./lib/analytics";

const UTM_STORAGE_KEY = "ea_landing_utm";
const SUBMIT_TRACKED_KEY = "ea_submit_tracked";

function useScrollReveal(opts = {}) {
  const {
    threshold = 0.12,
    rootMargin = "0px 0px -80px 0px",
    initialVisible = true,
  } = opts;
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

const INVESTOR_FORM_URL = "https://40y6vu.share-na2.hsforms.com/2n7Jll8amQZKIGul5C3xMOA";
const AGENT_FORM_URL = "https://40y6vu.share-na2.hsforms.com/2bRY17KjtTAG8-fh8bBEJ5Q";

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
            src="/reana-logo-with-tag.png"
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
              <img src="/reana-logo-with-tag.png" alt="Reana" className="h-10 w-auto object-contain" />
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

export default function App({ initialPathname = null }) {
  const [role, setRole] = useState("investor");
  const pathname = initialPathname ?? (typeof window !== "undefined" ? window.location.pathname : "/");
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

  const overviewCards = [
    {
      icon: Zap,
      title: "Real estate analysis is more than finding a property.",
      body:
        "The real work is deciding whether a property fits the investor's goals, strategy, and risk profile. A property may look strong on paper and still be wrong for a particular buyer. Reana is designed to help move beyond generic deal analysis by checking each opportunity against the investor's specific investment strategy.",
      accent: "#4F7CFF",
    },
    {
      icon: Shield,
      title: "The real burden is not one property. It is the stack of properties.",
      body:
        "Serious investors rarely review just one property. They often look at several before deciding where to spend more time, what to pursue, and what to walk away from. Each property is a chain of decisions involving price, rent potential, neighborhood quality, financing, operating costs, rehab, resale potential, risk, and overall fit with the investor's strategy.",
      accent: "#B24BF3",
    },
    {
      icon: CheckCircle2,
      title: "That analysis time comes from somewhere.",
      body:
        "Without a better workflow, deal analysis can spill into evenings, weekends, and the limited time investors and agents have after everything else gets done. The more properties reviewed, the more mental load, comparison work, and second-guessing pile up. Reana is being built to help reduce that burden.",
      accent: "#4F7CFF",
    },
  ];

  const investorSupportCards = [
    {
      title: "Compare more opportunities without sacrificing depth",
      desc:
        "Whether you buy to hold, flip, or use the BRRRR method, Reana is designed to help you evaluate more properties without sacrificing depth.",
    },
    {
      title: "Keep the work organized",
      desc:
        "Instead of bouncing between websites, spreadsheets, notes, and assumptions, Reana is being built to help organize the work so you can make decisions faster and with greater confidence.",
    },
    {
      title: "Process information faster",
      desc:
        "The goal is not just faster analysis. It is more relevant analysis that reflects the investor's actual strategy.",
    },
    {
      title: "Stay focused on fit",
      desc:
        "A good investment is not enough. It has to fit the investor, the strategy, and the tolerance for risk and effort.",
    },
  ];

  const investorAudience = [
    "Buy & hold investors",
    "Fix-and-flip investors",
    "BRRRR investors",
    "Small portfolio builders",
    "Agents supporting investor buyers",
  ];

  const agentSupportCards = [
    {
      title: "Support the work agents already do",
      desc:
        "Agents already do a tremendous amount of work to help buyers evaluate properties and make sound decisions. Reana is designed to support that work, not replace it.",
    },
    {
      title: "Bring more clarity to the client conversation",
      desc:
        "By organizing and accelerating the analysis process, Reana helps agents bring more clarity, speed, and confidence to buyers and sellers.",
    },
    {
      title: "Keep comparisons consistent",
      desc:
        "When multiple properties are in play, a consistent evaluation workflow makes it easier to compare options and explain tradeoffs clearly.",
    },
    {
      title: "Reduce the drag between review and action",
      desc:
        "Hours can disappear before a client feels ready to act. Reana is designed to compress that analysis burden into a clearer next step.",
    },
  ];

  const agentAudience = [
    "Buyer's agents working with investors",
    "Agents advising flip and BRRRR buyers",
    "Professionals organizing repeated deal reviews",
  ];

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
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 border text-sm uppercase tracking-[0.2em] font-medium"
            style={{
              background: EARLY_ACCESS_COLORS.tagBg,
              borderColor: EARLY_ACCESS_COLORS.borderMuted,
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            <Zap className="w-4 h-4 shrink-0" style={{ color: EARLY_ACCESS_COLORS.border }} />
            <span style={{ fontFamily: "var(--font-lato), sans-serif" }}>
              1-4 unit investment property analysis
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            A property is not just good or bad.{" "}
            <span
              className="block mt-2"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              It is good or bad for a particular investor.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto leading-relaxed"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana is designed to help real estate investors and agents evaluate multiple properties
            faster, process hundreds of decision factors more efficiently, and check each
            opportunity against the investor&apos;s specific strategy.
          </p>

          <p
            className="text-base sm:text-lg mb-10 max-w-2xl mx-auto"
            style={{
              color: EARLY_ACCESS_COLORS.textMuted,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Join the interest list to follow the launch of a faster, deeper way to analyze 1-4 unit
            investment properties.
          </p>

          <a
            href={role === "agent" ? AGENT_FORM_URL : INVESTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
              fontFamily: "var(--font-montserrat), sans-serif",
            }}
          >
            Join the Interest List
            <ArrowRight className="w-5 h-5" />
          </a>

          <p
            className="mt-12 mb-4 text-base"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Select your role:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setRole("investor");
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

      <section
        ref={whyRef}
        className={`relative z-10 py-20 px-6 scroll-reveal ${whyVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            The work is not just finding a property. It is understanding the fit.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {overviewCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl border p-8 transition-shadow hover:shadow-lg text-left"
                  style={{
                    background: EARLY_ACCESS_COLORS.bgCard,
                    borderColor: card.accent,
                    boxShadow: `0 0 0 1px ${card.accent}40, 0 0 24px ${card.accent}22`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border shrink-0"
                    style={{
                      borderColor: card.accent,
                      color: card.accent,
                      boxShadow: `0 0 16px ${card.accent}55`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{
                      fontFamily: "var(--font-montserrat), sans-serif",
                      color: EARLY_ACCESS_COLORS.text,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed m-0"
                    style={{
                      color: EARLY_ACCESS_COLORS.textSecondary,
                      fontFamily: "var(--font-lato), sans-serif",
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        ref={investorsRef}
        id="investors"
        className={`relative z-10 px-6 py-24 scroll-mt-24 scroll-reveal ${investorsVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-base uppercase tracking-wider font-semibold"
            style={{
              background: "rgba(109, 109, 237, 0.12)",
              borderColor: EARLY_ACCESS_COLORS.borderMuted,
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            <TrendingUp className="w-4 h-4" style={{ color: EARLY_ACCESS_COLORS.border }} />
            <span style={{ fontFamily: "var(--font-lato), sans-serif" }}>For Investors</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What Reana is built to change
          </h2>

          <p
            className="mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana is designed to help users process more information in less time, compare
            opportunities more efficiently, and determine not just whether a property is a good
            investment, but whether it is a good investment for that investor.
          </p>

          <p
            className="mt-4 text-base sm:text-lg"
            style={{
              color: "#7C9EED",
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            The goal is not just faster analysis. It is more relevant analysis.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href={INVESTOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the Interest List
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
              See why fit matters
            </a>
          </div>
        </div>
      </section>

      <section
        ref={investorsProRef}
        id="investors-pro"
        className={`relative z-10 px-6 py-24 scroll-reveal ${investorsProVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-[28px] border px-8 py-10 md:px-12 md:py-12"
            style={{
              background: "linear-gradient(180deg, rgba(20, 29, 76, 0.82), rgba(15, 20, 52, 0.92))",
              borderColor: "rgba(109, 109, 237, 0.42)",
              boxShadow: "0 20px 60px rgba(4, 9, 30, 0.35)",
            }}
          >
            <p
              className="text-base sm:text-lg"
              style={{ color: EARLY_ACCESS_COLORS.textSecondary }}
            >
              Not every good deal is your deal.
            </p>
            <p
              className="mt-4 text-xl sm:text-2xl font-semibold"
              style={{
                color: EARLY_ACCESS_COLORS.text,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              A flip investor, a long-term rental investor, and a BRRRR investor can look at the
              same property and reach very different conclusions.
            </p>
            <p
              className="mt-6 text-base sm:text-lg leading-relaxed"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Reana is designed to help make that distinction by checking the property against the
              investor&apos;s own strategy, not just general market data.
            </p>
          </div>
        </div>
      </section>

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
            For Investors
          </h3>
          <p
            className="mt-6 text-base sm:text-lg max-w-3xl mx-auto text-center leading-relaxed"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Whether you buy to hold, flip, or use the BRRRR method, Reana is designed to help you
            evaluate more properties without sacrificing depth. Instead of bouncing between
            websites, spreadsheets, notes, and assumptions, Reana is being built to help organize
            the work so you can make decisions faster and with greater confidence.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {investorSupportCards.map((item) => (
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
        </div>
      </section>

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
            A property is not one decision. It is a chain of decisions.
          </h3>
          <p
            className="mt-4 text-center text-base max-w-3xl mx-auto"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            The real challenge is not seeing one property. It is reviewing enough properties to
            find the right one.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {investorAudience.map((label) => (
              <span
                key={label}
                className="px-4 py-3 rounded-xl border text-base font-medium text-center leading-snug"
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

      <section
        ref={investorsFaqRef}
        className={`relative z-10 px-6 py-24 scroll-reveal ${investorsFaqVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl border px-8 py-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(178,75,243,0.22), rgba(79,124,255,0.16))",
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 0 40px rgba(178, 75, 243, 0.15)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Compare more. Miss less. Move faster.
            </h3>
            <p
              className="mt-4 mb-7 text-base sm:text-lg max-w-3xl mx-auto text-center"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Reana is being built to help investors and agents review more opportunities, compare
              them more efficiently, identify problems sooner, and move forward with better-informed
              decisions. The purpose is not to create more noise. It is to turn a heavy analysis
              process into a clearer path forward.
            </p>
            <h4
              className="text-lg sm:text-xl font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif", color: EARLY_ACCESS_COLORS.text }}
            >
              Want early access to Reana?
            </h4>
            <p
              className="mt-4 text-base sm:text-lg max-w-2xl mx-auto"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Join the interest list to follow the build, receive updates, and be among the first
              to know when access opens.
            </p>
            <a
              href={INVESTOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the Interest List
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section
        ref={agentsRef}
        id="agents"
        className={`relative z-10 px-6 py-24 scroll-mt-24 scroll-reveal ${agentsVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-base uppercase tracking-wider font-semibold"
            style={{
              background: "rgba(178, 75, 243, 0.12)",
              borderColor: "rgba(178, 75, 243, 0.5)",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            <User className="w-4 h-4 shrink-0" style={{ color: "#B24BF3" }} />
            <span style={{ fontFamily: "var(--font-lato), sans-serif" }}>For Agents</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            Agents already do a tremendous amount of work to help buyers evaluate properties and
            make sound decisions.
          </h2>

          <p
            className="mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana is designed to support that work, not replace it, by helping organize and
            accelerate the analysis process so agents can bring more clarity, speed, and confidence
            to the client conversation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <a
              href={AGENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the Interest List
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
              See how it supports the workflow
            </a>
          </div>
        </div>
      </section>

      <section
        ref={agentsClientsRef}
        id="agents-how"
        className={`relative z-10 px-6 py-24 scroll-reveal ${agentsClientsVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <h3
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              color: EARLY_ACCESS_COLORS.text,
            }}
          >
            The analysis burden does not disappear just because an agent is involved.
          </h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Serious investors review multiple properties before deciding what deserves more time.",
              "Each property carries price, rent, neighborhood, financing, operating cost, rehab, resale, and strategy-fit questions.",
              "The more properties compared, the more time and second-guessing pile up for both agent and client.",
            ].map((text) => (
              <div
                key={text.slice(0, 32)}
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
        </div>
      </section>

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
            {agentSupportCards.map((item) => (
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
        </div>
      </section>

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
            A good investment is not enough. It has to fit the investor.
          </h3>
          <div className="mt-10 space-y-4 max-w-3xl mx-auto">
            {agentAudience.map((item) => (
              <div
                key={item}
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
            className="mt-10 text-center text-base max-w-3xl mx-auto"
            style={{
              color: EARLY_ACCESS_COLORS.textSecondary,
              fontFamily: "var(--font-lato), sans-serif",
            }}
          >
            Reana is designed to help agents and investors determine not just whether a property
            looks strong in general, but whether it fits the strategy of the person considering it.
          </p>
        </div>
      </section>

      <section
        ref={faqRef}
        className={`relative z-10 px-6 py-20 scroll-reveal ${faqVisible ? "is-visible" : ""}`}
      >
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl border px-8 py-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(178,75,243,0.22), rgba(79,124,255,0.16))",
              borderColor: "rgba(255,255,255,0.12)",
              boxShadow: "0 0 40px rgba(178, 75, 243, 0.15)",
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Want early access to Reana?
            </h3>
            <p
              className="mt-4 mb-7 text-base sm:text-lg max-w-2xl mx-auto text-center"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Join the interest list to follow the build, receive updates, and be among the first
              to know when access opens.
            </p>
            <a
              href={role === "agent" ? AGENT_FORM_URL : INVESTOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white no-underline transition-opacity hover:opacity-95 shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${EARLY_ACCESS_COLORS.gradientFrom}, ${EARLY_ACCESS_COLORS.gradientMid}, ${EARLY_ACCESS_COLORS.gradientTo})`,
                fontFamily: "var(--font-montserrat), sans-serif",
              }}
            >
              Join the Interest List
              <ArrowRight className="w-5 h-5" />
            </a>
            <p
              className="mt-4 text-base sm:text-lg"
              style={{
                color: EARLY_ACCESS_COLORS.textSecondary,
                fontFamily: "var(--font-lato), sans-serif",
              }}
            >
              Reana is designed to compress the analysis burden.
            </p>
          </div>
        </div>
      </section>

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
