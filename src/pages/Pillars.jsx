 
import { useState, useEffect } from "react";
import "../css/Pillars.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ceoImage from "../assets/jsbGroupWebsite/ceoHomeBanner.webp";
import rushabImg from "../assets/Partners/rushab-assets-1.png";
import deepImg from "../assets/Partners/deep01.jpeg";
import sanjeevImg from "../assets/Partners/Sanjeev.1.jpeg";
import sanalImg from "../assets/Partners/sanal-assets-1.png";
import supriyaImg from "../assets/Partners/supriya-assets-1.png";
import naz from "../assets/Partners/Nas-asset-1.png";
import ashik from "../assets/Partners/Ashik-asset-1.png";
import { createPortal } from "react-dom";

const ceoWriteup = `Neelesh Bhatnagar is an entrepreneur with over three decades of experience spanning the Middle East and India. As the CEO & Founder of JSB Group, he has built a diversified conglomerate with interests across retail, fitness, hospitality, healthcare, and technology.

His vision has been the driving force behind JSB Group's expansion into multiple verticals, creating an ecosystem of businesses that complement and strengthen one another. Under his leadership, JSB Group has grown from a single venture into a multi-faceted organisation with a presence across the UAE and beyond.

Neelesh is known for his ability to identify opportunities ahead of the curve, his hands-on leadership style, and his commitment to building businesses that create lasting value — not just for shareholders, but for communities and people.

His journey is one of resilience, vision, and an unwavering belief in the power of entrepreneurship to transform lives.`;

const allDirectors = [
  {
    name: "Rushab Bhatnagar",
    role: "Director",
    img: rushabImg,
    writeup: `Rushab Bhatnagar is the Co-Founder and CEO of NOVO Labs, and serves as Strategic Director for NB Ventures. With a sharp focus on innovation and technology-driven business models, Rushab brings a forward-thinking perspective to the JSB Group board.

His work spans venture building, strategic investments, and scaling early-stage companies into market leaders.`,
  },
  {
    name: "Sanjeev Sinha",
    role: "Group CFO",
    img: sanjeevImg,
    writeup: `Sanjeev Sinha is a seasoned business leader and Director at JSB Group, contributing strategic oversight and sector expertise to the group's growing portfolio of businesses.`,
  },
  {
    name: "Supriya Hurkat",
    role: "Director",
    img: supriyaImg,
    writeup: ` write up pending`,
  },
  {
    name: "Mohammed Ashik",
    role: "Group CTO",
    img: ashik,
    writeup: `Mohammed Ashik is a Director at JSB Group, bringing valuable regional expertise and leadership experience that supports the group's expansion across key markets.`,
  },
];

const allPartners = [
  {
    name: "Sanal Kumar",
    role: "Business Head",
    img: sanalImg,
    writeup: `Sanal Kumar is a Partner at JSB Group, bringing deep professional experience and commitment to the group's values and vision.`,
  },
  {
    name: "Deep Bhogal",
    role: "Partner",
    img: deepImg,
    writeup: `Deep Bhogal brings over 30 years of experience in retail and distribution to the JSB Group. As Managing Director of Denaster, he has built and led large-scale operations across multiple markets, with a reputation for operational excellence and commercial acumen.

His decades of experience make him a cornerstone of the group's operational leadership.`,
  },
  {
    name: "Naz Ayat",
    role: "Partner",
    img: naz,
    writeup: `Naz Ayat is a Partner at JSB Group, contributing expertise and strategic guidance across the group's diverse business interests.`,
  },
];

function Modal({ person, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setVisible(true))
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 420);
  };

  return createPortal(
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
    </div>,
    document.body
  );
}

function PersonCard({ person, labelType, delay = "0" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="director-card-scene"
        data-reveal="up"
        data-delay={delay}
      >
        <div className="director-card-inner">
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
                <button
                  className="read-more-btn"
                  onClick={() => setOpen(true)}
                >
                  Read More →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <Modal
          person={person}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function Pillars() {
  useScrollReveal();

  const [ceoOpen, setCeoOpen] = useState(false);

  return (
    <>
      {/* ───────────────── PAGE TITLE ───────────────── */}

      <div className="page-hero" data-reveal="fade">
        <h1>Pillars</h1>
      </div>

      {/* ───────────────── THE ARCHITECT ───────────────── */}

      <section className="section architect-section">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">
            The Architect & Pillars
          </span>
        </div>

        <div
          className="architect-banner"
          data-reveal="scale"
          data-delay="150"
        >
          <img
            src={ceoImage}
            alt="Neelesh Bhatnagar"
            className="architect-banner-bg"
          />

          <div className="architect-label">
            THE ARCHITECT
          </div>

          <div className="architect-content">
            <div className="architect-info">

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
              >
                Founder & CEO
              </p>

              <p
                data-reveal="right"
                data-delay="500"
              >
                Neelesh Bhatnagar is an entrepreneur with over
                three decades of experience spanning the Middle East
                and India. As the CEO & Founder of JSB Group, he has
                built a diversified conglomerate with interests
                across retail, fitness, hospitality, healthcare,
                and technology.
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

      {/* ───────────────── CEO MODAL ───────────────── */}

      {ceoOpen && (
        <Modal
          person={{
            name: "Neelesh Bhatnagar",
            role: "Founder & CEO",
            writeup: ceoWriteup,
          }}
          onClose={() => setCeoOpen(false)}
        />
      )}

      {/* ───────────────── DIRECTORS ───────────────── */}

      <section className="section pillars-section">
        <div className="container">

          <div
            className="section-title-wrap"
            data-reveal="fade"
          >
            <span className="section-title">
              Directors
            </span>
          </div>

          <div className="directors-grid">
            {allDirectors.map((d, i) => (
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

      {/* ───────────────── PARTNERS ───────────────── */}

      <section
        className="section pillars-section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">

          <div
            className="section-title-wrap"
            data-reveal="fade"
          >
            <span className="section-title">
              Partners
            </span>
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

export default Pillars;
 
