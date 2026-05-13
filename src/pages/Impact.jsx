import { stats } from "../data/stats";
import "../css/Impact.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const statIcons = [
  <svg viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4v2l8 5 8-5V4zM4 13v7h7v-5h2v5h7v-7L12 8z" />
  </svg>,
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
  </svg>,
];

const stories = [
  {
    title: "Diversified Growth",
    desc: "JSB Group has expanded across F&B, Retail, Technology, Fitness, and Distribution, building a strong multi-sector ecosystem in the UAE.",
  },
  {
    title: "Employment Creation",
    desc: "Through 15+ companies and 30+ outlets, the group generates thousands of jobs and career opportunities across multiple industries.",
  },
  {
    title: "Innovation & Transformation",
    desc: "From tech platforms to retail expansion and fitness ecosystems, JSB Group continuously drives innovation-led transformation.",
  },
];

function Impact() {
  useScrollReveal();

  return (
    <>
      <div className="page-hero" data-reveal="fade">
        <h1 className="impact-page-title">Impact</h1>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Our Impact</span>
          </div>

          <p className="impact-intro" data-reveal="up" data-delay="150">
            Since 2015, JSB Group has grown into a diversified conglomerate
            delivering measurable impact across industries, communities, and
            economies through innovation, leadership, and sustainable expansion.
          </p>

          {/* STATS */}
          <div className="impact-stats-grid">
            {stats.map((item, i) => (
              <div
                key={i}
                className="impact-stat-box"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                <div className="impact-stat-icon">{statIcons[i]}</div>
                <h2>{item.value}</h2>
                <p>{item.label}</p>
                <small>{item.desc}</small>
              </div>
            ))}
          </div>

          {/* STORIES */}
          <div className="impact-stories">
            {stories.map((s, i) => (
              <div
                key={i}
                className="impact-story-card"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                <div className="impact-story-top-line"></div>
                <div className="impact-story-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Impact;
