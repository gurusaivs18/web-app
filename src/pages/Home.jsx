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

// import rushab from "../assets/Partners/Rushab.JPG.webp";
// import sinha from "../assets/Partners/Sanjeev Sir 1.webp";
// import sanal from "../assets/Partners/Sanal Sir 1.webp";
// import deep from "../assets/Partners/Deep 1.webp";

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
//     desc: "Neelesh Bhatnagar's passion for cricket led him to own the Delhi Bulls team. After eight seasons, the U.A.E. Bulls achieved a historic milestone — Champions of Season 9 (2025–26).",
//   },
//   {
//     img: motiv8,
//     url: "https://motiv8.ae/",
//     order: 2,
//     name: "Motiv8",
//     slug: "motiv8",
//     desc: "An athleisure multi-designer women's-only retail store. Brands include Michi, Port De Bras, Yoga Democracy, SquatWolf, Manduka, Bala, Women's Best, and more.",
//   },
//   {
//     img: pressmans,
//     url: "https://pressmans.com/",
//     order: 3,
//     name: "Pressman's Sandwiches",
//     slug: "pressmans",
//     desc: "A homegrown brand specializing in healthy and fresh sandwiches and salads. 10 live locations across the U.A.E. and expanding in India through the cloud kitchen space.",
//   },
//   {
//     img: vkTech,
//     url: "https://vktechnologiesme.com/",
//     order: 4,
//     name: "VK Technologies",
//     slug: "vk-technologies",
//     desc: "Customized software solutions — POS systems, reporting tools, e-commerce development, and seamless ERP integration including Oracle NetSuite and Zoho.",
//   },
//   {
//     img: targetOne,
//     url: "https://targetoneme.com/",
//     order: 5,
//     name: "Target One",
//     slug: "target-one",
//     desc: "Established 2016. Leading distributor of world-class electronic brands — Marshall, Jabra, Titan, Ugreen, JLab, Dicota, Alogic, and more across the region.",
//   },
//   {
//     img: nbVentures,
//     url: "https://nbventuresme.com/",
//     order: 6,
//     name: "NB Ventures",
//     slug: "nb-ventures",
//     desc: "A growth-stage venture fund based in the U.A.E. with a portfolio of 70+ Indian start-ups. Strategic Director Rushab Bhatnagar spearheads the Bangalore office.",
//   },
//   {
//     img: denaster,
//     url: "https://www.denaster.com/",
//     order: 7,
//     name: "Denaster",
//     slug: "denaster",
//     desc: "Joined the group in 2021. Distributes Shokz, GoCube, Sphero, Eilik, thinOptics, Ring, Boxbollen, ShiftCam, and Ampere across the region.",
//   },
// ];

// const directors = [
//   {
//     name: "Praveen Bhatnagar",
//     role: "Business Consultant",
//     bio: "Certified Public Accountant (U.S.) & Chartered Accountant (India). Owner of ZeroG Beds and Mattresses. Specializes in Retail, Fitness, Hospitality, and Healthcare business strategy.",
//     slug: "praveen-bhatnagar",
//     img: null,
//   },
//   {
//     name: "Rushab Bhatnagar",
//     role: "Co-Founder & CEO, NOVO Labs | Strategic Director, NB Ventures",
//     bio: "Bachelor's in Business & Economics from Exeter, Master's in Strategic Marketing from Imperial College. Leads NB Ventures' portfolio of 70+ Indian start-ups.",
//     slug: "rushab-bhatnagar",
//     img: rushab,
//   },
//   {
//     name: "Deep Bhogal",
//     role: "Managing Director, Denaster",
//     bio: "Over 30 years in supply and distribution across retail, software, and electronics. Led Denaster to become a multimillion-dollar SME with 100+ employees.",
//     slug: "deep-bhogal",
//     img: deep,
//   },
//   {
//     name: "Naz Ayat",
//     role: "Sales Director",
//     bio: "30+ years in software and electronics industries. Worked with major UK and international retailers including Amazon and HMV. Expert in distribution channels.",
//     slug: "naz-ayat",
//     img: null,
//   },
//   {
//     name: "Afshad Mistry",
//     role: "Health & Wellness Lead",
//     bio: "23+ years in Health and Fitness. One of the first in India to achieve ACSM Certification (2005). Spearheaded Snap Fitness UAE Master Franchise.",
//     slug: "afshad-mistry",
//     img: null,
//   },
//   {
//     name: "Sanjeev Sinha",
//     role: "Director",
//     bio: "Senior director at JSB Group contributing to the group's strategic growth across verticals.",
//     slug: "sanjeev-sinha",
//     img: sinha,
//   },
//   {
//     name: "Mohammed Ashik",
//     role: "Director",
//     bio: "Key leadership member driving operational excellence across JSB Group's diverse portfolio.",
//     slug: "mohammed-ashik",
//     img: null,
//   },
//   {
//     name: "Sanal Kumar",
//     role: "Director",
//     bio: "Contributes strategic direction and expertise to JSB Group's expanding business verticals.",
//     slug: "sanal-kumar",
//     img: sanal,
//   },
// ];

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
//       const r = setTimeout(() => setValue(0), 0);
//       return () => clearTimeout(r);
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
//   const doubled = [...directors, ...directors];

