 
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
import ashik from "../assets/Partners/ashiknew.png";
import { createPortal } from "react-dom";
import banner from "../assets/banners/pillarsnew.png";

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
    writeup: `I'm a Chartered Accountant with close to three decades of experience turning finance from a reporting function into a driver of profitability and growth. My remit today covers business strategy, the full accounting and finance function, IT, HR & Administration and Marketing — with a particular focus on operational efficiency and new business development. Designing the policies, procedures and controls that let a fast-moving group scale cleanly is where I do my best work. Over my career I've built and re-engineered finance and commercial functions at Landmark Group (EMAX), Sana Fashion, Samsung India and Mattel Inc. Core strengths: business & financial strategy, commercial finance, budgeting & forecasting, controls & SOP design, supply chain and working-capital management, ERP and process automation, and building teams that run the numbers well.`,
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
    writeup: `An accomplished MBA in Data Science and Applied AI - With over 15 years of experience in technology, enterprise systems and digital transformation, Mohammed Ashik is a strategic technology leader specializing in AI-enabled ERP and enterprise platform architecture across the retail, distribution, FMCG and fitness sectors. An accomplished PhD professional with an MBA in Data Science and Applied AI, he brings together strong academic expertise and extensive hands-on experience in building intelligent, scalable and data-driven technology ecosystems.

His expertise encompasses ERP and POS systems, enterprise integrations, AI and ML-driven analytics, intelligent MIS platforms, eCommerce solutions, cloud and microservices architecture, and cross-platform digital applications. His approach focuses on transforming complex business operations into integrated, automated and decision-driven digital platforms, enabling organizations to leverage technology and data for greater visibility, efficiency and measurable business outcomes.

As Chief Technology Officer at JSB Group, he leads the architecture and delivery of integrated technology platforms across multiple business functions and sectors. His responsibilities span enterprise system architecture, ERP and POS integration, AI-driven analytics, business intelligence, cloud infrastructure, eCommerce platforms and API-led system integration. He also heads technology for Vanitykart Technologies DMCC, the Group’s Technology Division, delivering commercial POS solutions, Business Intelligence platforms and technology integrations for external customers.

With a strong focus on applied AI and decision intelligence, Mohammed has developed systems that transform enterprise data into actionable insights through intelligent dashboards, forecasting models and automated workflows. His expertise in designing secure API ecosystems, data pipelines and microservices enables seamless connectivity between ERP, POS, commerce, loyalty and operational platforms.

His career reflects a commitment to using technology not simply as an operational function, but as a strategic enabler for innovation, scalability and business growth—bridging the intersection of business operations, enterprise architecture and applied artificial intelligence to build future-ready technology platforms.`,
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
    img: naz,
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
 <div className="about-page-banner" data-reveal="fade">
  <img
    src={banner}
    alt="JSB Group Pillars"
    className="about-page-banner-image"
  />

  <div className="about-page-banner-overlay">
    <h1>Pillars</h1>
  </div>
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
 
