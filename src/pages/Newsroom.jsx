 
import "../css/Newsroom.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import banner from "../assets/banners/newsroomnew.png";

import newsroom01 from "../assets/newsroom/newsroom-01.png";
import newsroom02 from "../assets/newsroom/newsroom-02.png";
import newsroom03 from "../assets/newsroom/neeeleshnews.png";
import snapnews from "../assets/newsroom/snapnews.png";
import pressmansnews from "../assets/newsroom/pressmansnews1.png";
import uaebullsnews from "../assets/newsroom/uaebullsnews1.png";

const news = [
  {
    tag: "Latest Update",
    title: "JSB Group Expands Into New Verticals in UAE",
    image: newsroom01,
    desc: "Continuing its growth trajectory, JSB Group has announced strategic expansions across multiple sectors including Technology and Sports.",
    url: "https://example.com/news-1",
  },
  {
    tag: "Press Release",
    title: "New Retail Partnerships Announced Globally",
    image: newsroom02,
    desc: "JSB Group's retail arm has secured new international partnerships to strengthen its distribution network across the Middle East.",
    url: "https://example.com/news-2",
  },
{
  tag: "Media",
  title: "Neelesh Bhatnagar\n Founder and MD, NB Ventures",
  image: newsroom03,
  desc: "Bhatnagar leads the Dubai-based venture capital and investment platform that channels family capital into startups and growth enterprises across India and the Middle East.",
  url: "https://gulfbusiness.com/en/2025/lists/top-100-indians-2025/neelesh-bhatnagar/",
},
  {
    tag: "Sports",
    title: "UAE Bulls Win Championship Season 9",
    image: uaebullsnews,
    desc: " UAE Bulls become first founding franchise confirmed for new era of Abu Dhabi T10",
    url: " https://www.arabnews.com/sport/uae-bulls-become-first-founding-franchise-confirmed-for-new-era-of-abu-dhabi-t10-3001652",
  },
  {
    tag: "Fitness",
    title: "Snap Fitness Expands to Fourth UAE Location",
    image: snapnews,
    desc: "Building on the success of its first UAE branch in 2018, Snap Fitness continues to bring world-class gym facilities to the Emirates.",
    url: "https://example.com/news-5",
  },
  {
    tag: "F&B",
    title: "Pressman's Sandwiches Reaches 10 Locations",
    image: pressmansnews,
    desc: "JSB Group's homegrown F&B brand Pressman's Sandwiches has reached a milestone of 10 live locations across the UAE.",
    url: " https://www.khaleejtimes.com/kt-network/uaes-homegrown-and-popular-sandwich-brand-pressmans-expands-to-10-locations-across-the-country",
  },
];

function Newsroom() {
  useScrollReveal();

  return (
    <>
      <div className="about-page-banner" data-reveal="fade">
        <img
          src={banner}
          alt="JSB Group Newsroom"
          className="about-page-banner-image"
        />

        <div className="about-page-banner-overlay">
          <h1>Newsroom</h1>
        </div>
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
                  {item.image && (
                    <img src={item.image} alt={item.title} />
                  )}
                </div>

                <div className="news-card-body">
                  <span className="news-tag">{item.tag}</span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <a
                    href={item.url}
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
 