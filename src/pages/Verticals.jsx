import "../css/Verticals.css";
import { verticals } from "../data/verticals";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";
import denaster from "../assets/Brand-Logos/Denaster Logo.webp";
import inov8 from "../assets/Brand-Logos/Inov8.webp";
import garmin from "../assets/Brand-Logos/Garmin Black Logo.webp";
import zeroG from "../assets/Brand-Logos/zerog arabic english-01 (3).webp";
import bvb from "../assets/Brand-Logos/Artworks_BVB PRo League-15.webp";
import snap from "../assets/Brand-Logos/snap-fitness.webp";

const logoMap = {
  "Pressman's Sandwiches": pressmans,
  "Target One": targetOne,
  Denaster: denaster,
  "Harrison / Inov8": inov8,
  "Garmin by Activ8": garmin,
  Motiv8: motiv8,
  "ZeroG Beds": zeroG,
  "Snap Fitness": snap,
  "UAE Bulls": uaeBulls,
  "BVB League": bvb,
  "VK Technology": vkTech,
};

function LogoCard({ name, logo, url, delay = 0 }) {
  const content = logo ? (
    <div className="logo-card-img-wrap">
      <img src={logo} alt={name} loading="lazy" />
    </div>
  ) : (
    <span className="logo-card-text">{name}</span>
  );

  return (
    <a
      href={url || "#"}
      target={url ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="logo-card"
      aria-label={name}
      style={{ animationDelay: `${delay}s` }}
    >
      {content}
    </a>
  );
}

function Verticals() {
  return (
    <>
      <div className="page-hero container text-center py-12">
        {/* Main title with red lines */}
        <div className="page-hero">
          <h1
            style={{ textAlign: "center", marginTop: "5px", color: "darkred" }}
          >
            Verticals
          </h1>
        </div>

        {/* Sub heading */}
        <div className="section-title-wrap">
          <span className="section-title">The Group Portfolio</span>
        </div>

        <p className="vertical-page-intro">
          In the vibrant landscape of UAE's business arena, JSB Group founded in
          2015 has emerged as a dynamic conglomerate across multiple sectors
          including Distribution, Retail, F&B, Fitness, Technology, Interior
          Fitouts & Outdoor Furniture. With a strong portfolio of 15+ brands,
          JSB Group continues redefining success through innovation, excellence,
          and purpose-driven leadership.
        </p>
      </div>

      {verticals.map((cat, i) => (
        <section key={i} className="vertical-category">
          <div className="container">
            <div className="vertical-content">
              <h2 className="vertical-heading">{cat.title}</h2>

              <p className="vertical-description">{cat.description}</p>

              <div className="vertical-readmore-box">
                <p>{cat.readMore}</p>
              </div>
            </div>

            <div className="vertical-brands-grid">
              {cat.items.map((brand, j) => (
                <LogoCard
                  key={j}
                  name={brand.name}
                  url={brand.link}
                  logo={logoMap[brand.name]}
                  delay={j * 0.07}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Verticals;
