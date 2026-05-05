// import { useEffect, useRef, useState } from "react";
// import Hero from "../components/Hero";
// import { companyInfo } from "../data/company";
// import { stats } from "../data/stats";
// import "../css/Home.css";

// import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";

// import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
// import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
// import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
// import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
// import targetOne from "../assets/Brand-Logos/targetone.webp";
// import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
// import denaster from "../assets/Brand-Logos/Denaster Logo.webp";

// const statIcons = [
//   <svg viewBox="0 0 24 24">
//     <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//   </svg>,
//   <svg viewBox="0 0 24 24">
//     <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
//   </svg>,
//   <svg viewBox="0 0 24 24">
//     <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//   </svg>,
//   <svg viewBox="0 0 24 24">
//     <path d="M20 4H4v2l8 5 8-5V4zM4 13v7h7v-5h2v5h7v-7L12 8z" />
//   </svg>,
// ];

// const brandLogos = [
//   {
//     img: uaeBulls,
//     url: "https://uaebulls.ae",
//     order: 1,
//     name: "UAE Bulls",
//     slug: "uae-bulls",
//     desc: "Neelesh Bhatnagar's passion for cricket led him to own the Delhi Bulls team. After eight seasons of perseverance, the U.A.E. Bulls achieved a historic milestone — winning the league for the first time, lifting the trophy as Champions of Season 9 (2025–26).",
//   },
//   {
//     img: motiv8,
//     url: "https://motiv8.ae/",
//     order: 2,
//     name: "Motiv8",
//     slug: "motiv8",
//     desc: "An athleisure multi-designer women's-only retail store. Brands include Michi (Canada), Port De Bras, Yoga Democracy (U.S.A.), SquatWolf (U.A.E.), Manduka (U.S.A.), Bala, Women's Best (Austria), and more.",
//   },
//   {
//     img: pressmans,
//     url: "https://pressmans.com/",
//     order: 3,
//     name: "Pressman's Sandwiches",
//     slug: "pressmans",
//     desc: "A homegrown brand specializing in healthy and fresh sandwiches and salads. Successfully expanded to 10 live locations across the U.A.E. and has made its mark in India through the cloud kitchen space.",
//   },
//   {
//     img: vkTech,
//     url: "https://vktechnologiesme.com/",
//     order: 4,
//     name: "VK Technologies",
//     slug: "vk-technologies",
//     desc: "Specializing in customized software solutions — POS systems, reporting tools, e-commerce website development, and seamless ERP integration including Oracle NetSuite and Zoho.",
//   },
//   {
//     img: targetOne,
//     url: "https://targetoneme.com/",
//     order: 5,
//     name: "Target One",
//     slug: "target-one",
//     desc: "Established in 2016, one of the leading distributors of world-class electronic brands in the region. Distributes Marshall, Jabra, Titan, Ugreen, JLab, Dicota, Alogic, and more.",
//   },
//   {
//     img: nbVentures,
//     url: "https://nbventuresme.com/",
//     order: 6,
//     name: "NB Ventures",
//     slug: "nb-ventures",
//     desc: "A growth-stage venture fund based in the U.A.E. with a robust portfolio of over 70 Indian start-ups. Strategic Director Rushab Bhatnagar spearheads the Bangalore office.",
//   },
//   {
//     img: denaster,
//     url: "https://www.denaster.com/",
//     order: 7,
//     name: "Denaster",
//     slug: "denaster",
//     desc: "Joined the group in 2021. Distributes brands including Shokz, GoCube, Sphero, Eilik, thinOptics, Ring, Boxbollen, ShiftCam, and Ampere across the region.",
//   },
// ];

