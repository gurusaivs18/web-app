import "../css/Newsroom.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const news = [
  {
    tag: "Latest Update",
    title: "JSB Group Expands Into New Verticals in UAE",
    // URL: "https://jsb.ae/",
    desc: "Continuing its growth trajectory, JSB Group has announced strategic expansions across multiple sectors including Technology and Sports.",
  },
  {
    tag: "Press Release",
    title: "New Retail Partnerships Announced Globally",
    // URL: "https://jsb.ae/",
    desc: "JSB Group's retail arm has secured new international partnerships to strengthen its distribution network across the Middle East.",
  },
  {
    tag: "Media",
    title: "Featured in Leading Business Publications",
    // URL: "https://jsb.ae/",
    desc: "Neelesh Bhatnagar and JSB Group have been featured in Forbes Middle East and Arabian Business for their outstanding contributions.",
  },
  {
    tag: "Sports",
    title: "UAE Bulls Win Championship Season 9",
    // URL: "https://jsb.ae/",
    desc: "The UAE Bulls cricket team made history by lifting the trophy as Champions of Season 9 (2025–26).",
  },
  {
    tag: "Fitness",
    title: "Snap Fitness Expands to Fourth UAE Location",
    // URL: "https://jsb.ae/",
    desc: "Building on the success of its first UAE branch in 2018, Snap Fitness continues to bring world-class gym facilities to the Emirates.",
  },
  {
    tag: "F&B",
    title: "Pressman's Sandwiches Reaches 10 Locations",
    // URL: "https://jsb.ae/",
    desc: "JSB Group's homegrown F&B brand Pressman's Sandwiches has reached a milestone of 10 live locations across the UAE.",
  },
];

function Newsroom() {
  useScrollReveal();

  return (
    <>
      <div className="page-hero" data-reveal="fade">
        <h1>Newsroom</h1>
      </div>

      <section className="section section--v1">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Latest News</span>
          </div>

          <div className="newsroom-grid">
            {news.map((item, i) => (
              <div
                key={i}
                className="news-card"
                data-reveal="up"
                data-delay={String((i % 3) * 150 + 100)}
              >
                <div className="news-card-img">
                  {/* <img src={img} alt={item.title} /> */}
                </div>
                <div className="news-card-body">
                  <span className="news-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a
                    href={item.URL}
                    className="news-read-more"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsroom;
