import { useState } from "react";
import "../css/Verticals.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { verticals } from "../data/verticals";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8.webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo.webp";
import vkTech from "../assets/Brand-Logos/Vanity Kart Logo English-01.webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";

import denaster from "../assets/Brand-Logos/Denaster Logo.webp";
import inov8 from "../assets/Brand-Logos/Inov8.webp";
import garmin from "../assets/Brand-Logos/Garmin-Logo-new.png";
import zeroG from "../assets/Brand-Logos/Zero-G-new.jpg";
import bvb from "../assets/Brand-Logos/Artworks_BVB PRo League-15.webp";
import snap from "../assets/Brand-Logos/logo-01 (2).webp";
import vip from "../assets/Brand-Logos/VIP logo png.webp";
import harrison from "../assets/Brand-Logos/Harrison Digital.webp";
import monkey from "../assets/Brand-Logos/Monkey Box logo.png";
import biriyani from "../assets/Brand-Logos/biryani logo 1080x1080.webp";
import activ from "../assets/Brand-Logos/Activ8 Logo.webp";

import ventures from "../assets/Brand-Logos/NB VENTURES Logo-02.webp";

// --hiii--
import yellowchilly from "../assets/Brand-Logos/tyc logo.webp";
import boosterjuice from "../assets/Brand-Logos/Booster Juice Final Logo.webp";
import hongkong from "../assets/Brand-Logos/HK Logo  English.webp";
import pizza from "../assets/Brand-Logos/pizza tales-03.webp";
import kichdi from "../assets/Brand-Logos/khichdi tales.webp";
import thalitales from "../assets/Brand-Logos/thali tales-01.webp";
import beijing from "../assets/Brand-Logos/Beijing Lu Logo.webp";
import epic from "../assets/Brand-Logos/epicfitout1.png";
const logoMap = {
  "Pressman's Sandwiches": pressmans,
  "Biriyani Box": biriyani,
  "Target One": targetOne,
  "VIP Cosmetics": vip,
  Denaster: denaster,
  "Monkey Box": monkey,
  "Harrison / Inov8": inov8,
  "Harrison Digital": harrison,
  "Garmin by Activ8": garmin,
  Activ8: activ,
  Motiv8: motiv8,
  "ZeroG Beds & Mattresses": zeroG,
  "Snap Fitness": snap,
  "United Pro Sports (U-Pro)": null,
  "UAE Bulls": uaeBulls,
  "BVB League": bvb,
  "VK Technology": vkTech,
  "Nb Ventures": ventures,
  "Yellow Chilli": yellowchilly,
  "Hong Kong": hongkong,
  "kichdi Tales": kichdi,
  "Pizza Tales": pizza,
  "Thali Tales": thalitales,
  "beijing Lu": beijing,
  "Booster Juice": boosterjuice,
  "Epic Fitouts": epic,
};

const featuredBrands = [
  "Nb Ventures",
  "VK Technology",
  "Denaster",
  "Target One",
  "Motiv8",
  "Harrison / Inov8",
  "Activ8",
  "Pressman's Sandwiches",
  "Snap Fitness",
];

function Verticals() {
  useScrollReveal();

  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <>
      {/* HERO */}
      <div className="page-hero container text-center py-12" data-reveal="fade">
        <h1>Verticals</h1>
      </div>

      {/* FEATURED BRANDS */}
      <div className="featured-logos-section container">
        <div className="section-title-wrap" data-reveal="fade">
          <span className="section-title">The Group Portfolio</span>
        </div>

        <h2 className="featured-title" data-reveal="fade" data-delay="100">
          Featured Brands
        </h2>

        <div className="featured-logos-grid">
          {featuredBrands.map((name, i) => (
            <div
              key={i}
              className="featured-logo-card"
              data-reveal="up"
              data-delay={String((i % 3) * 150 + 100)}
              onClick={() =>
                setSelectedBrand({
                  name,
                  url: verticals
                    .flatMap((v) => v.items)
                    .find((b) => b.name === name)?.link,
                  logo: logoMap[name],
                  description:
                    verticals
                      .flatMap((v) => v.items)
                      .find((b) => b.name === name)?.description || "",
                })
              }
            >
              <img src={logoMap[name]} alt={name} />
              <span>{name}</span>
            </div>
          ))}
        </div>

        <p className="vertical-page-intro" data-reveal="up" data-delay="150">
          In the vibrant landscape of UAE's business arena, JSB Group founded in
          2015 has emerged as a dynamic conglomerate across multiple sectors
          including Distribution, Retail, F&B, Fitness, Technology, Interior
          Fitouts &amp; Outdoor Furniture.
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
              <h3 className="brand-modal-title">{selectedBrand.name}</h3>
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
        <section
          key={i}
          className={`vertical-category${i === 0 ? " vertical-category--first" : ""}`}
        >
          {" "}
          <h2 className="vertical-heading">{cat.title}</h2>
          <div className="container">
            {/* logos first */}
            <div className="vertical-brands-grid">
              {cat.items.map((brand, j) => (
                <div
                  key={j}
                  className="logo-card"
                  data-reveal="up"
                  data-delay={String((j % 4) * 120 + 100)}
                  onClick={() =>
                    setSelectedBrand({
                      name: brand.name,
                      url: brand.link,
                      logo: logoMap[brand.name],
                      description: brand.description,
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
                  <div className="logo-card-text">{brand.name}</div>
                </div>
              ))}
            </div>

            {/* description below */}
            <div className="vertical-content" data-reveal="up" data-delay="100">
              <p className="vertical-description">{cat.description}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Verticals;