// // ── Leadership / Directors slider ──
// const directors = [
//   {
//     name: "Praveen Bhatnagar",
//     role: "Business Consultant",
//     bio: "Certified Public Accountant (U.S.) & Chartered Accountant (India). Owner of ZeroG Beds and Mattresses. Specializes in Retail, Fitness, Hospitality, and Healthcare business strategy.",
//     slug: "praveen-bhatnagar",
//   },
//   {
//     name: "Rushab Bhatnagar",
//     role: "Co-Founder & CEO, NOVO Labs | Strategic Director, NB Ventures",
//     bio: "Holds a Bachelor's in Business & Economics from Exeter and a Master's in Strategic Marketing from Imperial College. Leads NB Ventures' portfolio of 70+ Indian start-ups.",
//     slug: "rushab-bhatnagar",
//   },
//   {
//     name: "Deep Bhogal",
//     role: "Managing Director, Denaster",
//     bio: "Over 30 years of commercial experience in supply and distribution across retail, software, and electronics. Led Denaster to become a multimillion-dollar SME with 100+ employees.",
//     slug: "deep-bhogal",
//   },
//   {
//     name: "Naz Ayat",
//     role: "Sales Director",
//     bio: "30+ years in software and electronics industries. Worked with major UK and international retailers including Amazon and HMV. Expert in distribution channels and major contract negotiations.",
//     slug: "naz-ayat",
//   },
//   {
//     name: "Afshad Mistry",
//     role: "Health & Wellness Lead",
//     bio: "23+ years in Health and Fitness. One of the first in India to achieve ACSM Certification (2005). Spearheaded Snap Fitness UAE Master Franchise and pioneered 24/7 fitness centres.",
//     slug: "afshad-mistry",
//   },
//   {
//     name: "Sanjeev Sinha",
//     role: "Director",
//     bio: "Senior director at JSB Group contributing to the group's strategic growth across verticals.",
//     slug: "sanjeev-sinha",
//   },
//   {
//     name: "Mohammed Ashik",
//     role: "Director",
//     bio: "Key leadership member driving operational excellence across JSB Group's diverse portfolio.",
//     slug: "mohammed-ashik",
//   },
//   {
//     name: "Sanal Kumar",
//     role: "Director",
//     bio: "Contributes strategic direction and expertise to JSB Group's expanding business verticals.",
//     slug: "sanal-kumar",
//   },
// ];

// // ── Testimonials ──
// const testimonials = [
//   {
//     quote:
//       "Working with JSB Group has been a transformative experience. Their strategic vision and hands-on approach made all the difference in our growth journey across the region.",
//     author: "Client Name",
//     role: "CEO, Partner Company",
//   },
//   {
//     quote:
//       "The JSB team brings unmatched depth of experience across sectors. Their commitment to excellence and long-term relationships sets them apart from any other group we've worked with.",
//     author: "Client Name",
//     role: "Director, Partner Company",
//   },
// ];

// const contactBlocks = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetuer ing elit sed diam nonummy nibh euismo tincidunt ut laoreet dolore magna.",
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetuer ing elit sed diam nonummy nibh euismo tincidunt ut laoreet dolore magna.",
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetuer ing elit sed diam nonummy nibh euismo tincidunt ut laoreet dolore magna.",
//   },
// ];

// /* ─── Animation helpers ─────────────────────────────────────── */
// function easeOutExpo(t) {
//   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
// }

// function parseStatValue(value) {
//   const match = value.match(/^([+]?)([\d,]+)\s*([KkMmBb]?)([^0-9]*)$/);
//   if (!match) return { prefix: "", numeric: 0, multiplier: 1, suffix: value };
//   const prefix = match[1];
//   const raw = parseInt(match[2].replace(/,/g, ""), 10);
//   const letter = match[3].toUpperCase();
//   const tail = match[4];
//   const multiplierMap = { K: 1_000, M: 1_000_000, B: 1_000_000_000 };
//   const multiplier = multiplierMap[letter] || 1;
//   const suffix = letter ? letter + tail : tail;
//   return { prefix, numeric: raw, multiplier, suffix };
// }

// function useCountAnimation(
//   target,
//   duration = 1800,
//   delay = 0,
//   trigger = false,
// ) {
//   const [value, setValue] = useState(0);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     if (!trigger) {
//       const reset = setTimeout(() => setValue(0), 0);
//       return () => clearTimeout(reset);
//     }
//     const timeout = setTimeout(() => {
//       const start = performance.now();
//       const step = (now) => {
//         const progress = Math.min((now - start) / duration, 1);
//         setValue(Math.round(easeOutExpo(progress) * target));
//         if (progress < 1) rafRef.current = requestAnimationFrame(step);
//       };
//       rafRef.current = requestAnimationFrame(step);
//     }, delay);
//     return () => {
//       clearTimeout(timeout);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [trigger, target, duration, delay]);

//   return value;
// }

