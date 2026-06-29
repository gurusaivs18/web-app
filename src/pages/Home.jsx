import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { companyInfo } from "../data/company";
import { stats } from "../data/stats";
import "../css/Home.css";
import "../css/ScrollReveal.css";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { useAutoScroll } from "../hooks/useAutoScroll";
import ceoImage from "../assets/jsbGroupWebsite/assets-jsb.webp";

import uaeBulls from "../assets/Brand-Logos/uae-bulls.webp";
import motiv8 from "../assets/Brand-Logos/motiv8.webp";
import pressmans from "../assets/Brand-Logos/pressmans (2).webp";
import vkTech from "../assets/Brand-Logos/vanityKart.webp";
import targetOne from "../assets/Brand-Logos/target1.webp";
import ventures from "../assets/Brand-Logos/nbVentures.webp";
import denaster from "../assets/Brand-Logos/denaster.webp";
import activ8 from "../assets/Brand-Logos/activ8.webp";
import bvbLeague from "../assets/Brand-Logos/bvb.webp";
import beijingLu from "../assets/Brand-Logos/beijing-lu.webp";
import biriyaniBox from "../assets/Brand-Logos/biriyani.webp";
import boosterJuice from "../assets/Brand-Logos/boosterjuice.webp";
import epicFitouts from "../assets/Brand-Logos/epicfitouts.webp";
import garmin from "../assets/Brand-Logos/garmin.webp";
import harrisonDigital from "../assets/Brand-Logos/Harrison.webp";
import hongKong from "../assets/Brand-Logos/hongkong.webp";
import inov8 from "../assets/Brand-Logos/inov8.webp";
import khichdiTales from "../assets/Brand-Logos/kichdi-tales.webp";
import zeroG from "../assets/Brand-Logos/zeroG.webp";
import monkeyBox from "../assets/Brand-Logos/monkeybox.webp";

import pizzaTales from "../assets/Brand-Logos/pizza-tales.webp";

import snapFitness from "../assets/Brand-Logos/snapFitness.webp";

import thaliTales from "../assets/Brand-Logos/thali-tales.webp";
import yellowChilli from "../assets/Brand-Logos/yellow-chilly.webp";

import uPro from "../assets/Brand-Logos/upro.webp";
import vipCosmetics from "../assets/Brand-Logos/vipcosmo.webp";

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

