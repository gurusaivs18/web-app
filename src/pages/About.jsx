import { useState, useEffect } from "react";

import { companyInfo } from "../data/company";

import "../css/About.css";
import "../css/ScrollReveal.css";

import { useScrollReveal } from "../hooks/useScrollReveal";
 
import ceoImage from "../assets/jsbGroupWebsite/ceoHomeBanner.webp";

import rushabImg from "../assets/Partners/rushab-assets-1.webp";
import deepImg from "../assets/Partners/deep01.webp";
import sanjeevImg from "../assets/Partners/sanjeevupdated.webp";
import sanalImg from "../assets/Partners/sanal-assets-1.webp";
import supriyaImg from "../assets/Partners/supriya-assets-1.webp";
import nazImg from "../assets/Partners/Nas-asset-1.webp";
import ashikImg from "../assets/Partners/ashiknew.webp";
import noel from "../assets/Partners/noel.webp";


import visionImg from "../assets/About us/Vision.webp";
import missionImg from "../assets/About us/MISSION__.webp";
import purposeImg from "../assets/About us/Purpose__.webp";

import organisationVideo from "../assets/About us/anorganisationvideo.MP4";

import banner from "../assets/banners/aboutbannernew1.webp";

import { createPortal } from "react-dom";

import { useLocation } from "react-router-dom";

import { team } from "../data/team";


/* ─────────────────────────────────────────
   TEAM IMAGES
───────────────────────────────────────── */

const teamImages = {
  "Noel Harrison": noel,

  "Deep Bhogal": deepImg,

  "Naz Hayat": nazImg,

  "Rushab Bhatnagar": rushabImg,

  "Sanal Kumar": sanalImg,

  "Sanjeev K Sinha": sanjeevImg,

  "Mohammed Ashik": ashikImg,

  "Supriya Hurkat": supriyaImg,
};


/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */

