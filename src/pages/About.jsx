import { useState, useEffect } from "react";
import { companyInfo } from "../data/company";
import "../css/About.css";
import "../css/ScrollReveal.css"; // ← add this import
import { useScrollReveal } from "../hooks/useScrollReveal"; // ← add this import
import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";
import { useLocation } from "react-router-dom";
// ── Director images ──
import rushabImg from "../assets/Partners/rushab-assets-1.webp";
import deepImg from "../assets/Partners/deep-asset-1.webp";
import sanjeevImg from "../assets/Partners/sanjeev-assets-1.webp";

// ── Partner images ──
import sanalImg from "../assets/Partners/sanal-assets-1.webp";

const CloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: 48, height: 48, fill: "rgba(255,255,255,0.7)" }}
  >
    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    <path d="M14 13v4h-4v-4H7l5-5 5 5h-3z" />
  </svg>
);

const ceoWriteup = `Neelesh Bhatnagar is an entrepreneur with over three decades of experience spanning the Middle East and India. As the CEO & Founder of JSB Group, he has built a diversified conglomerate with interests across retail, fitness, hospitality, healthcare, and technology.

His vision has been the driving force behind JSB Group's expansion into multiple verticals, creating an ecosystem of businesses that complement and strengthen one another. Under his leadership, JSB Group has grown from a single venture into a multi-faceted organisation with a presence across the UAE and beyond.

Neelesh is known for his ability to identify opportunities ahead of the curve, his hands-on leadership style, and his commitment to building businesses that create lasting value — not just for shareholders, but for communities and people.

His journey is one of resilience, vision, and an unwavering belief in the power of entrepreneurship to transform lives.`;

const allDirectors = [
  {
    name: "Rushab Bhatnagar",
    role: "Director",
    img: rushabImg,
    writeup: `Rushab Bhatnagar is the Co-Founder and CEO of NOVO Labs, and serves as Strategic Director for NB Ventures. With a sharp focus on innovation and technology-driven business models, Rushab brings a forward-thinking perspective to the JSB Group board.\n\nHis work spans venture building, strategic investments, and scaling early-stage companies into market leaders.`,
  },
  {
    name: "Praveen Bhatnagar",
    role: "Director",
    img: null,
    writeup: `Praveen Bhatnagar is a Certified Public Accountant (CPA) with deep expertise in finance and business strategy. Over the course of his career, he has worked across Retail, Fitness, Hospitality, and Healthcare sectors, bringing financial rigour and strategic clarity to each venture he has been part of.\n\nAs a Director at JSB Group, Praveen plays a key role in shaping the financial architecture of the group's diverse portfolio, ensuring sustainable growth and sound governance across all business units.`,
  },

  {
    name: "Deep Bhogal",
    role: "Managing Director",
    img: deepImg,
    writeup: `Deep Bhogal brings over 30 years of experience in retail and distribution to the JSB Group. As Managing Director of Denaster, he has built and led large-scale operations across multiple markets, with a reputation for operational excellence and commercial acumen.\n\nHis decades of experience make him a cornerstone of the group's operational leadership.`,
  },
  {
    name: "Sanjeev Sinha",
    role: "Director",
    img: sanjeevImg,
    writeup: `Sanjeev Sinha is a seasoned business leader and Director at JSB Group, contributing strategic oversight and sector expertise to the group's growing portfolio of businesses.`,
  },
  {
    name: "Mohammed Ashik",
    role: "Director",
    img: null,
    writeup: `Mohammed Ashik is a Director at JSB Group, bringing valuable regional expertise and leadership experience that supports the group's expansion across key markets.`,
  },
];