// function StatBox({ item, icon, index, trigger }) {
//   const { prefix, numeric, suffix } = parseStatValue(item.value);
//   const animated = useCountAnimation(numeric, 1800, index * 120, trigger);
//   return (
//     <div className="stat-box">
//       <div className="stat-icon">{icon}</div>
//       <h2>
//         {prefix}
//         {animated.toLocaleString()}
//         {suffix}
//       </h2>
//       <p className="stat-label">{item.label}</p>
//       <p className="stat-desc">
//         Lorem ipsum dolor sit amet,
//         <br />
//         Lorem ipsum
//       </p>
//     </div>
//   );
// }

// function PhotoPlaceholder({ label = "Add Group Photo" }) {
//   return (
//     <div className="group-photo-placeholder">
//       <svg viewBox="0 0 48 48" fill="none">
//         <rect
//           x="4"
//           y="8"
//           width="40"
//           height="32"
//           rx="3"
//           stroke="currentColor"
//           strokeWidth="2"
//         />
//         <circle cx="18" cy="20" r="5" stroke="currentColor" strokeWidth="2" />
//         <path
//           d="M4 36l10-10 8 8 8-10 14 12"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinejoin="round"
//         />
//       </svg>
//       <span>{label}</span>
//     </div>
//   );
// }

// /* ─── Directors Slider ───────────────────────────────────────── */
// function DirectorsSlider() {
//   const [current, setCurrent] = useState(0);
//   const timerRef = useRef(null);

//   const visibleCount = 3; // show 3 cards at once on desktop

//   const startTimer = () => {
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % directors.length);
//     }, 4000);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(timerRef.current);
//   }, []);

//   const prev = () => {
//     setCurrent((p) => (p - 1 + directors.length) % directors.length);
//     startTimer();
//   };
//   const next = () => {
//     setCurrent((p) => (p + 1) % directors.length);
//     startTimer();
//   };

//   // Build visible cards (wrap-around)
//   const getVisible = () => {
//     const items = [];
//     for (let i = 0; i < visibleCount; i++) {
//       items.push(directors[(current + i) % directors.length]);
//     }
//     return items;
//   };

//   return (
//     <section className="directors-section">
//       <div className="container">
//         <div className="section-title-wrap">
//           <span className="section-title">Leadership</span>
//         </div>
//         <div className="directors-slider-wrap">
//           <button
//             className="dir-arrow dir-arrow--prev"
//             onClick={prev}
//             aria-label="Previous"
//           >
//             &#8249;
//           </button>
//           <div className="directors-cards">
//             {getVisible().map((d, i) => (
//               <div key={d.slug + i} className="director-card">
//                 <div className="director-avatar">
//                   {d.name
//                     .split(" ")
//                     .map((n) => n[0])
//                     .join("")
//                     .slice(0, 2)}
//                 </div>
//                 <h4 className="director-name">{d.name}</h4>
//                 <p className="director-role">{d.role}</p>
//                 <p className="director-bio">{d.bio}</p>
//                 <a href={`/about#${d.slug}`} className="director-know-more">
//                   Know More →
//                 </a>
//               </div>
//             ))}
//           </div>
//           <button
//             className="dir-arrow dir-arrow--next"
//             onClick={next}
//             aria-label="Next"
//           >
//             &#8250;
//           </button>
//         </div>
//         {/* Dots */}
//         <div className="directors-dots">
//           {directors.map((_, i) => (
//             <button
//               key={i}
//               className={`dir-dot${i === current ? " active" : ""}`}
//               onClick={() => {
//                 setCurrent(i);
//                 startTimer();
//               }}
//               aria-label={`Go to ${directors[i].name}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── Auto-sliding Verticals ────────────────────────────────── */
// function VerticalsSlider() {
//   const sorted = [...brandLogos].sort((a, b) => a.order - b.order);
//   // Duplicate for seamless infinite scroll
//   const doubled = [...sorted, ...sorted];

