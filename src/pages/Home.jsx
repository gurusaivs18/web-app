import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { companyInfo } from "../data/company";
import { stats } from "../data/stats";
import "../css/Home.css";
import "../css/ScrollReveal.css";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ceoImage from "../assets/jsbGroupWebsite/assets-jsb.webp";
// CARDS BACKGROUND  IMG IMPORTS
// import interiorImg from "../assets/card-images/interior.png";
// import retailImg from "../assets/card-images/retail.png";
// import techImg from "../assets/card-images/techno.png";
// import fitnessImg from "../assets/card-images/sports_fitness1.png";
// import fnbImg from "../assets/card-images/fnb.png";
// import vcImg from "../assets/card-images/venture.png";

// break

import rushab from "../assets/Partners/rushab-assets-1.webp";
import sinha from "../assets/Partners/sanjeev-assets-1.webp";
import sanal from "../assets/Partners/sanal-assets-1.webp";
import deep from "../assets/Partners/deep-asset-1.webp";

/* ─── CEO Writeup ─────────────────────────────────────────────── */
const ceoWriteup = `Neelesh Bhatnagar is an entrepreneur with over three decades of experience spanning the Middle East and India. As the CEO & Founder of JSB Group, he has built a diversified conglomerate with interests across retail, fitness, hospitality, healthcare, and technology.

His vision has been the driving force behind JSB Group's expansion into multiple verticals, creating an ecosystem of businesses that complement and strengthen one another. Under his leadership, JSB Group has grown from a single venture into a multi-faceted organisation with a presence across the UAE and beyond.

Neelesh is known for his ability to identify opportunities ahead of the curve, his hands-on leadership style, and his commitment to building businesses that create lasting value — not just for shareholders, but for communities and people.

His journey is one of resilience, vision, and an unwavering belief in the power of entrepreneurship to transform lives.`;

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
  <svg viewBox="0 0 24 24">
    <path d="M3 21h18v-2H3v2zm2-4h3V7H5v10zm5 0h3V3h-3v14zm5 0h3v-8h-3v8z" />
  </svg>,
];

