import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { companyInfo } from "../data/company";
import { stats } from "../data/stats";
import "../css/Home.css";

import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
// import monkeyBox from "../assets/Brand-Logos/Monkey Box logo.webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";
import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
import denaster from "../assets/Brand-Logos/Denaster Logo.webp";

const statIcons = [
  <svg viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4v2l8 5 8-5V4zM4 13v7h7v-5h2v5h7v-7L12 8z" />
  </svg>,
];
const brandLogos = [
  { img: uaeBulls, url: "https://uaebulls.ae", order: 3 },
  { img: vkTech, url: "https://vktechnologiesme.com/", order: 2 },
  { img: nbVentures, url: "https://nbventuresme.com/", order: 1 },
  { img: targetOne, url: "https://targetoneme.com/", order: 4 },
  { img: pressmans, url: "https://pressmans.com/", order: 5 }, // fixed
  { img: motiv8, url: "https://motiv8.ae/", order: 6 },
  { img: denaster, url: "https://www.denaster.com/", order: 7 },
];
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseStatValue(value) {
  const match = value.match(/^([\d,]+)\s*([KkMmBb]?)([^0-9]*)$/);
  if (!match) return { numeric: 0, multiplier: 1, suffix: value };
  const raw = parseInt(match[1].replace(/,/g, ""), 10);
  const letter = match[2].toUpperCase();
  const tail = match[3];
  const multiplierMap = { K: 1_000, M: 1_000_000, B: 1_000_000_000 };
  const multiplier = multiplierMap[letter] || 1;
  const suffix = letter ? letter + tail : tail;
  return { numeric: raw, multiplier, suffix };
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
  const { numeric, suffix } = parseStatValue(item.value);
  const animated = useCountAnimation(numeric, 1800, index * 120, trigger);
  return (
    <div className="stat-box">
      <div className="stat-icon">{icon}</div>
      <h2>
        {animated.toLocaleString()}
        {suffix}
      </h2>
      <p>{item.label}</p>
      <small>Lorem ipsum dolor sit amet</small>
    </div>
  );
}

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
      ``;
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />

      {/* INTRO */}
      <section className="section home-intro">
        <div className="container">
          <div className="home-intro-text">
            <h2>An Organisation Inspired by Dreams &amp; Led by Purpose.</h2>
            <p>{companyInfo.about}</p>
          </div>
        </div>
      </section>

      {/* CEO — no section class, image section bleeds edge to edge with no extra padding */}
<section className="ceo-section">
  <div className="ceo-content">
    <img
      src={ceoImage}
      alt="Neelesh Bhatnagar"
      className="ceo-img"
      loading="lazy"
    />

    <div className="ceo-info">
      <h3>Neelesh Bhatnagar</h3>
      <p className="ceo-role">CEO & Founder</p>
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
      {/* VERTICALS — no section class, padding controlled in CSS */}
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
                    <img src={logo.img} alt="brand logo" loading="lazy" />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section home-impact" ref={sectionRef}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Impact</span>
          </div>
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
    </>
  );
}

export default Home;