//   return (
//     <section className="home-verticals-logos">
//       <div className="container">
//         <div className="section-title-wrap">
//           <span className="section-title">Verticals</span>
//         </div>
//       </div>
//       {/* Full-width slider (outside container for edge-to-edge) */}
//       <div className="verticals-slider-outer">
//         <div className="verticals-track">
//           {doubled.map((logo, i) => (
//             <div key={i} className="vertical-slide-item">
//               <div className="brand-logo-img-wrap">
//                 <a href={logo.url} target="_blank" rel="noopener noreferrer">
//                   <img src={logo.img} alt={logo.name} loading="lazy" />
//                 </a>
//               </div>
//               <p className="vertical-brand-name">{logo.name}</p>
//               <p className="vertical-brand-desc">{logo.desc}</p>
//               <a
//                 href={`/verticals#${logo.slug}`}
//                 className="vertical-know-more"
//               >
//                 Know More →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── Main component ─────────────────────────────────────────── */
// function Home() {
//   const sectionRef = useRef(null);
//   const [triggered, setTriggered] = useState(false);

//   useEffect(() => {
//     const resetTimer = setTimeout(() => setTriggered(false), 0);
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setTriggered(true);
//       },
//       { threshold: 0.2 },
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       clearTimeout(resetTimer);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <>
//       <Hero />

//       {/* ── INTRO ── */}
//       <section className="section home-intro">
//         <div className="container">
//           <div className="home-intro-text">
//             <h2>An Organisation Inspired by Dreams &amp; Led by Purpose.</h2>
//             <p>{companyInfo.about}</p>
//           </div>
//         </div>
//       </section>

//       {/* ── CEO ── */}
//       <section className="ceo-section">
//         <div className="ceo-content">
//           <img src={ceoImage} alt="CEO" className="ceo-img" loading="lazy" />
//           <div className="ceo-info">
//             <h3>Neelesh Bhatnagar</h3>
//             <p className="ceo-role" style={{ color: "red" }}>
//               CEO &amp; Founder
//             </p>
//             <p>
//               Entrepreneur with over three decades of experience spanning the
//               Middle East and India.
//             </p>
//             <a href="/about" className="read-more-link">
//               Read More
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* ── DIRECTORS SLIDER ── */}
//       <DirectorsSlider />

//       {/* ── VERTICALS (auto-sliding) ── */}
//       <VerticalsSlider />

//       {/* ── IMPACT ── */}
//       <section className="section home-impact" ref={sectionRef}>
//         <div className="container">
//           <div className="section-title-wrap">
//             <span className="section-title">Impact</span>
//           </div>
//           <p className="impact-intro">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation
//           </p>
//           <div className="stats-grid">
//             {stats.map((item, i) => (
//               <StatBox
//                 key={i}
//                 item={item}
//                 icon={statIcons[i]}
//                 index={i}
//                 trigger={triggered}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── GROUP PHOTO GRID ── */}
//       <section className="home-group-photos">
//         <div className="container">
//           <div className="group-photo-grid">
//             <div className="gp-col-left">
//               <div className="gp-card gp-card--tall">
//                 <PhotoPlaceholder />
//               </div>
//             </div>
//             <div className="gp-col-mid">
//               <div className="gp-card gp-card--mid">
//                 <PhotoPlaceholder />
//               </div>
//             </div>
//             <div className="gp-col-right">
//               <div className="gp-card gp-card--sm">
//                 <PhotoPlaceholder />
//               </div>
//               <div className="gp-card gp-card--sm">
//                 <PhotoPlaceholder />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section className="home-testimonials">
//         <div className="testimonials-overlay">
//           <div className="container">
//             <div className="testimonials-inner">
//               <div className="testimonials-heading">
//                 <h2>
//                   Our Client
//                   <br />
//                   <span>That Trust Our Service</span>
//                 </h2>
//                 <p className="testimonials-sub">
//                   Lorem ipsum dolor sit amet, consectetuer ing elit sed diam
//                   nonummy nibh euismo tincidunt ut laoreet dolore magna.
//                 </p>
//               </div>
//               <div className="testimonials-cards">
//                 {testimonials.map((t, i) => (
//                   <div key={i} className="testimonial-card">
//                     <div className="tq-open">&#8220;</div>
//                     <p className="testimonial-text">{t.quote}</p>
//                     <div className="tq-close">&#8221;</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── GET IN TOUCH ── */}
//       <section className="home-contact">
//         <div className="container">
//           <div className="contact-inner">
//             <div className="contact-red-panel">
//               <div className="contact-yt-icon">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.2 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.7 2.8-5.7 2.7z" />
//                 </svg>
//               </div>
//               <h2>Get In Touch</h2>
//               <p>Archita Patel</p>
//               <p>Marketing Manager</p>
//               <a
//                 href="mailto:archita@nbventuresme.com"
//                 style={{ color: "white" }}
//               >
//                 archita@nbventuresme.com
//               </a>
//               <p>050-6785243</p>
//             </div>
//             <div className="contact-text-blocks">
//               {contactBlocks.map((block, i) => (
//                 <p key={i} className="contact-text-block">
//                   {block.text}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;

