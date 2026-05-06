import { companyInfo } from "../data/company";
import "../css/About.css";
import ceoImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-01.webp";
import Hero from "../components/Hero";

const CloudIcon = () => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: 48, height: 48, fill: "rgba(255,255,255,0.7)" }}
  >
    <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    <path d="M14 13v4h-4v-4H7l5-5 5 5h-3z" />
  </svg>
);

const allDirectors = [
  {
    name: "Praveen Bhatnagar",
    role: "Director",
    desc: "CPA with expertise in finance and business strategy across Retail, Fitness, Hospitality, and Healthcare.",
  },
  {
    name: "Rushab Bhatnagar",
    role: "Director",
    desc: "Co-Founder and CEO of NOVO Labs. Strategic Director for NB Ventures.",
  },
  {
    name: "Deep Bhogal",
    role: "Managing Director",
    desc: "30+ years in retail and distribution. Managing Director of Denaster.",
  },
  { name: "Sanjeev Sinha", role: "Director", desc: "" },
  { name: "Mohammed Ashik", role: "Director", desc: "" },
];

const allPartners = [
  { name: "Naz Ayat", role: "Partner" },
  { name: "Afshad Mistry", role: "Partner" },
  { name: "Sanal Kumar", role: "Partner" },
  { name: "Partner", role: "Partner" },
];

function About() {
  return (
    <>
      <div className="page-hero">
        <h1 style={{ textAlign: "center", marginTop: "5px" }}>About Us</h1>
      </div>

      {/* WHO WE ARE */}
      <section className="section about-who">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Who We Are</span>
          </div>
          <div className="about-who-grid">
            <div className="about-who-img-placeholder">Organisation Image</div>
            <div className="about-who-text">
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

      {/* VISION / MISSION / PURPOSE */}
      <section className="section vmp-section">
        <div className="container">
          <div className="vmp-grid">
            {[
              { label: "Vision", text: companyInfo.vision },
              { label: "Mission", text: companyInfo.mission },
              { label: "Purpose", text: companyInfo.purpose },
            ].map(({ label, text }) => (
              <div key={label} className="vmp-card">
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

      {/* THE ARCHITECT */}
      <section className="section architect-section">
        <div className="section-title-wrap">
          <span className="section-title">The Architect & Pillars</span>
        </div>
        <div className="architect-banner">
          <img
            src={ceoImage}
            alt="Neelesh Bhatnagar"
            className="architect-banner-bg"
          />
          <div className="architect-gradient" />
          <div className="architect-label">THE ARCHITECT</div>
          <div className="architect-content">
            <div className="architect-info">
              <h3>Neelesh Bhatnagar</h3>
              <p className="role">CEO & Founder</p>
              <p>
                Entrepreneur with over three decades of experience spanning the
                Middle East and India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTOR PILLARS */}
      <section className="section pillars-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Director Pillars</span>
          </div>

          <div className="directors-grid">
            {allDirectors.slice(0, 3).map((d, i) => (
              <div key={i} className="director-card">
                <div className="director-photo">
                  <div className="director-label">Director</div>
                </div>
                <p className="director-name">{d.name}</p>
                <p className="director-role-text">{d.role}</p>
                {d.desc && <p className="director-desc">{d.desc}</p>}
              </div>
            ))}
          </div>

          <div className="directors-grid-2">
            {allDirectors.slice(3, 5).map((d, i) => (
              <div key={i} className="director-card">
                <div className="director-photo">
                  <div className="director-label">Director</div>
                </div>
                <p className="director-name">{d.name}</p>
                <p className="director-role-text">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER PILLARS */}
      <section className="section pillars-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-title">Partner Pillars</span>
          </div>
          <div className="partners-grid">
            {allPartners.map((p, i) => (
              <div key={i} className="director-card">
                <div className="director-photo">
                  <div className="director-label">Partner</div>
                </div>
                <p className="director-name">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
