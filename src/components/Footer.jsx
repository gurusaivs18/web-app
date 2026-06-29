import { Link, useNavigate } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import "../css/Footer.css";
import Logo from "./Logo";
import { verticals } from "../data/verticals";
function Footer() {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    navigate("/verticals", { state: { scrollTo: id } });

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300); // important delay for render
  };
  const getId = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TOP */}
        <div className="footer-grid">
          {/* ADDRESS */}
          <div className="footer-col footer-about">
            <Logo />

            <p className="muted">Office Location:</p>
            <p>Oaks Liwa Heights Office Tower</p>
            <p>24th Floor, 2404</p>
            <p>Cluster W, JLT</p>
            <p>Dubai, UAE</p>
            <p className="highlight">050-6785243</p>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link
                  to="/#pillars"
                  onClick={() => {
                    setTimeout(() => {
                      document
                        .getElementById("pillars")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link to="/verticals">Services</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>

            <ul className="quick-links-list">
              {verticals.map((section, i) => (
                <li key={`${section.title}-${i}`}>
                  <button onClick={() => handleScroll(getId(section.title))}>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-col">
            <h4>Follow Us</h4>

            <div className="socials">
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JSB Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
