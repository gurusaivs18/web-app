import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { companyInfo } from "../data/company";
import { stats } from "../data/stats";
import "../css/Home.css";

import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";

// ── Group photos: swap these placeholders for your real images ──
// import groupPhoto1 from "../assets/jsbGroupWebsite/group-1.webp";
// import groupPhoto2 from "../assets/jsbGroupWebsite/group-2.webp";
// import groupPhoto3 from "../assets/jsbGroupWebsite/group-3.webp";
// import groupPhoto4 from "../assets/jsbGroupWebsite/group-4.webp";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";
import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
import denaster from "../assets/Brand-Logos/Denaster Logo.webp";

const statIcons = [
  /* Employees */
  <svg viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>,
  /* Revenue */
  <svg viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>,
  /* Experience */
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>,
  /* Outlets */
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4v2l8 5 8-5V4zM4 13v7h7v-5h2v5h7v-7L12 8z" />
  </svg>,
];

const brandLogos = [
  { img: uaeBulls, url: "https://uaebulls.ae", order: 1 },
  { img: motiv8, url: "https://motiv8.ae/", order: 2 },
  { img: pressmans, url: "https://pressmans.com/", order: 3 },
  { img: vkTech, url: "https://vktechnologiesme.com/", order: 4 },
  { img: targetOne, url: "https://targetoneme.com/", order: 5 },
  { img: nbVentures, url: "https://nbventuresme.com/", order: 6 },
  { img: denaster, url: "https://www.denaster.com/", order: 7 },
];

// ── Testimonials ──
const testimonials = [
  {
    quote:
      "Working with JSB Group has been a transformative experience. Their strategic vision and hands-on approach made all the difference in our growth journey across the region.",
    author: "Client Name",
    role: "CEO, Partner Company",
  },
  {
    quote:
      "The JSB team brings unmatched depth of experience across sectors. Their commitment to excellence and long-term relationships sets them apart from any other group we've worked with.",
    author: "Client Name",
    role: "Director, Partner Company",
  },
];

// ── Contact info blocks (right side of GET IN TOUCH) ──
const contactBlocks = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer ing elit sed diam nonummy nibh euismo tincidunt ut laoreet dolore magna.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer ing elit sed diam nonummy nibh euismo tincidunt ut laoreet dolore magna.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer ing elit sed diam nonummy nibh euismo tincidunt ut laoreet dolore magna.",
  },
];

/* ─── Animation helpers ─────────────────────────────────────── */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseStatValue(value) {
  const match = value.match(/^([+]?)([\d,]+)\s*([KkMmBb]?)([^0-9]*)$/);
  if (!match) return { prefix: "", numeric: 0, multiplier: 1, suffix: value };
  const prefix = match[1];
  const raw = parseInt(match[2].replace(/,/g, ""), 10);
  const letter = match[3].toUpperCase();
  const tail = match[4];
  const multiplierMap = { K: 1_000, M: 1_000_000, B: 1_000_000_000 };
  const multiplier = multiplierMap[letter] || 1;
  const suffix = letter ? letter + tail : tail;
  return { prefix, numeric: raw, multiplier, suffix };
}

function useCountAnimation(
  target,
  duration = 1800,
  delay = 0,
  trigger = false,
) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) {
      const reset = setTimeout(() => setValue(0), 0);
      return () => clearTimeout(reset);
    }
    const timeout = setTimeout(() => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(easeOutExpo(progress) * target));
        if (progress < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, target, duration, delay]);

  return value;
}

function StatBox({ item, icon, index, trigger }) {
  const { prefix, numeric, suffix } = parseStatValue(item.value);
  const animated = useCountAnimation(numeric, 1800, index * 120, trigger);
  return (
    <div className="stat-box">
      <div className="stat-icon">{icon}</div>
      <h2>
        {prefix}
        {animated.toLocaleString()}
        {suffix}
      </h2>
      <p className="stat-label">{item.label}</p>
      <p className="stat-desc">
        Lorem ipsum dolor sit amet,
        <br />
        Lorem ipsum
      </p>
    </div>
  );
}

