import "../css/Verticals.css";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
import monkeyBox from "../assets/Brand-Logos/Monkey Box logo.webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";

import denaster from "../assets/Brand-Logos/Denaster Logo.webp";
import inov8 from "../assets/Brand-Logos/Inov8.webp";
import garmin from "../assets/Brand-Logos/Garmin Black Logo.webp";
import zeroG from "../assets/Brand-Logos/zerog arabic english-01 (3).webp";
import vipCosm from "../assets/Brand-Logos/VIP logo png.webp";
import bvb from "../assets/Brand-Logos/Artworks_BVB PRo League-15.webp";
import snap from "../assets/Brand-Logos/snap-fitness.webp";

const allBrandLogos = [
  { name: "UAE BULLS", logo: uaeBulls, url: "https://uaebulls.ae/" },
  { name: "Motiv8", logo: motiv8, url: "https://motiv8.ae/" },
  { name: "MONKEY BOX", logo: monkeyBox, url: "https://monkeybox.ai/" },
  { name: "PRESSMAN'S", logo: pressmans, url: "https://pressma.comns/" },
  {
    name: "VK TECHNOLOGIES",
    logo: vkTech,
    url: "https://vktechnologiesme.com/",
  },
  { name: "TARGET ONE", logo: targetOne, url: "https://targetoneme.com/" },
  { name: "NB VENTURES", logo: nbVentures, url: "https://nbventuresme.com/" },
];

const categories = [
  {
    title: "Distribution",
    brands: [
      { name: "Target One", logo: targetOne, url: "https://targetoneme.com/" },
      { name: "Denaster", logo: denaster, url: "https://www.denaster.com/" },
      { name: "Harrison / Inov8", logo: inov8, url: "https://www.inov8.ae/" },
      { name: "Garmin by Activ8", logo: garmin, url: "https://www.garmin.ae/" },
    ],
  },
  {
    title: "Retail",
    brands: [
      { name: "Motiv8", logo: motiv8, url: "https://motiv8.ae/" },
      {
        name: "Garmin by Activ8",
        logo: garmin,
        url: " https://www.garmin.ae/",
      },
      { name: "ZeroG Beds", logo: zeroG, url: "https://zerogmattress.ae/" },
      { name: "VIP Cosmetics", logo: vipCosm, url: null },
    ],
  },
  {
    title: "Technology",
    brands: [
      {
        name: "VK Technology",
        logo: vkTech,
        url: "https://vktechnologiesme.com/",
      },
    ],
  },
  {
    title: "Sports & Fitness",
    brands: [
      {
        name: "Snap Fitness",
        logo: snap,
        url: " https://www.snapfitness.com/ae",
      },
      { name: "U-Pro", logo: null, url: " https://unitedprosports.ae/dubai/" },
      { name: "UAE Bulls", logo: uaeBulls, url: "https://uaebulls.ae/" },
      { name: "BVB League", logo: bvb, url: " https://bvbpro.com/" },
    ],
  },
  {
    title: "Food & Beverage",
    brands: [
      {
        name: "Pressman's Sandwiches",
        logo: pressmans,
        url: "https://pressmans.com/",
      },
    ],
  },
  {
    title: "Fittings & Fitouts",
    brands: [
      { name: "Epic Fitouts", logo: null, url: " https://www.epicoutdoor.ae/" },
    ],
  },
  {
    title: "Venture Capitalist",
    brands: [
      {
        name: "NB Ventures",
        logo: nbVentures,
        url: "https://nbventuresme.com/",
      },
    ],
  },
];

function Verticals() {
  return (
    <>
      <div className="page-hero">
        <h1>Verticals</h1>
      </div>

      {/* ── ALL BRAND LOGOS ── */}
      <section className="section">
        <div className="container">
          <div className="verticals-logo-strip">
            {allBrandLogos.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="verticals-logo-item"
                aria-label={item.name}
              >
                <img src={item.logo} alt={item.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      {categories.map((cat, i) => (
        <section key={i} className="vertical-category">
          <div className="container">
            <div className="section-title-wrap">
              <span className="section-title">{cat.title}</span>
            </div>
            <div className="vertical-brands-grid">
              {cat.brands.map((brand, j) =>
                brand.logo ? (
                  /* ── Has a logo → render as image link ── */
                  <a
                    key={j}
                    href={brand.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verticals-logo-item"
                    aria-label={brand.name}
                  >
                    <img src={brand.logo} alt={brand.name} />
                  </a>
                ) : (
                  /* ── No logo file yet → styled text fallback ── */
                  <a
                    key={j}
                    href={brand.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vertical-brand-logo"
                  >
                    {brand.name}
                  </a>
                ),
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Verticals;
