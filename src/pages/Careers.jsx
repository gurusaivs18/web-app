import "../css/Careers.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";
import banner from "../assets/banners/careernew.png";
import careers01 from "../assets/careers/careers-01.png";
import careers02 from "../assets/careers/careers-02.png";
import careers03 from "../assets/careers/careers-03.png";
const perks = [
  {
    title: "General Inquiries",
    desc: "Have a question about our businesses, services, or operations? Our team is ready to provide the information and support you need.",
    image: careers01,
  },
  {
    title: "Partnership Opportunities",
    desc: "Interested in collaborating with JSB Group? We are always open to exploring strategic partnerships that drive innovation, growth, and long-term value.",
    image: careers02,
  },
  {
    title: "Strategic Partnerships",
    desc: "Explore opportunities to collaborate with a group committed to innovation, excellence, and sustainable growth.",
    image: careers03,
  },
];

function Careers() {
  useScrollReveal();

  return (
    <>
      {/* HERO */}
<div className="about-page-banner" data-reveal="fade">
  <img
    src={banner}
    alt="JSB Group Verticals"
    className="about-page-banner-image"
  />

  <div className="about-page-banner-overlay">
    <h1>Verticals</h1>
  </div>
</div>

      <section className="section">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Careers at JSB Group</span>
          </div>

          <div className="careers-perks">
            {perks.map((p, i) => (
              <div
                key={i}
                className="perk-card"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                <div className="perk-image">
                  <img src={p.image} alt={p.title} />
                </div>

                <div className="perk-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="careers-cta" data-reveal="up" data-delay="200">
            <h2>Let's Start a Conversation</h2>

            <p>
              We welcome inquiries from individuals, businesses, partners, and
              stakeholders who would like to connect with us. Whether you're
              exploring collaboration
            </p>

            <Link to="/contact" className="btn btn--white">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;