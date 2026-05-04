import "../css/Verticals.css";

import uaeBulls from "../assets/Brand-Logos/UAE bulls-2025.webp";
import motiv8 from "../assets/Brand-Logos/Motiv8 (4).webp";
import pressmans from "../assets/Brand-Logos/Pressmans logo (11).webp";
import vkTech from "../assets/Brand-Logos/VKTECHNOLOGIES LOGO (3).webp";
import nbVentures from "../assets/Brand-Logos/NB VENTURES Logo-02 (3).webp";
import targetOne from "../assets/Brand-Logos/targetone.webp";
import denaster from "../assets/Brand-Logos/Denaster Logo.webp";

const categories = [
  {
    title: "All Verticals",
    brands: [
      { name: "UAE Bulls", logo: uaeBulls, url: "https://uaebulls.ae/" },
      { name: "Motiv8", logo: motiv8, url: "https://motiv8.ae/" },
      { name: "Pressmans", logo: pressmans, url: "https://pressmans.com/" },
      { name: "VK Tech", logo: vkTech, url: "https://vktechnologiesme.com/" },
      {
        name: "NB Ventures",
        logo: nbVentures,
        url: "https://nbventuresme.com/",
      },
      { name: "Target One", logo: targetOne, url: "https://targetoneme.com/" },
      { name: "Denaster", logo: denaster, url: "https://www.denaster.com/" },
    ],
  },
];

function Verticals() {
  return (
    <>
      <div className="page-hero">
        <h1>Verticals</h1>
      </div>

      {categories.map((cat, i) => (
        <section key={i} className="vertical-category">
          <div className="container">
            <div className="section-title-wrap">
              <span className="section-title">{cat.title}</span>
            </div>

            <div className="logo-grid">
              {cat.brands.map((brand, j) => (
                <a
                  key={j}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-frame"
                >
                  <img src={brand.logo} alt={brand.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Verticals;