const allPartners = [
  {
    name: "Manish Kishore",
    role: "Partner",
    img: null,

    writeup: ``,
  },
  {
    name: "Naz Ayat",
    role: "Partner",
    img: null,
    writeup: `Naz Ayat is a Partner at JSB Group, contributing expertise and strategic guidance across the group's diverse business interests.`,
  },
  {
    name: "Afshad Mistry",
    role: "Partner",
    img: null,
    writeup: `Afshad Mistry is a Partner at JSB Group, playing an integral role in supporting the group's mission and growth objectives.`,
  },
  {
    name: "Sanal Kumar",
    role: "Partner",
    img: sanalImg,
    writeup: `Sanal Kumar is a Partner at JSB Group, bringing deep professional experience and commitment to the group's values and vision.`,
  },
];
function Modal({ person, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 420);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className={`modal-pro-box ${visible ? "modal-pro-show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mp-top">
          <div className="mp-head">
            <h3 className="mp-name">{person.name}</h3>
            <span className="mp-role-pill">{person.role}</span>
          </div>
          <button className="mp-close-btn" onClick={handleClose}>
            ✕
          </button>
        </div>
        <div className="mp-accent-bar" />
        <div className="mp-body">
          {person.writeup.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <div className="mp-footer">
          <button className="mp-dismiss-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function PersonCard({ person, labelType, delay = "0" }) {
  const [open, setOpen] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const handleReadMore = () => {
    setFlipping(true);
    setTimeout(() => setOpen(true), 320);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setFlipping(false), 350);
  };

  return (
    <>
      <div className="director-card-scene" data-reveal="up" data-delay={delay}>
        <div className={`director-card-inner ${flipping ? "flipped" : ""}`}>
          <div className="director-card director-card-front">
            <div className="director-photo">
              {person.img ? (
                <img
                  src={person.img}
                  alt={person.name}
                  className="director-photo-img"
                />
              ) : (
                <div className="director-photo-placeholder" />
              )}
              <div className="director-label">{labelType}</div>
            </div>
            <div className="director-card-body">
              <p className="director-name">{person.name}</p>
              <p className="director-role-text">{person.role}</p>
              {person.writeup && person.writeup.trim() !== "" && (
                <button className="read-more-btn" onClick={handleReadMore}>
                  Read More →
                </button>
              )}
            </div>
          </div>

          <div className="director-card director-card-back">
            <div className="card-back-initials">
              {person.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2)}
            </div>
          </div>
        </div>
      </div>
      {open && <Modal person={person} onClose={handleClose} />}
    </>
  );
}
function About() {
  // ── Activate the scroll reveal system ──
  useScrollReveal();

  const [ceoOpen, setCeoOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#architect") {
      setTimeout(() => {
        const section = document.getElementById("architect");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero" data-reveal="fade">
        <h1>About Us</h1>
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="section about-who">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Who We Are</span>
          </div>
          <div className="about-who-grid">
            {/* Image placeholder slides in from left */}
            <div className="about-who-img-placeholder" data-reveal="left">
              Organisation Image
            </div>
            {/* Text slides in from right */}
            <div
              className="about-who-text"
              data-reveal="right"
              data-delay="150"
            >
              <h3>An Organisation</h3>
              <p>{companyInfo.about}</p>
              <br />
              <p>
                Explore JSB Group and discover how we are redefining success
                through innovation, excellence, and purpose-driven leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / PURPOSE ── */}
      <section className="section vmp-section">
        <div className="container">
          <div className="vmp-grid">
            {[
              { label: "Vision", text: companyInfo.vision },
              { label: "Mission", text: companyInfo.mission },
              { label: "Purpose", text: companyInfo.purpose },
            ].map(({ label, text }, i) => (
              /* Each card rises up with staggered delay */
              <div
                key={label}
                className="vmp-card"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                <div className="vmp-card-img">
                  <CloudIcon />
                </div>
                <div className="vmp-card-body">
                  <h3>{label}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE ARCHITECT — CEO ── */}
      <section id="architect" className="section architect-section">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">The Architect & Pillars</span>
        </div>

        {/* Banner fades + scales in */}
        <div className="architect-banner" data-reveal="scale" data-delay="150">
          <img
            src={ceoImage}
            alt="Neelesh Bhatnagar"
            className="architect-banner-bg"
          />

          <div className="architect-label">THE ARCHITECT</div>
          <div className="architect-content">
            <div className="architect-info">
              {/* Info inside slides in from right */}
              <h3
                data-reveal="right"
                data-delay="300"
                style={{ color: "white" }}
              >
                Neelesh Bhatnagar
              </h3>
              <p
                className="role"
                data-reveal="right"
                data-delay="400"
                style={{ color: "red" }}
              >
                CEO & Founder
              </p>
              <p data-reveal="right" data-delay="500">
                Entrepreneur with over three decades of experience spanning the
                Middle East and India.
              </p>
              <button
                className="architect-read-more"
                data-reveal="right"
                data-delay="600"
                onClick={() => setCeoOpen(true)}
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {ceoOpen && (
        <Modal
          person={{
            name: "Neelesh Bhatnagar",
            role: "CEO & Founder",
            writeup: ceoWriteup,
          }}
          onClose={() => setCeoOpen(false)}
        />
      )}

      {/* ── DIRECTOR PILLARS ── */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Director Pillars</span>
          </div>
          <div className="directors-grid">
            {allDirectors.slice(0, 3).map((d, i) => (
              <PersonCard
                key={i}
                person={d}
                labelType="Director"
                delay={String(i * 150 + 100)}
              />
            ))}
          </div>
          <div className="directors-grid-2">
            {allDirectors.slice(3, 5).map((d, i) => (
              <PersonCard
                key={i}
                person={d}
                labelType="Director"
                delay={String(i * 150 + 100)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER PILLARS ── */}
      <section className="section pillars-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Partner Pillars</span>
          </div>
          <div className="partners-grid">
            {allPartners.map((p, i) => (
              <PersonCard
                key={i}
                person={p}
                labelType="Partner"
                delay={String(i * 150 + 100)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
