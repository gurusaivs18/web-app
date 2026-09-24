 
import { useState, useEffect } from "react";
import { companyInfo } from "../data/company";
import "../css/About.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ceoImage from "../assets/jsbGroupWebsite/ceoHomeBanner.webp";
import { useLocation } from "react-router-dom";
import rushabImg from "../assets/Partners/rushab-assets-1.png";
import deepImg from "../assets/Partners/deep01.jpeg";
import sanjeevImg from "../assets/Partners/Sanjeev.1.jpeg";
import { createPortal } from "react-dom";
import sanalImg from  "../assets/Partners/sanal-assets-1.png";
import supriyaImg from "../assets/Partners/supriya-assets-1.png";
import naz from "../assets/Partners/Nas-asset-1.png";
import ashik from "../assets/Partners/Ashik-asset-1.png";
 import visionImg from "../assets/About us/visionnew.png";
import missionImg from "../assets/About us/missionnew.png";
import purposeImg from "../assets/About us/purposenew.png";
import organisationImg from "../assets/About us/organisationnew.png";
import banner from "../assets/banners/aboutbannernew1.png";


 


const ceoWriteup = `Neelesh Bhatnagar is an entrepreneur with over three decades of experience spanning the Middle East and India. As the CEO & Founder of JSB Group, he has built a diversified conglomerate with interests across retail, fitness, hospitality, healthcare, and technology.

His vision has been the driving force behind JSB Group's expansion into multiple verticals, creating an ecosystem of businesses that complement and strengthen one another. Under his leadership, JSB Group has grown from a single venture into a multi-faceted organisation with a presence across the UAE and beyond.

Neelesh is known for his ability to identify opportunities ahead of the curve, his hands-on leadership style, and his commitment to building businesses that create lasting value — not just for shareholders, but for communities and people.

His journey is one of resilience, vision, and an unwavering belief in the power of entrepreneurship to transform lives.`;

const allDirectors = [
  {
    name: "Rushab Bhatnagar",
    role: "Director",
    img: rushabImg,
    writeup: `Rushab holds a Bachelor’s degree in Business & Economics from Exeter and a Master’s in Strategic Marketing from Imperial College. As the Co-Founder and CEO of NOVO Labs, a pioneering food technology start-up based in Bangalore, leading an innovative portfolio that includes Monkey Box, Combo@Co, Khichdi Tales, Pressman’s Sandwiches, Thaali Tales, Beijing Lu, Paratha Tales, Pizza People, and Top Dog. 
In addition to his role at NOVO Labs, Rushab is the Strategic Director for NB Ventures, where he spearheads the Bangalore office. NB Ventures is a growth-stage venture fund based in the U.A.E., with a robust portfolio of over 70 Indian start-ups. 
`,
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
    writeup: `With over 30 years of commercial experience in supply and distribution across retail, software, and electronics industries, Deep brings a wealth of expertise to his role as Managing Director of Denaster. Under his leadership for more than two decades, Denaster has evolved into a multimillion-dollar SME with a workforce of over 100 employees, establishing itself as a key supplier and operator in the Middle East Duty Free and retail sectors. 

Deep's strategic vision and passion have driven Denaster to secure exclusive regional rights for renowned brands and leveraging his insights and industry knowledge to foster successful partnerships and drive growth. 
`,
  },
  {
    name: "Naz Ayat",
    role: "Partner",
    img: naz ,
    writeup: `With a robust career spanning over 30 years in the software and electronics industries, I have developed a comprehensive skill set in sales management and strategic leadership. My journey began as a Sales Manager, where I honed my ability to drive revenue growth and build strong client relationships. As I progressed to the role of Sales Director, I led high-performing teams and crafted sales strategies that significantly enhanced market presence. 
 
Throughout my career, I have had the privilege of working with major UK and international retailers, including Amazon and HMV. These experiences have provided me with valuable insights into diverse market dynamics and consumer behaviors, enabling me to tailor solutions that meet the unique needs of each client. 
 
My expertise extends beyond traditional sales roles; I have been deeply involved in negotiating and securing major contracts, optimizing distribution channels, and implementing innovative sales techniques. This has allowed me to drive substantial growth for the organizations I’ve been part of, while also establishing enduring partnerships with key industry players. 
 
My extensive background in both the software and electronics sectors, combined with my strategic vision and leadership skills, has equipped me to navigate complex market landscapes and deliver exceptional results. I am passionate about leveraging my experience to continue driving success and fostering growth in the ever-evolving technology landscape. 
`,
  },
];

function Modal({ person, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
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

  const handleReadMore = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="director-card-scene" data-reveal="up" data-delay={delay}>
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
                <button className="read-more-btn" onClick={handleReadMore}>
                  Read More →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {open && <Modal person={person} onClose={handleClose} />}
    </>
  );
}

function About() {
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
 <div className="about-page-banner" data-reveal="fade">
  <img
    src={banner}
    alt="About JSB Group"
    className="about-page-banner-image"
  />

  <div className="about-page-banner-overlay">
    <h1>About Us</h1>
  </div>
</div>

{/* ── WHO WE ARE ── */}
<section className="section about-subheading">
  <div className="container">
    <div className="section-title-wrap" data-reveal="fade">
      <span className="section-title">Who We Are</span>
    </div>

    <div className="about-who-grid">
      <div className="about-who-img-placeholder" data-reveal="left">
        <img
          src={organisationImg}
          alt="JSB Group Organisation"
          className="about-who-image"
        />
      </div>

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
      ].map(({ label, text, image }, i) => (
        <div
          key={label}
          className="vmp-card"
          data-reveal="up"
          data-delay={String(i * 150 + 100)}
        >
          <div className="vmp-card-img">
            <img
              src={image}
              alt={`${label} - JSB Group`}
              className="vmp-card-image"
            />
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

              <p className="role" data-reveal="right" data-delay="400">
                Founder & CEO
              </p>

              <p data-reveal="right" data-delay="500">
                Neelesh Bhatnagar is an entrepreneur with over three decades of
                experience spanning the Middle East and India. As the CEO &
                Founder of JSB Group, he has built a diversified conglomerate
                with interests across retail, fitness, hospitality, healthcare,
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

      {/* ── DIRECTOR PILLARS ── */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Directors</span>
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

      {/* ── PARTNER PILLARS ── */}
      <section
        className="section pillars-section"
        style={{ paddingTop: 0 }}
      >
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Partners</span>
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
 