import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { companyInfo } from "../data/company";
import { stats } from "../data/stats";
import "../css/Home.css";

import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
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
  {
    img: uaeBulls,
    url: "https://uaebulls.ae",
    order: 1,
    name: "UAE Bulls",
    slug: "uae-bulls",
    desc: "Neelesh Bhatnagar's passion for cricket led him to own the Delhi Bulls team. After eight seasons, the U.A.E. Bulls achieved a historic milestone — Champions of Season 9 (2025–26).",
  },
  {
    img: motiv8,
    url: "https://motiv8.ae/",
    order: 2,
    name: "Motiv8",
    slug: "motiv8",
    desc: "An athleisure multi-designer women's-only retail store. Brands include Michi, Port De Bras, Yoga Democracy, SquatWolf, Manduka, Bala, Women's Best, and more.",
  },
  {
    img: pressmans,
    url: "https://pressmans.com/",
    order: 3,
    name: "Pressman's Sandwiches",
    slug: "pressmans",
    desc: "A homegrown brand specializing in healthy and fresh sandwiches and salads. 10 live locations across the U.A.E. and expanding in India through the cloud kitchen space.",
  },
  {
    img: vkTech,
    url: "https://vktechnologiesme.com/",
    order: 4,
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
    img: nbVentures,
    url: "https://nbventuresme.com/",
    order: 6,
    name: "NB Ventures",
    slug: "nb-ventures",
    desc: "A growth-stage venture fund based in the U.A.E. with a portfolio of 70+ Indian start-ups. Strategic Director Rushab Bhatnagar spearheads the Bangalore office.",
  },
  {
    img: denaster,
    url: "https://www.denaster.com/",
    order: 7,
    name: "Denaster",
    slug: "denaster",
    desc: "Joined the group in 2021. Distributes Shokz, GoCube, Sphero, Eilik, thinOptics, Ring, Boxbollen, ShiftCam, and Ampere across the region.",
  },
];

