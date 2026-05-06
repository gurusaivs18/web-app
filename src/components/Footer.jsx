import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import "../css/Footer.css";
import Logo from "./Logo";

function Footer() {
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
                <Link to="/about">Team</Link>
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
            <ul>
              <li>
                <a
                  href="https://www.snapfitness.com/ae"
                  target="_blank"
                  rel="noreferrer"
                >
                  Snap Fitness
                </a>
              </li>
              <li>
                <a
                  href="https://nbventuresme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  NB Venture
                </a>
              </li>
              <li>
                <a
                  href="https://vktechnologiesme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vanity Kart
                </a>
              </li>
              <li>
                <a
                  href="https://pressmans.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pressmans
                </a>
              </li>
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