const verticalCategories = [
  {
    label: "Venture Capitalist",
    // img: vcImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 20h18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 16l5-5 4 3 7-8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 6h5v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Retail & Distribution",
    // img: retailImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M7 8V6a5 5 0 0 1 10 0v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="8"
          width="16"
          height="13"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 12a3 3 0 0 0 6 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Technology",
    // img: techImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="7"
          y="7"
          width="10"
          height="10"
          rx="1.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <rect
          x="10"
          y="10"
          width="4"
          height="4"
          rx="0.6"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Food & Beverage (F&B)",
    // img: fnbImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3v7a2 2 0 0 0 2 2v9M7 3v5M9 3v5M11 3v7a2 2 0 0 1-2 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3c-1.7 0-3 1.8-3 4s1.3 4 3 4v10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Interior Fitout & Outdoor Furniture",
    // img: interiorImg,

    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect
          x="3"
          y="11"
          width="18"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4 17v3M20 17v3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    label: "Sports & Fitness",
    // img: fitnessImg,
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 10v4M20 10v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="1.5" y="9" width="3" height="6" rx="1" fill="currentColor" />
        <rect x="19.5" y="9" width="3" height="6" rx="1" fill="currentColor" />
        <rect
          x="5.5"
          y="7.5"
          width="2.5"
          height="9"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="16"
          y="7.5"
          width="2.5"
          height="9"
          rx="1"
          fill="currentColor"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const directors = [
  {
    name: "Manish Kishore",
    role: "Partner",
    bio: "test",
    slug: "",
    img: null,
    order: 1,
  },
  {
    name: "Rushab Bhatnagar",
    role: "Co-Founder & CEO, NOVO Labs | Strategic Director, NB Ventures",
    bio: "Bachelor's in Business & Economics from Exeter, Master's in Strategic Marketing from Imperial College. Leads NB Ventures' portfolio of 70+ Indian start-ups.",
    slug: "rushab-bhatnagar",
    img: rushab,
    order: 1,
  },
  {
    name: "Praveen Bhatnagar",
    role: "Business Consultant",
    bio: "Certified Public Accountant (U.S.) & Chartered Accountant (India). Owner of ZeroG Beds and Mattresses. Specializes in Retail, Fitness, Hospitality, and Healthcare business strategy.",
    slug: "praveen-bhatnagar",
    img: null,
    order: 2,
  },
  {
    name: "Sanjeev Sinha",
    role: "Director",
    bio: "Senior director at JSB Group contributing to the group's strategic growth across verticals.",
    slug: "sanjeev-sinha",
    img: sinha,
    order: 3,
  },
  {
    name: "Deep Bhogal",
    role: "Managing Director, Denaster",
    bio: "Over 30 years in supply and distribution across retail, software, and electronics. Led Denaster to become a multimillion-dollar SME with 100+ employees.",
    slug: "deep-bhogal",
    img: deep,
    order: 4,
  },
  {
    name: "Mohammed Ashik",
    role: "Director",
    bio: "Key leadership member driving operational excellence across JSB Group's diverse portfolio.",
    slug: "mohammed-ashik",
    img: null,
    order: 5,
  },
  {
    name: "Naz Ayat",
    role: "Sales Director",
    bio: "30+ years in software and electronics industries. Worked with major UK and international retailers including Amazon and HMV. Expert in distribution channels.",
    slug: "naz-ayat",
    img: null,
    order: 6,
  },
  {
    name: "Afshad Mistry",
    role: "Health & Wellness Lead",
    bio: "23+ years in Health and Fitness. One of the first in India to achieve ACSM Certification (2005). Spearheaded Snap Fitness UAE Master Franchise.",
    slug: "afshad-mistry",
    img: null,
    order: 7,
  },
  {
    name: "Sanal Kumar",
    role: "Director",
    bio: "Contributes strategic direction and expertise to JSB Group's expanding business verticals.",
    slug: "sanal-kumar",
    img: sanal,
    order: 8,
  },
];

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

const contactBlocks = [
  {
    text: "JSB Group operates across multiple sectors including F&B, Retail, Distribution, Fitness, Technology, Venture Capital, Interior Fitouts, and Outdoor Furniture across the UAE. ",
  },
  {
    text: " Our group is built on innovation, excellence, and purpose-driven leadership across all business verticals. ",
  },
  {
    text: "For business inquiries, partnerships, or collaborations, JSB Group welcomes opportunities to connect with global and regional partners.",
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
      const r = setTimeout(() => setValue(0), 0);
      return () => clearTimeout(r);
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
    <div
      className="stat-box"
      data-reveal="up"
      data-delay={String(index * 150 + 100)}
    >
      <div className="stat-icon">{icon}</div>
      <h2>
        {prefix}
        {animated.toLocaleString()}
        {suffix}
      </h2>
      <p className="stat-label">{item.label}</p>
      <small className="stat-desc">{item.desc}</small>
    </div>
  );
}

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

/* ─── CEO Modal ──────────────────────────────────────────────── */
function CeoModal({ onClose }) {
  return (
    <div className="ceo-modal-overlay" onClick={onClose}>
      <div className="ceo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ceo-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="ceo-modal-img-panel">
          <img src={ceoImage} alt="Neelesh Bhatnagar" />
        </div>

        <div className="ceo-modal-content">
          <span className="ceo-modal-tag">The Architect</span>
          <h2 className="ceo-modal-name">Neelesh Bhatnagar</h2>
          <p className="ceo-modal-role">CEO & Founder, JSB Group</p>
          <div className="ceo-modal-divider" />
          <div className="ceo-modal-bio">
            {ceoWriteup.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Director Modal ─────────────────────────────────────────── */
function DirectorModal({ director, onClose }) {
  if (!director) return null;
  return (
    <div className="home-modal-overlay" onClick={onClose}>
      <div className="home-modal" onClick={(e) => e.stopPropagation()}>
        <button className="home-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="home-modal-header">
          <div className="home-modal-avatar">
            {director.img ? (
              <img src={director.img} alt={director.name} />
            ) : (
              <div className="home-modal-avatar-fallback">
                {director.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}
          </div>
          <div>
            <h3 className="home-modal-name">{director.name}</h3>
            <p className="home-modal-role">{director.role}</p>
          </div>
        </div>

        <p className="home-modal-bio">{director.bio}</p>

        <a
          href={`/about#${director.slug}`}
          className="home-modal-btn"
          onClick={onClose}
        >
          Know More
        </a>
      </div>
    </div>
  );
}

/* ─── Brand Modal ────────────────────────────────────────────── */
function BrandModal({ brand, onClose }) {
  if (!brand) return null;
  return (
    <div className="home-modal-overlay" onClick={onClose}>
      <div className="home-modal" onClick={(e) => e.stopPropagation()}>
        <button className="home-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="home-modal-logo-wrap">
          <img src={brand.img} alt={brand.name} data-brand={brand.name} />
        </div>

        <h3 className="home-modal-name">{brand.name}</h3>
        <p className="home-modal-bio">{brand.desc}</p>

        <button
          className="home-modal-btn"
          onClick={() => {
            const url = brand.url;
            onClose(); // close instantly

            setTimeout(() => {
              window.open(url, "_blank", "noopener,noreferrer");
            }, 50);
          }}
        >
          Visit Website
        </button>
      </div>
    </div>
  );
}

/* ─── Directors Slider ───────────────────────────────────────── */
function DirectorsSlider({ onSelect }) {
  const trackRef = useRef();
  const wrapRef = useRef(); // NEW — measures the visible track area

  const sortedDirectors = [...directors].sort(
    (a, b) => (a.order || 999) - (b.order || 999),
  );
  const doubled = [...sortedDirectors, ...sortedDirectors];
  const slideAmount = 340;

  return (
    <section id="pillars" className="directors-section">
      <div className="container">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">Pillars</span>
        </div>

        <div className="directors-slider-wrap">
          <button
            className="slider-nav slider-nav-left"
            onClick={() => {
              trackRef.current.scrollLeft -= slideAmount;
            }}
          >
            ‹
          </button>

          <div
            className="directors-marquee"
            ref={wrapRef}
            data-reveal="up"
            data-delay="150"
          >
            <div className="directors-track-marquee" ref={trackRef}>
              {doubled.map((d, i) => (
                <div
                  key={`${d.slug}-${i}`}
                  className="pillar-card"
                  onClick={() => onSelect(d)}
                >
                  <div className="pillar-photo-wrap">
                    {d.img ? (
                      <img
                        src={d.img}
                        alt={d.name}
                        className="pillar-photo"
                        loading="lazy"
                      />
                    ) : (
                      <div className="pillar-avatar-fallback">
                        {d.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    )}
                    <div className="pillar-photo-accent" />
                  </div>
                  <div className="pillar-text-col">
                    <h4 className="pillar-name">{d.name}</h4>
                    <p className="pillar-role">{d.role}</p>
                    <p className="pillar-bio">{d.bio}</p>
                    <span
                      className="pillar-know-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(d);
                      }}
                    >
                      Know More →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="slider-nav slider-nav-right"
            onClick={() => {
              trackRef.current.scrollLeft += slideAmount;
            }}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
function VerticalsGrid({ onSelect }) {
  return (
    <section className="home-verticals">
      <div className="container">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">Verticals</span>
        </div>
        <div className="vertical-cats-grid">
          {verticalCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="vertical-cat-card"
              data-reveal="up"
              data-delay={String(i * 100 + 100)}
              onClick={() => onSelect(cat.label)}
              style={{ backgroundImage: `url(${cat.img})` }}
            >
              <div className="vertical-cat-overlay" />
              <div className="vertical-cat-content">
                {cat.icon}
                <h3>{cat.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─── Main component ─────────────────────────────────────────── */
function Home() {
  useScrollReveal();
  const navigate = useNavigate();

  const getId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  const handleVerticalClick = (title) => {
    const id = getId(title);

    navigate("/verticals", {
      state: { scrollTo: id },
    });

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);
  };

  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [ceoModalOpen, setCeoModalOpen] = useState(false); // ← CEO modal state
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setCeoModalOpen(false);
        setSelectedDirector(null);
        setSelectedBrand(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setCeoModalOpen(false);
        setSelectedDirector(null);
        setSelectedBrand(null);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  useEffect(() => {
    if (ceoModalOpen || selectedDirector || selectedBrand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [ceoModalOpen, selectedDirector, selectedBrand]);

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
            <h2 data-reveal="up">
              An Organisation Inspired by Dreams &amp; Led by Purpose.
            </h2>
            <p data-reveal="up" data-delay="200">
              {companyInfo.about}
            </p>
          </div>
        </div>
      </section>
      {/* ── CEO ── */}
      <section className="ceo-section" data-reveal="fade">
        <div className="ceo-content">
          <img src={ceoImage} alt="CEO" className="ceo-img" loading="lazy" />
          <div className="ceo-info">
            <h3 data-reveal="right">Neelesh Bhatnagar</h3>
            <p className="ceo-role" data-reveal="right" data-delay="150">
              CEO &amp; Founder
            </p>
            <p data-reveal="right" data-delay="250">
              Entrepreneur with over three decades of experience spanning the
              Middle East and India.
            </p>
            <button
              className="read-more-link"
              onClick={() => setCeoModalOpen(true)}
            >
              Read More
            </button>
          </div>
        </div>
      </section>
      {/* ── DIRECTORS SLIDER ── */}
      <DirectorsSlider onSelect={setSelectedDirector} />
      {/* ── VERTICALS GRID ── */}
      <VerticalsGrid onSelect={handleVerticalClick} />{" "}
      {/* ── IMPACT / STATS ── */}
      <section className="section home-impact" ref={sectionRef}>
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Impact</span>
          </div>
          <p className="impact-intro" data-reveal="up" data-delay="150">
            Crafting Tomorrow's Experiences: Bridging F&B, Retail, Distribution,
            and Technology for a Brighter Future.
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
      {/* ── GROUP PHOTOS ── */}
      <section className="home-group-photos">
        <div className="container">
          <div className="group-photo-grid">
            <div className="gp-col-left" data-reveal="left">
              <div className="gp-card gp-card--tall">
                <PhotoPlaceholder />
              </div>
            </div>
            <div className="gp-col-mid" data-reveal="up" data-delay="150">
              <div className="gp-card gp-card--mid">
                <PhotoPlaceholder />
              </div>
            </div>
            <div className="gp-col-right">
              <div
                className="gp-card gp-card--sm"
                data-reveal="right"
                data-delay="200"
              >
                <PhotoPlaceholder />
              </div>
              <div
                className="gp-card gp-card--sm"
                data-reveal="right"
                data-delay="350"
              >
                <PhotoPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── TESTIMONIALS ── */}
      <section className="home-testimonials">
        <div className="testimonials-overlay">
          <div className="container">
            <div className="testimonials-inner">
              <div className="testimonials-heading">
                <h2 data-reveal="up">
                  Our Client
                  <br />
                  <span>That Trust Our Service</span>
                </h2>
                <p
                  className="testimonials-sub"
                  data-reveal="up"
                  data-delay="200"
                />
              </div>
              <div className="testimonials-cards">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="testimonial-card"
                    data-reveal="up"
                    data-delay={String(i * 200 + 100)}
                  >
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
      {/* ── CONTACT ── */}
      <section className="home-contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-red-panel" data-reveal="left">
              <h2>Get In Touch</h2>
              <div className="contact-info">
                <p>Archita Patel</p>
                <p>Marketing Manager</p>
                <a href="mailto:archita@nbventuresme.com">
                  archita@nbventuresme.com
                </a>
                <p>050-6785243</p>
              </div>
            </div>
            <div className="contact-text-blocks">
              {contactBlocks.map((block, i) => (
                <p
                  key={i}
                  className="contact-text-block"
                  data-reveal="right"
                  data-delay={String(i * 150 + 150)}
                >
                  {block.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── MODALS ── */}
      {ceoModalOpen && <CeoModal onClose={() => setCeoModalOpen(false)} />}
      <DirectorModal
        director={selectedDirector}
        onClose={() => setSelectedDirector(null)}
      />
      <BrandModal
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
      />
    </>
  );
}

export default Home;