const directors = [
  {
    name: "Praveen Bhatnagar",
    role: "Business Consultant",
    bio: "Certified Public Accountant (U.S.) & Chartered Accountant (India). Owner of ZeroG Beds and Mattresses. Specializes in Retail, Fitness, Hospitality, and Healthcare business strategy.",
    slug: "praveen-bhatnagar",
  },
  {
    name: "Rushab Bhatnagar",
    role: "Co-Founder & CEO, NOVO Labs | Strategic Director, NB Ventures",
    bio: "Bachelor's in Business & Economics from Exeter, Master's in Strategic Marketing from Imperial College. Leads NB Ventures' portfolio of 70+ Indian start-ups.",
    slug: "rushab-bhatnagar",
  },
  {
    name: "Deep Bhogal",
    role: "Managing Director, Denaster",
    bio: "Over 30 years in supply and distribution across retail, software, and electronics. Led Denaster to become a multimillion-dollar SME with 100+ employees.",
    slug: "deep-bhogal",
  },
  {
    name: "Naz Ayat",
    role: "Sales Director",
    bio: "30+ years in software and electronics industries. Worked with major UK and international retailers including Amazon and HMV. Expert in distribution channels.",
    slug: "naz-ayat",
  },
  {
    name: "Afshad Mistry",
    role: "Health & Wellness Lead",
    bio: "23+ years in Health and Fitness. One of the first in India to achieve ACSM Certification (2005). Spearheaded Snap Fitness UAE Master Franchise.",
    slug: "afshad-mistry",
  },
  {
    name: "Sanjeev Sinha",
    role: "Director",
    bio: "Senior director at JSB Group contributing to the group's strategic growth across verticals.",
    slug: "sanjeev-sinha",
  },
  {
    name: "Mohammed Ashik",
    role: "Director",
    bio: "Key leadership member driving operational excellence across JSB Group's diverse portfolio.",
    slug: "mohammed-ashik",
  },
  {
    name: "Sanal Kumar",
    role: "Director",
    bio: "Contributes strategic direction and expertise to JSB Group's expanding business verticals.",
    slug: "sanal-kumar",
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

/* ─── Attractive arrow buttons ──────────────────────────────── */
function PrevArrow({ onClick }) {
  return (
    <button
      className="dir-arrow dir-arrow--prev"
      onClick={onClick}
      aria-label="Previous"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>
  );
}
function NextArrow({ onClick }) {
  return (
    <button
      className="dir-arrow dir-arrow--next"
      onClick={onClick}
      aria-label="Next"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}

/* ─── Directors Slider ───────────────────────────────────────── */
function DirectorsSlider() {
  const doubled = [...directors, ...directors];

  return (
    <section className="directors-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-title">Leadership</span>
        </div>
      </div>

      <div className="directors-marquee">
        <div className="directors-track-marquee">
          {doubled.map((d, i) => (
            <div key={d.slug + i} className="director-card">
              <div className="director-avatar">
                {d.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h4 className="director-name">{d.name}</h4>
              <p className="director-role">{d.role}</p>
              <p className="director-bio">{d.bio}</p>
              <a href={`/about#${d.slug}`} className="director-know-more">
                Know More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Auto-sliding Verticals ────────────────────────────────── */
function VerticalsSlider() {
  const sorted = [...brandLogos].sort((a, b) => a.order - b.order);
  const doubled = [...sorted, ...sorted];

  return (
    <section className="home-verticals-logos">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-title">Verticals</span>
        </div>
      </div>
      <div className="verticals-slider-outer">
        <div className="verticals-track">
          {doubled.map((logo, i) => (
            <div key={i} className="vertical-slide-item">
              {/* Fixed-height logo zone — completely isolated from text */}
              <div className="vertical-logo-box">
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                >
                  <img src={logo.img} alt={logo.name} loading="lazy" />
                </a>
              </div>
              {/* Divider */}
              <div className="vertical-card-divider" />
              {/* Text block strictly below logo */}
              <div className="vertical-card-body">
                <p className="vertical-brand-name">{logo.name}</p>
                <p className="vertical-brand-desc">{logo.desc}</p>
                <a
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vertical-know-more"
                >
                  Know More →
                </a>
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

      <section className="section home-intro">
        <div className="container">
          <div className="home-intro-text">
            <h2>An Organisation Inspired by Dreams &amp; Led by Purpose.</h2>
            <p>{companyInfo.about}</p>
          </div>
        </div>
      </section>

      <section className="ceo-section">
        <div className="ceo-content">
          <img src={ceoImage} alt="CEO" className="ceo-img" loading="lazy" />
          <div className="ceo-info">
            <h3>Neelesh Bhatnagar</h3>
            <p className="ceo-role" style={{ color: "red" }}>
              CEO &amp; Founder
            </p>
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

      <DirectorsSlider />
      <VerticalsSlider />

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

      <section className="home-group-photos">
        <div className="container">
          <div className="group-photo-grid">
            <div className="gp-col-left">
              <div className="gp-card gp-card--tall">
                <PhotoPlaceholder />
              </div>
            </div>
            <div className="gp-col-mid">
              <div className="gp-card gp-card--mid">
                <PhotoPlaceholder />
              </div>
            </div>
            <div className="gp-col-right">
              <div className="gp-card gp-card--sm">
                <PhotoPlaceholder />
              </div>
              <div className="gp-card gp-card--sm">
                <PhotoPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-testimonials">
        <div className="testimonials-overlay">
          <div className="container">
            <div className="testimonials-inner">
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

      <section className="home-contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-red-panel">
              <div className="contact-yt-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.8C6.8 19 12 19 12 19s4.2 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9l5.7 2.8-5.7 2.7z" />
                </svg>
              </div>
              <h2>Get In Touch</h2>
              <p>Archita Patel</p>
              <p>Marketing Manager</p>
              <a
                href="mailto:archita@nbventuresme.com"
                style={{ color: "white" }}
              >
                archita@nbventuresme.com
              </a>
              <p>050-6785243</p>
            </div>
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
