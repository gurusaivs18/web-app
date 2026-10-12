import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import "../css/Pillars.css";
import "../css/ScrollReveal.css";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { team } from "../data/team";

import ceoImage from "../assets/jsbGroupWebsite/ceoHomeBanner.webp";
import rushabImg from "../assets/Partners/rushab-assets-1.webp";
import deepImg from "../assets/Partners/deep01.webp";
import sanjeevImg from "../assets/Partners/sanjeevupdated.webp";
import sanalImg from "../assets/Partners/sanal-assets-1.webp";
import supriyaImg from "../assets/Partners/supriya-assets-1.webp";
import nazImg from "../assets/Partners/Nas-asset-1.webp";
import ashikImg from "../assets/Partners/ashiknew.webp";
import noel from "../assets/Partners/noel.webp";
import banner from "../assets/banners/pillarsupdated.webp";

const teamImages = {
  Noel: noel,
  "Deep Bhogal": deepImg,
  "Naz Ayat": nazImg,
  "Rushab Bhatnagar": rushabImg,
  "Sanal Kumar": sanalImg,
  "Sanjeev K Sinha": sanjeevImg,
  "Mohammed Ashik": ashikImg,
  "Supriya Hurkat": supriyaImg,
};

/* Existing modal for directors and partners */
function Modal({ person, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
    // handleClose is intentionally stable for this modal's lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 420);
  };

  return createPortal(
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className={`modal-pro-box ${visible ? "modal-pro-show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-name"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mp-top">
          <div className="mp-head">
            <h3 className="mp-name" id="team-modal-name">
              {person.name}
            </h3>
            <span className="mp-role-pill">{person.role}</span>
          </div>

          <button
            type="button"
            className="mp-close-btn"
            onClick={handleClose}
            aria-label="Close biography"
          >
            ✕
          </button>
        </div>

        <div className="mp-accent-bar" />

        <div className="mp-body">
          {person.desc
            ?.split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

        <div className="mp-footer">
          <button
            type="button"
            className="mp-dismiss-btn"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* CEO modal styled to match the About page CEO description */
function PillarsCeoModal({ onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="pillars-ceo-modal-overlay"
      onClick={onClose}
    >
      <div
        className="pillars-ceo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pillars-ceo-modal-name"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="pillars-ceo-modal-close"
          onClick={onClose}
          aria-label="Close CEO biography"
        >
          ×
        </button>

        <div className="pillars-ceo-modal-image">
          <img src={ceoImage} alt="Neelesh Bhatnagar" />
        </div>

        <div className="pillars-ceo-modal-content">
          <span className="pillars-ceo-modal-tag">The Architect</span>

          <h2 id="pillars-ceo-modal-name">
            {team.ceo.name}
          </h2>

          <p className="pillars-ceo-modal-role">
            {team.ceo.role}
          </p>

          <div className="pillars-ceo-modal-divider" />

          <div className="pillars-ceo-modal-bio">
            <p className="pillars-ceo-modal-tagline">
              Neelesh Bhatnagar doesn’t chase trends—he builds the next
              chapter of commerce, capability, and growth.
            </p>

            <p>
              Neelesh Bhatnagar is a seasoned entrepreneur with{" "}
              <strong>
                30+ years of experience across the Middle East and India
              </strong>
              . As <strong>CEO &amp; Founder of JSB Group</strong>, he has
              built a diversified conglomerate with a strong, execution-first
              focus on <strong>Retail &amp; Distribution</strong>, alongside
              interests in{" "}
              <strong>
                fitness, hospitality, healthcare, and technology
              </strong>
              .
            </p>

            <p>
              Under Neelesh’s leadership, JSB Group has grown into a
              multi-vertical ecosystem where each business strengthens the
              other—driving scale, operational efficiency, and long-term
              value creation. His vision has guided the Group’s expansion
              across key markets, establishing meaningful presence across
              the <strong>UAE and beyond</strong>, while staying deeply
              connected to the needs of customers, partners, and communities.
            </p>

            <p>
              Known for spotting opportunities ahead of the curve, Neelesh
              leads with a <strong>hands-on style</strong>, decisive execution,
              and a clear commitment to building brands and businesses that
              last. For him, entrepreneurship isn’t just about growth—it’s
              about impact: creating value not only for shareholders, but for
              the people and communities that power the economy every day.
            </p>

            <p>
              Neelesh’s journey reflects resilience, foresight, and an
              unwavering belief in the power of strong leadership and
              strategic entrepreneurship to transform markets—and lives.
            </p>
          </div>

          <a
            href="/pillars"
            className="pillars-ceo-modal-button"
            onClick={onClose}
          >
            The Pillars
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

function PersonCard({ person, delay = "0" }) {
  const [open, setOpen] = useState(false);
  const image = teamImages[person.name] || person.image;

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
              {image ? (
                <img
                  src={image}
                  alt={person.name}
                  className="director-photo-img"
                />
              ) : (
                <div className="director-photo-placeholder" />
              )}
            </div>

            <div className="director-card-body">
              <p className="director-name">{person.name}</p>
              <p className="director-role-text">{person.role}</p>

              {person.desc &&
                person.desc.trim() !== "" &&
                person.desc !== "Write-up pending" && (
                  <button
                    type="button"
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

/* ─────────────────────────────────────────
   PILLARS PAGE
───────────────────────────────────────── */
function Pillars() {
  useScrollReveal();

  const [ceoOpen, setCeoOpen] = useState(false);

  const coreTeam = team.coreTeam
    .map((person) => ({
      ...person,
      img: teamImages[person.name] || person.image,
    }))
    .sort((a, b) => a.order - b.order);

  return (
    <>
      {/* PAGE BANNER */}
      <div className="about-page-banner" data-reveal="fade">
        <img
          src={banner}
          alt="JSB Group Core Team"
          className="about-page-banner-image"
        />

        <div className="about-page-banner-overlay">
          <h1>Team JSB</h1>
        </div>
      </div>

      {/* THE ARCHITECT */}
      <section className="section architect-section">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">The Architect</span>
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

          <div className="architect-label">THE ARCHITECT</div>

          <div className="architect-content">
            <div className="architect-info">
              <h3
                data-reveal="right"
                data-delay="300"
                style={{ color: "black" }}
              >
                {team.ceo.name}
              </h3>

              <p
                className="role"
                data-reveal="right"
                data-delay="400"
              >
                {team.ceo.role}
              </p>

              <div
                className="architect-description"
                data-reveal="right"
                data-delay="500"
              >
                <p className="architect-tagline">
                  Neelesh Bhatnagar doesn’t chase trends—he builds the next
                  chapter of commerce, capability, and growth.
                </p>

                <p className="architect-summary">
                  Neelesh Bhatnagar is a seasoned entrepreneur with{" "}
                  <strong>
                    30+ years of experience across the Middle East and India
                  </strong>
                  . As <strong>CEO &amp; Founder of JSB Group</strong>, he has
                  built a diversified conglomerate with a strong,
                  execution-first focus on{" "}
                  <strong>Retail &amp; Distribution</strong>, alongside
                  interests in{" "}
                  <strong>
                    fitness, hospitality, healthcare, and technology
                  </strong>
                  .
                </p>
              </div>

              <button
                type="button"
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

      {/* CEO MODAL */}
      {ceoOpen && (
        <PillarsCeoModal onClose={() => setCeoOpen(false)} />
      )}

      {/* CORE TEAM */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Core Team</span>
          </div>

          <div className="directors-grid">
            {coreTeam.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                delay={String((index % 4) * 150 + 100)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pillars;