const brandLogos = [
  {
    img: uaeBulls,
    url: "https://uaebulls.ae",
    order: 20,
    name: "UAE Bulls",
    slug: "uae-bulls",
    desc: "Neelesh Bhatnagar's passion for cricket led him to own the Delhi Bulls team. After eight seasons, the U.A.E. Bulls achieved a historic milestone — Champions of Season 9 (2025–26).",
  },
  {
    img: motiv8,
    url: "https://motiv8.ae/",
    order: 8,
    name: "Motiv8",
    slug: "motiv8",
    desc: "An athleisure multi-designer women's-only retail store. Brands include Michi, Port De Bras, Yoga Democracy, SquatWolf, Manduka, Bala, Women's Best, and more.",
  },
  {
    img: pressmans,
    url: "https://pressmans.com/",
    order: 19,
    name: "Pressman's Sandwiches",
    slug: "pressmans",
    desc: "A homegrown brand specializing in healthy and fresh sandwiches and salads. 10 live locations across the U.A.E. and expanding in India through the cloud kitchen space.",
  },
  {
    img: vkTech,
    url: "https://vktechnologiesme.com/",
    order: 7,
    name: "VK Technologies",
    slug: "vk-technologies",
    desc: "Customized software solutions — POS systems, reporting tools, e-commerce development, and seamless ERP integration including Oracle NetSuite and Zoho.",
  },
  {
    img: targetOne,
    url: "https://targetoneme.com/",
    order: 5,
    name: "Target One",
    slug: "target-one",
    desc: "Established 2016. Leading distributor of world-class electronic brands — Marshall, Jabra, Titan, Ugreen, JLab, Dicota, Alogic, and more across the region.",
  },
  {
    img: ventures,
    url: "https://nbventuresme.com/",
    order: 4,
    name: "NB Ventures",
    slug: "nb-ventures",
    desc: "A growth-stage venture fund based in the U.A.E. with a portfolio of 70+ Indian start-ups. Strategic Director Rushab Bhatnagar spearheads the Bangalore office.",
  },
  {
    img: denaster,
    url: "https://www.denaster.com/",
    order: 6,
    name: "Denaster",
    slug: "denaster",
    desc: "Joined the group in 2021. Distributes Shokz, GoCube, Sphero, Eilik, thinOptics, Ring, Boxbollen, ShiftCam, and Ampere across the region.",
  },
  {
    img: biriyaniBox,
    url: "",
    order: 18,
    name: "Biriyani Box",
    slug: "biriyani-box",
    desc: "Part of JSB Group's growing Food & Beverage portfolio, focused on delivering flavorful and authentic biriyani experiences.",
  },
  {
    img: boosterJuice,
    url: "https://boosterjuice.com/",
    order: 21,
    name: "Booster Juice",
    slug: "booster-juice",
    desc: "International smoothie and healthy beverage brand operating under JSB Group's F&B portfolio.",
  },
  {
    img: inov8,
    url: "https://www.inov8.ae/",
    order: 9,
    name: "Harrison / Inov8",
    slug: "inov8",

    desc: "Duty-free retail operator with presence across Dubai, Abu Dhabi, and Qatar Duty Free locations.",
  },
  {
    img: activ8,
    url: "https://activ8.ae/",
    order: 10,
    name: "Activ8",
    slug: "activ8",
    desc: "Retail business supporting premium fitness, wellness, and technology retail concepts across the UAE.",
  },
  {
    img: harrisonDigital,
    url: "",
    order: 13,
    name: "Harrison Digital",
    slug: "harrison-digital",
    desc: "Part of the group's digital retail and distribution ecosystem supporting brand expansion initiatives.",
  },
  {
    img: garmin,
    url: "https://www.garmin.ae/",
    order: 11,
    name: "Garmin by Activ8",
    slug: "garmin-by-activ8",
    desc: "Authorized Garmin retailer with multiple stores across the UAE carrying Garmin and Shokz products.",
  },
  {
    img: zeroG,
    url: "https://zerogmattress.ae/",
    order: 14,
    name: "ZeroG Beds & Mattresses",
    slug: "zerog-beds",
    desc: "Homegrown sleep and wellness brand delivering premium mattresses and bedding solutions.",
  },
  {
    img: vipCosmetics,
    url: "",
    order: 15,
    name: "VIP Cosmetics",
    slug: "vip-cosmetics",
    desc: "Skincare distribution arm under Target One representing premium beauty and skincare brands.",
  },
  {
    img: monkeyBox,
    url: "https://monkeyboxforkids.in/",
    order: 22,
    name: "Monkey Box",
    slug: "monkey-box",
    desc: "Lifestyle and consumer-focused brand within JSB Group's retail and distribution ecosystem.",
  },
  {
    img: snapFitness,
    url: "https://www.snapfitness.com/ae",
    order: 12,
    name: "Snap Fitness",
    slug: "snap-fitness",
    desc: "Global fitness franchise with multiple locations across the UAE promoting healthy lifestyles.",
  },
  {
    img: uPro,
    url: "https://upro.ae/",
    order: 15,
    name: "United Pro Sports",
    slug: "u-pro",
    desc: "World-class indoor sports facility featuring football, cricket, basketball, volleyball, badminton, and more.",
  },
  {
    img: bvbLeague,
    url: "https://bvbpro.com/",
    order: 16,
    name: "BVB League",
    slug: "bvb-league",
    desc: "Franchise-based beach volleyball league combining elite sports, entertainment, and lifestyle experiences.",
  },
  {
    img: epicFitouts,
    url: "https://www.epicfitout.com/",
    order: 17,
    name: "Epic Fitouts",
    slug: "epic-fitouts",
    desc: "Provider of premium interior design, fitout services, and customized outdoor furniture solutions.",
  },
  {
    img: yellowChilli,
    url: "https://theyellowchilli.com/",
    order: 23,
    name: "Yellow Chilli",
    slug: "yellow-chilli",
    desc: "Indian restaurant brand operating under JSB Group's India vertical.",
  },
  {
    img: pizzaTales,
    url: "",
    order: 24,
    name: "Pizza Tales",
    slug: "pizza-tales",
    desc: "Part of JSB Group's India food and beverage portfolio.",
  },
  {
    img: khichdiTales,
    url: "",
    order: 25,
    name: "Khichdi Tales",
    slug: "khichdi-tales",
    desc: "Indian food concept focused on comfort and traditional meals.",
  },
  {
    img: thaliTales,
    url: "",
    order: 3,
    name: "Thali Tales",
    slug: "thali-tales",
    desc: "Traditional Indian dining concept within JSB Group's India operations.",
  },
  {
    img: hongKong,
    url: "",
    order: 2,
    name: "Hong Kong",
    slug: "hong-kong",
    desc: "Part of JSB Group's India hospitality and restaurant portfolio.",
  },
  {
    img: beijingLu,
    url: "",
    order: 1,
    name: "Beijing Lu",
    slug: "beijing-lu",
    desc: "Asian dining concept under JSB Group's India vertical.",
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
  useAutoScroll(trackRef, 0.2);

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

        <div className="directors-marquee" data-reveal="up" data-delay="150">
          <div className="directors-track-marquee" ref={trackRef}>
            {doubled.map((d, i) => (
              <div
                key={`${d.slug}-${i}`}
                className="director-card"
                onClick={() => onSelect(d)}
              >
                <div className="director-photo-wrap">
                  {d.img ? (
                    <img
                      src={d.img}
                      alt={d.name}
                      className="director-photo"
                      loading="lazy"
                    />
                  ) : (
                    <div className="director-avatar-fallback">
                      {d.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                  <div className="director-photo-accent" />
                </div>
                <div className="director-text-col">
                  <h4 className="director-name">{d.name}</h4>
                  <p className="director-role">{d.role}</p>
                  <p className="director-bio">{d.bio}</p>
                  <span
                    className="director-know-more"
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
    </section>
  );
}

/* ─── Verticals Slider ───────────────────────────────────────── */
function VerticalsSlider({ onSelect }) {
  const trackRef = useRef();
  useAutoScroll(trackRef, 0.2);

  const sorted = [...brandLogos].sort((a, b) => a.order - b.order);
  const doubled = [...sorted, ...sorted];

  return (
    <section className="home-verticals-logos">
      <div className="container">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">Verticals</span>
        </div>
      </div>

      <div className="verticals-slider-wrap">
        <button
          className="slider-nav slider-nav-left"
          onClick={() => {
            trackRef.current.scrollLeft -= 260;
          }}
        >
          ‹
        </button>

        <div
          className="verticals-slider-outer"
          data-reveal="up"
          data-delay="200"
        >
          <div className="verticals-track" ref={trackRef}>
            {doubled.map((logo, i) => (
              <div
                key={i}
                className="vertical-slide-item"
                onClick={() => onSelect(logo)}
                style={{ cursor: "pointer" }}
              >
                <div className="vertical-logo-box">
                  <img
                    src={logo.img}
                    alt={logo.name}
                    data-brand={logo.name}
                    loading="lazy"
                  />
                </div>
                <div className="vertical-card-divider" />
                <div className="vertical-card-body">
                  <p className="vertical-brand-name">{logo.name}</p>
                  <p className="vertical-brand-desc">{logo.desc}</p>
                  <span
                    className="vertical-know-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(logo);
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
            trackRef.current.scrollLeft += 260;
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
function Home() {
  useScrollReveal();

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
            <p
              className="ceo-role"
              style={{ color: "red" }}
              data-reveal="right"
              data-delay="150"
            >
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

      {/* ── VERTICALS SLIDER ── */}
      <VerticalsSlider onSelect={setSelectedBrand} />

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