//   return (
//     <section className="directors-section">
//       <div className="container">
//         <div className="section-title-wrap">
//           <span className="section-title">Pillars</span>
//         </div>
//       </div>

//       <div className="directors-marquee">
//         <div className="directors-track-marquee">
//           {doubled.map((d, i) => (
//             <div key={d.slug + i} className="director-card">
//               {/* ── Photo / Avatar ── */}
//               <div className="director-photo-wrap">
//                 {d.img ? (
//                   <img
//                     src={d.img}
//                     alt={d.name}
//                     className="director-photo"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="director-avatar-fallback">
//                     {d.name
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")
//                       .slice(0, 2)}
//                   </div>
//                 )}
//                 {/* Red accent line at bottom of photo */}
//                 <div className="director-photo-accent" />
//               </div>

//               {/* ── Text ── */}
//               <div className="director-text-col">
//                 <h4 className="director-name">{d.name}</h4>
//                 <p className="director-role">{d.role}</p>
//                 <p className="director-bio">{d.bio}</p>
//                 <a href={`/about#${d.slug}`} className="director-know-more">
//                   Know More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ─── Auto-sliding Verticals ────────────────────────────────── */
// function VerticalsSlider() {
//   const sorted = [...brandLogos].sort((a, b) => a.order - b.order);
//   const doubled = [...sorted, ...sorted];

//   return (
//     <section className="home-verticals-logos">
//       <div className="container">
//         <div className="section-title-wrap">
//           <span className="section-title">Verticals</span>
//         </div>
//       </div>
//       <div className="verticals-slider-outer">
//         <div className="verticals-track">
//           {doubled.map((logo, i) => (
//             <div key={i} className="vertical-slide-item">
//               {/* Fixed-height logo zone — completely isolated from text */}
//               <div className="vertical-logo-box">
//                 <a
//                   href={logo.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   tabIndex={-1}
//                 >
//                   <img src={logo.img} alt={logo.name} loading="lazy" />
//                 </a>
//               </div>
//               {/* Divider */}
//               <div className="vertical-card-divider" />
//               {/* Text block strictly below logo */}
//               <div className="vertical-card-body">
//                 <p className="vertical-brand-name">{logo.name}</p>
//                 <p className="vertical-brand-desc">{logo.desc}</p>
//                 <a
//                   href={logo.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="vertical-know-more"
//                 >
//                   Know More →
//                 </a>
//               </div>
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

//       <section className="section home-intro">
//         <div className="container">
//           <div className="home-intro-text">
//             <h2>An Organisation Inspired by Dreams &amp; Led by Purpose.</h2>
//             <p>{companyInfo.about}</p>
//           </div>
//         </div>
//       </section>

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

//       <DirectorsSlider />

