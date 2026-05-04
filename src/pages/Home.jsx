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

const brandLogos = [
  { img: uaeBulls, url: "https://uaebulls.ae" },
  { img: vkTech, url: "https://vktechnologiesme.com/" },
  { img: nbVentures, url: "https://nbventuresme.com/" },
  { img: targetOne, url: "https://targetoneme.com/" },
  { img: pressmans, url: "https://pressmans.com/" },
  { img: motiv8, url: "https://motiv8.ae/" },
  { img: denaster, url: "https://www.denaster.com/" },
];

function Home() {
  return (
    <>
      <Hero />

      {/* INTRO */}
      <section className="section home-intro">
        <div className="container">
          <div className="home-intro-text">
            <h2>An Organisation Inspired by Dreams & Led by Purpose.</h2>
            <p>{companyInfo.about}</p>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="ceo-section">
        <div className="ceo-content">
          <img src={ceoImage} className="ceo-img" alt="CEO" />

          <div className="ceo-info">
            <h3>Neelesh Bhatnagar</h3>
            <p className="ceo-role">CEO & Founder</p>
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

      {/* VERTICALS (HOME) */}
      <section className="home-verticals-logos">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Verticals</span>
          </div>

          <div className="logo-grid">
            {brandLogos.map((logo, i) => (
              <a
                key={i}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-frame"
              >
                <img src={logo.img} alt="brand logo" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section home-impact">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Impact</span>
          </div>

          <div className="stats-grid">
            {stats.map((item, i) => (
              <div key={i} className="stat-box">
                <h2>{item.value}</h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
