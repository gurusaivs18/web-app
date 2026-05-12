import { useState } from "react";
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
import vip from "../assets/Brand-Logos/VIP logo png.webp";
import harrison from "../assets/Brand-Logos/Harrison Digital.webp";
import monkey from "../assets/Brand-Logos/Monkey Box logo.webp";
import biriyani from "../assets/Brand-Logos/biryani logo 1080x1080.webp";
import activ from "../assets/Brand-Logos/Activ8 Logo.webp";

const logoMap = {
  "Pressman’s Sandwiches": pressmans,
  "Target One": targetOne,
  Denaster: denaster,
  "Harrison / Inov8": inov8,
  "Garmin by Activ8": garmin,
  Activ8: activ,
  "ZeroG Beds & Mattresses": zeroG,
  "Snap Fitness": snap,
  "UAE Bulls": uaeBulls,
  "BVB League": bvb,
  "VK Technology": vkTech,
  "VIP Cosmetics": vip,
  "Monkey Box": monkey,
  "Biriyani Box": biriyani,
  Motiv8: motiv8,
  "Harrison Digital": harrison,
};

function Verticals() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <>
      {/* HERO */}
      <div className="page-hero container text-center py-12">
        <h1 style={{ textAlign: "center", marginTop: "5px", color: "darkred" }}>
          Verticals
        </h1>

        <div className="section-title-wrap">
          <span className="section-title">The Group Portfolio</span>
        </div>

        <p className="vertical-page-intro">
          In the vibrant landscape of UAE's business arena, JSB Group founded in
          2015 has emerged as a dynamic conglomerate across multiple sectors
          including Distribution, Retail, F&B, Fitness, Technology, Interior
          Fitouts & Outdoor Furniture.
        </p>
      </div>

      {/* MODAL */}
      {selectedBrand && (
        <div
          className="brand-modal-overlay"
          onClick={() => setSelectedBrand(null)}
        >
          <div className="brand-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="brand-modal-close"
              onClick={() => setSelectedBrand(null)}
            >
              ×
            </button>

            <div className="brand-modal-logo">
              <img src={selectedBrand.logo} alt={selectedBrand.name} />
            </div>

            <p className="brand-modal-text">{selectedBrand.description}</p>

            <a
              href={selectedBrand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-card-btn"
            >
              Go to Brand Website
            </a>
          </div>
        </div>
      )}

      {/* CATEGORIES */}
      {verticals.map((cat, i) => (
        <section key={i} className="vertical-category">
          <div className="container">
            {/* TEXT */}
            <div className="vertical-content">
              <h2 className="vertical-heading">{cat.title}</h2>
              <p className="vertical-description">{cat.description}</p>
            </div>

            {/* BRANDS GRID */}
            <div className="vertical-brands-grid">
              {cat.items.map((brand, j) => (
                <div
                  key={j}
                  className="logo-card"
                  style={{ animationDelay: `${j * 0.07}s` }}
                  onClick={() =>
                    setSelectedBrand({
                      name: brand.name,
                      url: brand.link,
                      logo: logoMap[brand.name],
                      description: `${cat.description} ${cat.readMore}`,
                    })
                  }
                >
                  <div className="logo-card-img-wrap">
                    <img
                      src={logoMap[brand.name]}
                      alt={brand.name}
                      loading="lazy"
                    />
                  </div>

                  {/* ✅ BRAND NAME FIXED */}
                  <div className="logo-card-text">{brand.name}</div>
                </div>
              ))}
              <div className="vertical-readmore-box">
                <p>{cat.readMore}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Verticals;