/* ─── Placeholder component ─────────────────────────────────── */
function PhotoPlaceholder({ label = "Add Group Photo" }) {
  return (
    <div className="group-photo-placeholder">
      <svg viewBox="0 0 48 48" fill="none">
        <rect
          x="4"
          y="8"
          width="40"
          height="32"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="18" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M4 36l10-10 8 8 8-10 14 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
function Home() {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const resetTimer = setTimeout(() => setTriggered(false), 0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      clearTimeout(resetTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />

      {/* ── INTRO ── */}
      <section className="section home-intro">
        <div className="container">
          <div className="home-intro-text">
            <h2>An Organisation Inspired by Dreams &amp; Led by Purpose.</h2>
            <p>{companyInfo.about}</p>
          </div>
        </div>
      </section>

      {/* ── CEO ── */}
      <section className="ceo-section">
        <div className="ceo-content">
          <img src={ceoImage} alt="CEO" className="ceo-img" loading="lazy" />
          <div className="ceo-info">
            <h3>Neelesh Bhatnagar</h3>
            <p className="ceo-role">CEO &amp; Founder</p>
            <p>
              Entrepreneur with over three decades of experience spanning the
              Middle East and India.
            </p>
            <a href="/about" className="read-more-link">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* ── VERTICALS ── */}
      <section className="home-verticals-logos">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Verticals</span>
          </div>
          <div className="brand-logo-strip">
            {[...brandLogos]
              .sort((a, b) => a.order - b.order)
              .map((logo, i) => (
                <div
                  key={i}
                  className="brand-logo-item"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <a href={logo.url} target="_blank" rel="noopener noreferrer">
                    <div className="brand-logo-img-wrap">
                      <img src={logo.img} alt="brand logo" loading="lazy" />
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT ──
          Design: light-gray full-width band, 4 stat columns each with
          large red circle icon, red number, bold label, description text.
          No individual card borders — stats float on the gray bg. */}
      <section className="section home-impact" ref={sectionRef}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Impact</span>
          </div>
          <p className="impact-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <div className="stats-grid">
            {stats.map((item, i) => (
              <StatBox
                key={i}
                item={item}
                icon={statIcons[i]}
                index={i}
                trigger={triggered}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── GROUP PHOTO GRID ──
          Design: 3-column layout with rounded-corner cards on white bg:
            Col 1 (left, ~40%):  1 tall photo spanning full height
            Col 2 (mid, ~35%):   1 slightly shorter photo centred vertically
            Col 3 (right, ~25%): 2 photos stacked with a gap

          To use real photos, uncomment the <img> tags and remove the
          <PhotoPlaceholder /> components. Import images at the top. */}
      <section className="home-group-photos">
        <div className="container">
          <div className="group-photo-grid">
            {/* Column 1 – large left */}
            <div className="gp-col-left">
              <div className="gp-card gp-card--tall">
                {/* <img src={groupPhoto1} alt="JSB Group" loading="lazy" /> */}
                <PhotoPlaceholder />
              </div>
            </div>

            {/* Column 2 – centre */}
            <div className="gp-col-mid">
              <div className="gp-card gp-card--mid">
                {/* <img src={groupPhoto2} alt="JSB Group event" loading="lazy" /> */}
                <PhotoPlaceholder />
              </div>
            </div>

            {/* Column 3 – two stacked right */}
            <div className="gp-col-right">
              <div className="gp-card gp-card--sm">
                {/* <img src={groupPhoto3} alt="JSB Group office" loading="lazy" /> */}
                <PhotoPlaceholder />
              </div>
              <div className="gp-card gp-card--sm">
                {/* <img src={groupPhoto4} alt="JSB Group team" loading="lazy" /> */}
                <PhotoPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──
          Design: light background with subtle tech/city bg image,
          left side has "OUR CLIENT / THAT TRUST OUR SERVICE" in dark/red bold,
          subtext, right side has 2 white cards with large red open/close quotes. */}
      <section className="home-testimonials">
        <div className="testimonials-overlay">
          <div className="container">
            <div className="testimonials-inner">
              {/* Left heading */}
              <div className="testimonials-heading">
                <h2>
                  Our Client
                  <br />
                  <span>That Trust Our Service</span>
                </h2>
                <p className="testimonials-sub">
                  Lorem ipsum dolor sit amet, consectetuer ing elit sed diam
                  nonummy nibh euismo tincidunt ut laoreet dolore magna.
                </p>
              </div>

              {/* Right cards */}
              <div className="testimonials-cards">
                {testimonials.map((t, i) => (
                  <div key={i} className="testimonial-card">
                    <div className="tq-open">&#8220;</div>
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="tq-close">&#8221;</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ──
          Design: full-width two-column section on light-gray bg.
          Left: dark red box with "GET IN TOUCH" heading, YouTube icon, body text.
          Right: 3 stacked paragraphs of contact/info text. */}
      <section className="home-contact">
        <div className="container">
          <div className="contact-inner">
            {/* Left red panel */}
            <div className="contact-red-panel">
              <div className="contact-yt-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.2 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.7 2.8-5.7 2.7z" />
                </svg>
              </div>
              <h2>Get In Touch</h2>
              <p>Archita Patel</p>
              <p>Marketing Manager</p>
              <a href="archita@nbventuresme.com" style={{ color: "white" }}>
                archita@nbventuresme.com
              </a>
              <p>050-6785243</p>
            </div>

            {/* Right text blocks */}
            <div className="contact-text-blocks">
              {contactBlocks.map((block, i) => (
                <p key={i} className="contact-text-block">
                  {block.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