//       <VerticalsSlider />

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

//       <section className="home-contact">
//         <div className="container">
//           <div className="contact-inner">
//             {/* LEFT BOX */}
//             <div className="contact-red-panel">
//               <h2>Get In Touch</h2>

//               <div className="contact-info">
//                 <p>Archita Patel</p>
//                 <p>Marketing Manager</p>
//                 <a href="mailto:archita@nbventuresme.com">
//                   archita@nbventuresme.com
//                 </a>
//                 <p>050-6785243</p>
//               </div>
//             </div>

//             {/* RIGHT BLOCKS */}
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

// first and second

import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { companyInfo } from "../data/company";
import { stats } from "../data/stats";
import "../css/Home.css";
import "../css/ScrollReveal.css"; // ← import the reveal stylesheet

import { useScrollReveal } from "../hooks/useScrollReveal"; // ← import the hook

import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";
import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
import denaster from "../assets/Brand-Logos/Denaster Logo.webp";

import rushab from "../assets/Partners/Rushab.JPG.webp";
import sinha from "../assets/Partners/Sanjeev Sir 1.webp";
import sanal from "../assets/Partners/Sanal Sir 1.webp";
import deep from "../assets/Partners/Deep 1.webp";

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
    img: null,
  },
  {
    name: "Rushab Bhatnagar",
    role: "Co-Founder & CEO, NOVO Labs | Strategic Director, NB Ventures",
    bio: "Bachelor's in Business & Economics from Exeter, Master's in Strategic Marketing from Imperial College. Leads NB Ventures' portfolio of 70+ Indian start-ups.",
    slug: "rushab-bhatnagar",
    img: rushab,
  },
  {
    name: "Deep Bhogal",
    role: "Managing Director, Denaster",
    bio: "Over 30 years in supply and distribution across retail, software, and electronics. Led Denaster to become a multimillion-dollar SME with 100+ employees.",
    slug: "deep-bhogal",
    img: deep,
  },
  {
    name: "Naz Ayat",
    role: "Sales Director",
    bio: "30+ years in software and electronics industries. Worked with major UK and international retailers including Amazon and HMV. Expert in distribution channels.",
    slug: "naz-ayat",
    img: null,
  },
  {
    name: "Afshad Mistry",
    role: "Health & Wellness Lead",
    bio: "23+ years in Health and Fitness. One of the first in India to achieve ACSM Certification (2005). Spearheaded Snap Fitness UAE Master Franchise.",
    slug: "afshad-mistry",
    img: null,
  },
  {
    name: "Sanjeev Sinha",
    role: "Director",
    bio: "Senior director at JSB Group contributing to the group's strategic growth across verticals.",
    slug: "sanjeev-sinha",
    img: sinha,
  },
  {
    name: "Mohammed Ashik",
    role: "Director",
    bio: "Key leadership member driving operational excellence across JSB Group's diverse portfolio.",
    slug: "mohammed-ashik",
    img: null,
  },
  {
    name: "Sanal Kumar",
    role: "Director",
    bio: "Contributes strategic direction and expertise to JSB Group's expanding business verticals.",
    slug: "sanal-kumar",
    img: sanal,
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
    /* Each stat box slides up with a staggered delay */
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

/* ─── Directors Slider ───────────────────────────────────────── */
function DirectorsSlider() {
  const doubled = [...directors, ...directors];
  return (
    <section id="pillars" className="directors-section">
      <div className="container">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">Pillars</span>
        </div>
      </div>

      {/* The whole marquee wrapper slides up as a unit */}
      <div className="directors-marquee" data-reveal="up" data-delay="150">
        <div className="directors-track-marquee">
          {doubled.map((d, i) => (
            <div key={d.slug + i} className="director-card">
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
                <a href={`/about#${d.slug}`} className="director-know-more">
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

/* ─── Auto-sliding Verticals ────────────────────────────────── */
function VerticalsSlider() {
  const sorted = [...brandLogos].sort((a, b) => a.order - b.order);
  const doubled = [...sorted, ...sorted];

  return (
    <section className="home-verticals-logos">
      <div className="container">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">Verticals</span>
        </div>
      </div>

      {/* Slider wrapper fades + rises in */}
      <div className="verticals-slider-outer" data-reveal="up" data-delay="200">
        <div className="verticals-track">
          {doubled.map((logo, i) => (
            <div key={i} className="vertical-slide-item">
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
              <div className="vertical-card-divider" />
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
  // ── Activate the scroll reveal system ──
  useScrollReveal();

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
            {/* Headline clips in from left */}
            <h2 data-reveal="up">
              An Organisation Inspired by Dreams &amp; Led by Purpose.
            </h2>
            {/* Body fades up with a slight delay */}
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
            {/* Name slides in from right */}
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
            <a
              href="/about"
              className="read-more-link"
              data-reveal="right"
              data-delay="350"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* ── DIRECTORS SLIDER ── */}
      <div id="pillars">
        <DirectorsSlider />
      </div>

      {/* ── VERTICALS SLIDER ── */}
      <VerticalsSlider />

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
            {/* Left tall card — slides in from left */}
            <div className="gp-col-left" data-reveal="left">
              <div className="gp-card gp-card--tall">
                <PhotoPlaceholder />
              </div>
            </div>
            {/* Middle card — rises up */}
            <div className="gp-col-mid" data-reveal="up" data-delay="150">
              <div className="gp-card gp-card--mid">
                <PhotoPlaceholder />
              </div>
            </div>
            {/* Right two cards — slide in from right, staggered */}
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
                {/* Heading slides up */}
                <h2 data-reveal="up">
                  Our Client
                  <br />
                  <span>That Trust Our Service</span>
                </h2>
                <p
                  className="testimonials-sub"
                  data-reveal="up"
                  data-delay="200"
                >
                  {/* Lorem ipsum dolor sit amet, consectetuer ing elit sed diam
                  nonummy nibh euismo tincidunt ut laoreet dolore magna. */}
                </p>
              </div>
              <div className="testimonials-cards">
                {/* Each testimonial card slides up with stagger */}
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
            {/* Red panel slides in from left */}
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

            {/* Text blocks slide in from right, staggered */}
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
    </>
  );
}

export default Home;

// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// import Hero from "../components/Hero";
// import { companyInfo } from "../data/company";
// import { stats } from "../data/stats";

// import "../css/Home.css";
// import "../css/ScrollReveal.css";

// import { useScrollReveal } from "../hooks/useScrollReveal";

// import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";

// import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
// import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
// import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
// import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
// import targetOne from "../assets/Brand-Logos/targetone.webp";
// import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
// import denaster from "../assets/Brand-Logos/Denaster Logo.webp";

// import rushab from "../assets/Partners/Rushab.JPG.webp";
// import sinha from "../assets/Partners/Sanjeev Sir 1.webp";
// import sanal from "../assets/Partners/Sanal Sir 1.webp";
// import deep from "../assets/Partners/Deep 1.webp";

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
//     desc: "Neelesh Bhatnagar's passion for cricket led him to own the Delhi Bulls team. After eight seasons, the U.A.E. Bulls achieved a historic milestone — Champions of Season 9 (2025–26).",
//   },
//   {
//     img: motiv8,
//     url: "https://motiv8.ae/",
//     order: 2,
//     name: "Motiv8",
//     slug: "motiv8",
//     desc: "An athleisure multi-designer women's-only retail store.",
//   },
//   {
//     img: pressmans,
//     url: "https://pressmans.com/",
//     order: 3,
//     name: "Pressman's Sandwiches",
//     slug: "pressmans",
//     desc: "A homegrown brand specializing in healthy and fresh sandwiches and salads.",
//   },
// ];

// const directors = [
//   {
//     name: "Rushab Bhatnagar",
//     role: "Co-Founder & CEO",
//     bio: "Leads NB Ventures' portfolio of 70+ Indian start-ups.",
//     slug: "rushab-bhatnagar",
//     img: rushab,
//   },
//   {
//     name: "Deep Bhogal",
//     role: "Managing Director, Denaster",
//     bio: "30+ years in supply and distribution.",
//     slug: "deep-bhogal",
//     img: deep,
//   },
//   {
//     name: "Sanjeev Sinha",
//     role: "Director",
//     bio: "Strategic growth leader across verticals.",
//     slug: "sanjeev-sinha",
//     img: sinha,
//   },
//   {
//     name: "Sanal Kumar",
//     role: "Director",
//     bio: "Contributes strategic direction and expertise.",
//     slug: "sanal-kumar",
//     img: sanal,
//   },
// ];

// function Home() {
//   useScrollReveal();

//   const sectionRef = useRef(null);
//   const [triggered, setTriggered] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTriggered(true);
//         }
//       },
//       { threshold: 0.2 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <Hero />

//       {/* INTRO */}
//       <section className="section home-intro">
//         <div className="container">
//           <div className="home-intro-text">
//             <h2 data-reveal="up">
//               An Organisation Inspired by Dreams &amp; Led by Purpose.
//             </h2>

//             <p data-reveal="up" data-delay="200">
//               {companyInfo.about}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CEO */}
//       <section className="ceo-section" data-reveal="fade">
//         <div className="ceo-content">
//           <img src={ceoImage} alt="CEO" className="ceo-img" loading="lazy" />

//           <div className="ceo-info">
//             <h3 data-reveal="right">Neelesh Bhatnagar</h3>

//             <p
//               className="ceo-role"
//               style={{ color: "red" }}
//               data-reveal="right"
//               data-delay="150"
//             >
//               CEO &amp; Founder
//             </p>

//             <p data-reveal="right" data-delay="250">
//               Entrepreneur with over three decades of experience spanning the
//               Middle East and India.
//             </p>

//             {/* FIXED INTERNAL LINK */}
//             <Link
//               to="/about"
//               className="read-more-link"
//               data-reveal="right"
//               data-delay="350"
//             >
//               Read More
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* DIRECTORS */}
//       <section className="directors-section">
//         <div className="container">
//           <div className="section-title-wrap" data-reveal="fade">
//             <span className="section-title">Pillars</span>
//           </div>
//         </div>

//         <div className="directors-marquee" data-reveal="up">
//           <div className="directors-track-marquee">
//             {[...directors, ...directors].map((d, i) => (
//               <div key={d.slug + i} className="director-card">
//                 <div className="director-photo-wrap">
//                   <img
//                     src={d.img}
//                     alt={d.name}
//                     className="director-photo"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="director-text-col">
//                   <h4 className="director-name">{d.name}</h4>

//                   <p className="director-role">{d.role}</p>

//                   <p className="director-bio">{d.bio}</p>

//                   {/* FIXED INTERNAL LINK */}
//                   <Link to={`/about#${d.slug}`} className="director-know-more">
//                     Know More →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* VERTICALS */}
//       <section className="home-verticals-logos">
//         <div className="container">
//           <div className="section-title-wrap" data-reveal="fade">
//             <span className="section-title">Verticals</span>
//           </div>
//         </div>

//         <div className="verticals-slider-outer">
//           <div className="verticals-track">
//             {[...brandLogos, ...brandLogos].map((logo, i) => (
//               <div key={i} className="vertical-slide-item">
//                 <div className="vertical-logo-box">
//                   {/* FIXED EXTERNAL LINK */}
//                   <a href={logo.url} target="_blank" rel="noopener noreferrer">
//                     <img src={logo.img} alt={logo.name} loading="lazy" />
//                   </a>
//                 </div>

//                 <div className="vertical-card-divider" />

//                 <div className="vertical-card-body">
//                   <p className="vertical-brand-name">{logo.name}</p>

//                   <p className="vertical-brand-desc">{logo.desc}</p>

//                   <a
//                     href={logo.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="vertical-know-more"
//                   >
//                     Know More →
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;
