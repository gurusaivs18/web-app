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

import organisationVideo from "../assets/About us/corporatevideo.mp4";

import banner from "../assets/banners/aboutbannernew1.webp";

import { createPortal } from "react-dom";

import { useLocation } from "react-router-dom";

import { team } from "../data/team";


/* ─────────────────────────────────────────
   TEAM IMAGES
───────────────────────────────────────── */

const teamImages = {
  "Noel": noel,

  "Deep Bhogal": deepImg,

  "Naz Ayat": nazImg,

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
            ?.split("\n\n")
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
            >

              <h3>
                An Organisation
              </h3>


              <p>
                {companyInfo.about}
              </p>


              <br />


              <p>
                Explore JSB Group and discover how
                we are redefining success through
                innovation, excellence, and
                purpose-driven leadership.
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
                  color: "white",
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


              <p
                data-reveal="right"
                data-delay="500"
              >
                Neelesh Bhatnagar doesn’t chase
                trends—he builds the next chapter
                of commerce, capability, and growth.

                Neelesh Bhatnagar is a seasoned
                entrepreneur with 30+ years of
                experience across the Middle East
                and India. As CEO & Founder of JSB
                Group, he has built a diversified
                conglomerate with a strong,
                execution-first focus on Retail &
                Distribution, alongside interests
                in fitness, hospitality, healthcare,
                and technology.
              </p>


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

        <Modal
          person={{
            name: team.ceo.name,
            role: team.ceo.role,
            desc: team.ceo.desc,
          }}
          onClose={() =>
            setCeoOpen(false)
          }
        />

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