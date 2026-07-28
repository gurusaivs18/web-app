import "../css/Careers.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";
const perks = [
  {
    title: "General Inquiries",
    desc: "Have a question about our businesses, services, or operations? Our team is ready to provide the information and support you need.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
      </svg>
    ),
  },
  {
    title: "Partnership Opportunities",
    desc: "Interested in collaborating with JSB Group? We are always open to exploring strategic partnerships that drive innovation, growth, and long-term value.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 12l3 3a2 2 0 0 0 3 0l5-5" />
        <path d="M3 10l4-4 4 4" />
        <path d="M17 6l4 4-4 4" />
      </svg>
    ),
  },
  {
    title: "Strategic Partnerships",
    desc: "Explore opportunities to collaborate with a group committed to innovation, excellence, and sustainable growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v6" />
        <path d="M12 13L6.5 18" />
        <path d="M12 13L17.5 18" />
      </svg>
    ),
  },
];

function Careers() {
  useScrollReveal();

  return (
    <>
      <div className="page-hero" data-reveal="fade">
        <h1>Careers</h1>
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
                <div className="perk-icon">{p.icon}</div>
                <h3>{p.title}</h3>

                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="careers-cta" data-reveal="up" data-delay="200">
            <h2>Let's Start a Conversation </h2>
            <p>
              {" "}
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
