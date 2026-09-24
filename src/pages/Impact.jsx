import { stats } from "../data/stats";
import "../css/Impact.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Impact icons
import icon01 from "../assets/icons-impact/icon-01.png";
import icon02 from "../assets/icons-impact/icon-02.png";
import icon03 from "../assets/icons-impact/icon-03.png";
import icon04 from "../assets/icons-impact/icon-04.png";
import icon05 from "../assets/icons-impact/icon-05.png";
import icon06 from "../assets/icons-impact/icon-06.png";
import icon07 from "../assets/icons-impact/icon-07.png";
import banner from "../assets/banners/impactnew.png";

const statIcons = [
  icon01,
  icon02,
  icon03,
  icon04,
];

const storyIcons = [
  icon05,
  icon06,
  icon07,
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
      {/* PAGE TITLE */}
    {/* HERO */}
<div className="about-page-banner" data-reveal="fade">
  <img
    src={banner}
    alt="JSB Group Verticals"
    className="about-page-banner-image"
  />

  <div className="about-page-banner-overlay">
    <h1>Impact</h1>
  </div>
</div>

      <section className="section">
        <div className="container">

          {/* SECTION TITLE */}
          <div
            className="section-title-wrap"
            data-reveal="fade"
          >
            <span className="section-title">
              Our Impact
            </span>
          </div>

          {/* INTRO */}
          <p
            className="impact-intro"
            data-reveal="up"
            data-delay="150"
          >
            Since 2015, JSB Group has grown into a diversified conglomerate
            delivering measurable impact across industries, communities, and
            economies through innovation, leadership, and sustainable
            expansion.
          </p>

          {/* ================================
              IMPACT STATS
          ================================= */}
          <div className="impact-stats-grid">
            {stats.map((item, i) => (
              <div
                key={i}
                className="impact-stat-box"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                {/* REAL ICON */}
                <div className="impact-stat-icon">
                  <img
                    src={statIcons[i]}
                    alt=""
                  />
                </div>

                {/* NUMBER */}
                <h2>
                  {item.value}
                </h2>

                {/* LABEL */}
                <p className="impact-stat-label">
                  {item.label}
                </p>

                {/* DESCRIPTION */}
                <p className="impact-stat-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ================================
              IMPACT STORIES
          ================================= */}
          <div className="impact-stories">
            {stories.map((story, i) => (
              <div
                key={i}
                className="impact-story-card"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                {/* REAL STORY ICON */}
                <div className="impact-story-icon">
                  <img
                    src={storyIcons[i]}
                    alt=""
                  />
                </div>

                {/* STORY CONTENT */}
                <div className="impact-story-body">
                  <h3>
                    {story.title}
                  </h3>

                  <p>
                    {story.desc}
                  </p>
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