function Modal({ person, onClose }) {

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        setVisible(true)
      )
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

    <div
      className="modal-overlay"
      onClick={handleClose}
    >

      <div
        className={`modal-pro-box ${
          visible ? "modal-pro-show" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >

        <div className="mp-top">

          <div className="mp-head">

            <h3 className="mp-name">
              {person.name}
            </h3>

            <span className="mp-role-pill">
              {person.role}
            </span>

          </div>


          <button
            className="mp-close-btn"
            onClick={handleClose}
          >
            ✕
          </button>

        </div>


        <div className="mp-accent-bar" />


        <div className="mp-body">

          {person.desc
            ?.split(/\n+/)
            .map((para) => para.trim())
            .filter(Boolean)
            .map((para, i) => (
              <p key={i}>
                {para}
              </p>
            ))}

        </div>


        <div className="mp-footer">

          <button
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


/* ─────────────────────────────────────────
   ABOUT CEO MODAL — MATCHES HOME CEO MODAL
───────────────────────────────────────── */
function AboutCeoModal({ onClose }) {
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
    <div className="about-ceo-modal-overlay" onClick={onClose}>
      <div
        className="about-ceo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-ceo-modal-name"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="about-ceo-modal-close"
          onClick={onClose}
          aria-label="Close CEO biography"
        >
          ×
        </button>

        <div className="about-ceo-modal-image">
          <img src={ceoImage} alt="Neelesh Bhatnagar" />
        </div>

        <div className="about-ceo-modal-content">
          <span className="about-ceo-modal-tag">The Architect</span>
          <h2 id="about-ceo-modal-name">Neelesh Bhatnagar</h2>
          <p className="about-ceo-modal-role">Founder &amp; CEO, JSB Group</p>
          <div className="about-ceo-modal-divider" />

          <div className="about-ceo-modal-bio">
            <p className="about-ceo-modal-tagline">
              Neelesh Bhatnagar doesn’t chase trends—he builds the next
              chapter of commerce, capability, and growth.
            </p>

            <p>
              Neelesh Bhatnagar is a seasoned entrepreneur with{" "}
              <strong>30+ years of experience across the Middle East and India</strong>.
              As <strong>Founder &amp; CEO of JSB Group</strong>, he has built a
              diversified conglomerate with a strong, execution-first focus on{" "}
              <strong>Retail &amp; Distribution</strong>, alongside interests in{" "}
              <strong>fitness,Sports, hospitality, healthcare, and technology</strong>.
            </p>

            <p>
              Under Neelesh’s leadership, JSB Group has grown into a multi-vertical
              ecosystem where each business strengthens the other—driving scale,
              operational efficiency, and long-term value creation. His vision has
              guided the Group’s expansion across key markets, establishing meaningful
              presence across the <strong>UAE and beyond</strong>, while staying deeply
              connected to the needs of customers, partners, and communities.
            </p>

            <p>
              Known for spotting opportunities ahead of the curve, Neelesh leads with
              a <strong>hands-on style</strong>, decisive execution, and a clear commitment
              to building brands and businesses that last. For him, entrepreneurship
              isn’t just about growth—it’s about impact: creating value not only for
              shareholders, but for the people and communities that power the economy
              every day.
            </p>

            <p>
              Neelesh’s journey reflects resilience, foresight, and an unwavering belief
              in the power of strong leadership and strategic entrepreneurship to
              transform markets—and lives.
            </p>
          </div>

          <a
            href="/pillars"
            className="about-ceo-modal-button"
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


/* ─────────────────────────────────────────
   PERSON CARD
───────────────────────────────────────── */

function PersonCard({
  person,
  delay = "0",
}) {

  const [open, setOpen] = useState(false);


  const image =
    teamImages[person.name] || person.image;


  return (
    <>

      <div
        className="director-card-scene"
        data-reveal="up"
        data-delay={delay}
      >

        <div className="director-card-inner">

          <div className="director-card director-card-front">


            {/* IMAGE */}

            <div className="director-photo">

              {image ? (

                <img
                  src={image}
                  alt={person.name}
                  className="director-photo-img"
                />

              ) : (

                <div className="director-photo-placeholder">

               

                </div>

              )}


              {/* <div className="director-label">
                Core Team
              </div> */}

            </div>


            {/* BODY */}

            <div className="director-card-body">

              <p className="director-name">
                {person.name}
              </p>


              <p className="director-role-text">
                {person.role}
              </p>


              {person.desc &&
                person.desc.trim() !== "" &&
                person.desc !== "Write-up pending" && (

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


/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */

function About() {

  useScrollReveal();

  const [ceoOpen, setCeoOpen] = useState(false);

  const location = useLocation();


  /* ───────────────── ARCHITECT HASH ───────────────── */

  useEffect(() => {

    if (location.hash === "#architect") {

      setTimeout(() => {

        const section =
          document.getElementById("architect");

        if (section) {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 100);

    }

  }, [location]);


  /* ───────────────── CORE TEAM ───────────────── */

  const coreTeam = team.coreTeam
    .map((person) => ({
      ...person,
      img:
        teamImages[person.name] ||
        person.image,
    }))
    .sort(
      (a, b) =>
        a.order - b.order
    );


  return (
    <>


      {/* ═══════════════════════════════════════
          PAGE BANNER
      ═══════════════════════════════════════ */}

      <div
        className="about-page-banner"
        data-reveal="fade"
      >

        <img
          src={banner}
          alt="About JSB Group"
          className="about-page-banner-image"
        />


        <div className="about-page-banner-overlay">

          <h1>
            About Us
          </h1>

        </div>

      </div>



      {/* ═══════════════════════════════════════
          WHO WE ARE
      ═══════════════════════════════════════ */}

      <section className="section about-subheading">

        <div className="container">

          <div
            className="section-title-wrap"
            data-reveal="fade"
          >

            <span className="section-title">
              Who We Are
            </span>

          </div>


          <div className="about-who-grid">


            {/* VIDEO */}

            <div
              className="about-who-img-placeholder"
              data-reveal="left"
            >

              <video
                className="about-who-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >

                <source
                  src={organisationVideo}
                  type="video/mp4"
                />

                Your browser does not support
                the video tag.

              </video>

            </div>


            {/* TEXT */}
 
<div
  className="about-who-text"
  data-reveal="right"
  data-delay="150"
  style={{
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    color: "#333",
    lineHeight: 1.8,
  }}
>
  <p style={{ margin: "0 0 14px" }}>
    JSB Group was established in 2015 with a simple vision:
    build enduring businesses that elevate everyday experiences.
    From humble beginnings, we’ve grown into a home-grown
    conglomerate that thrives across the UAE and extends our
    footprint to Qatar, Bahrain, and India—uniting investment,
    technology, and consumer-focused industries under one
    shared standard of excellence.
  </p>

  <p style={{ margin: "0 0 14px" }}>
    Today, JSB Group comprises{" "}
    <strong>15+ companies / brands</strong>, operating across
    multiple verticals including{" "}
    <strong>
      Investment &amp; Technology, Food &amp; Beverage,
      Retail &amp; Distribution, Sports &amp; Fitness,
      Fitness &amp; Fitout, and India Verticals.
    </strong>{" "}
    Each vertical is guided by the same principles—innovation,
    operational excellence, and long-term value creation—while
    staying rooted in local market understanding.
  </p>

  <p
    style={{
      color: "#9b1c1c",
      fontSize: "21px",
      fontWeight: 600,
      lineHeight: 1.8,
      margin: "0 auto 14px",
      maxWidth: "850px",
    }}
  >
    JSB Group doesn’t just build companies—we build ecosystems
    for growth, performance, and lifestyle innovation.
  </p>

  {/* <p style={{ margin: "0 0 14px" }}>
    With a diversified portfolio and a clear forward strategy,
    JSB Group continues to expand, strengthen partnerships,
    and create meaningful brands that resonate across regions.
  </p> */}

  <p style={{ margin: 0 }}>
    Explore JSB Group and discover how we are redefining success
    through innovation, excellence, and purpose-driven leadership.
  </p>
</div>
 


          </div>

        </div>

      </section>



      {/* ═══════════════════════════════════════
          VISION / MISSION / PURPOSE
      ═══════════════════════════════════════ */}

      <section className="section vmp-section">

        <div className="container">

          <div className="vmp-grid">

            {[
              {
                label: "Vision",
                text: companyInfo.vision,
                image: visionImg,
              },

              {
                label: "Mission",
                text: companyInfo.mission,
                image: missionImg,
              },

              {
                label: "Purpose",
                text: companyInfo.purpose,
                image: purposeImg,
              },

            ].map(
              ({
                label,
                text,
                image,
              }, i) => (

                <div
                  key={label}
                  className="vmp-card"
                  data-reveal="up"
                  data-delay={String(
                    i * 150 + 100
                  )}
                >

                  <div className="vmp-card-img">

                    <img
                      src={image}
                      alt={`${label} - JSB Group`}
                      className="vmp-card-image"
                    />

                  </div>


                  <div className="vmp-card-body">

                    <h3>
                      {label}
                    </h3>

                    <p>
                      {text}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>



      {/* ═══════════════════════════════════════
          THE ARCHITECT
      ═══════════════════════════════════════ */}

      <section
        id="architect"
        className="section architect-section"
      >

        <div
          className="section-title-wrap"
          data-reveal="fade"
        >

          <span className="section-title">
            The Architect
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
                style={{
                  color: "black",
                }}
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
                  <strong>30+ years of experience across the Middle East and India</strong>.
                  As <strong>Founder &amp; CEO of JSB Group</strong>, he has built a
                  diversified conglomerate with a strong, execution-first focus
                  on <strong>Retail &amp; Distribution</strong>, alongside interests
                  in <strong>fitness, Sports, hospitality, healthcare, and technology</strong>.
                </p>
              </div>


              <button
                className="architect-read-more"
                data-reveal="right"
                data-delay="600"
                onClick={() =>
                  setCeoOpen(true)
                }
              >
                Read More →
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* ═══════════════════════════════════════
          CEO MODAL
      ═══════════════════════════════════════ */}

      {ceoOpen && (
        <AboutCeoModal onClose={() => setCeoOpen(false)} />
      )}



      {/* ═══════════════════════════════════════
          CORE TEAM
      ═══════════════════════════════════════ */}

      <section className="section pillars-section">

        <div className="container">


          <div
            className="section-title-wrap"
            data-reveal="fade"
          >

            <span className="section-title">
              Core Team
            </span>

          </div>


          <div className="directors-grid">

            {coreTeam.map(
              (person, index) => (

                <PersonCard
                  key={person.name}
                  person={person}
                  delay={String(
                    (index % 4) * 150 + 100
                  )}
                />

              )
            )}

          </div>

        </div>

      </section>


    </>
  );
}


export default About;