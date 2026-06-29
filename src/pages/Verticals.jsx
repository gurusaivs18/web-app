import { useState, useEffect } from "react";
import "../css/Verticals.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { verticals } from "../data/verticals";

import uaeBulls from "../assets/Brand-Logos/uae-bulls.webp";
import motiv8 from "../assets/Brand-Logos/motiv8.webp";
import pressmans from "../assets/Brand-Logos/pressmans (2).webp";
import vkTech from "../assets/Brand-Logos/vanityKart.webp";
import targetOne from "../assets/Brand-Logos/target1.webp";
import denaster from "../assets/Brand-Logos/denaster.webp";
import inov8 from "../assets/Brand-Logos/inov8.webp";
import garmin from "../assets/Brand-Logos/garmin.webp";
import zeroG from "../assets/Brand-Logos/zeroG.webp";
import bvb from "../assets/Brand-Logos/bvb.webp";
import snap from "../assets/Brand-Logos/snapFitness.webp";
import vip from "../assets/Brand-Logos/vipcosmo.webp";
import harrison from "../assets/Brand-Logos/Harrison.webp";
import monkey from "../assets/Brand-Logos/monkeybox.webp";
import biriyani from "../assets/Brand-Logos/biriyani.webp";
import activ from "../assets/Brand-Logos/activ8.webp";
import ventures from "../assets/Brand-Logos/nbVentures.webp";
import yellowchilly from "../assets/Brand-Logos/yellow-chilly.webp";
import boosterjuice from "../assets/Brand-Logos/boosterjuice.webp";
import hongkong from "../assets/Brand-Logos/hongkong.webp";
import pizza from "../assets/Brand-Logos/pizza-tales.webp";
import kichdi from "../assets/Brand-Logos/kichdi-tales.webp";
import thalitales from "../assets/Brand-Logos/thali-tales.webp";
import beijing from "../assets/Brand-Logos/beijing-lu.webp";
import epic from "../assets/Brand-Logos/epicfitouts.webp";
import upro from "../assets/Brand-Logos/upro.webp";
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
  "United Pro Sports (U-Pro)": upro,
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
const getId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
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
  "United Pro Sports (U-Pro)",
];

function Verticals() {
  useScrollReveal();
  const [selectedBrand, setSelectedBrand] = useState(null);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setSelectedBrand(null);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
              <div className="logo-card-img-wrap">
                <img src={logoMap[name]} alt={name} data-brand={name} />
              </div>
              <div className="logo-card-text">{name}</div>
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
              <img
                src={selectedBrand.logo}
                alt={selectedBrand.name}
                data-brand={selectedBrand.name}
              />{" "}
              <h3 className="brand-modal-title">{selectedBrand.name}</h3>
            </div>
            <p className="brand-modal-text">{selectedBrand.description}</p>
            <a
              href={selectedBrand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-card-btn"
              onClick={() => setSelectedBrand(null)}
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
          id={getId(cat.title)}
          className={`vertical-category${i === 0 ? " vertical-category--first" : ""}`}
        >
          <h2 className="vertical-heading">{cat.title}</h2>
          <div className="container">
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
                      data-brand={brand.name}
                    />
                  </div>
                  <div className="logo-card-text">{brand.name}</div>
                </div>
              ))}
            </div>

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
