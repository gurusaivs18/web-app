// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import "../css/Footer.css";
// import Logo from "./Logo";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-top">
//           {/* Address */}
//           <div className="footer-col footer-address">
//             <div className="footer-logo">
//               <Logo />
//             </div>
//             <p>Office Location:</p>
//             <p>Oaks Liwa Heights Office Tower </p>
//             <p> 24th Floor, 2404</p>
//             <p>Cluster W, JLT</p>
//             <p>Dubai, UAE</p>
//             <p>050-6785243</p>
//           </div>

//           {/* Company Links */}
//           <div className="footer-col">
//             <h4>Company</h4>
//             <ul>
//               <li>
//                 <Link to="/about">About us</Link>
//               </li>
//               <li>
//                 <Link to="/about">Team</Link>
//               </li>
//               <li>
//                 <Link to="/verticals">Service</Link>
//               </li>
//               <li>
//                 <Link to="/careers">Career</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact us</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links (External → New Tab) */}
//           <div className="footer-col">
//             <h4>Quick Links</h4>
//             <ul>
//               <li>
//                 <a
//                   href="https://www.snapfitness.com/ae"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Snap Fitness
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://nbventuresme.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   NB Venture
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://vktechnologiesme.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Vanity Kart
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://pressmans.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Pressmans
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div className="footer-col">
//             <h4>Follow Us</h4>
//             <div className="footer-social">
//               {/* <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaFacebookF />
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//               </a> */}
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="footer-bottom">
//           <p>© {new Date().getFullYear()} JSB Group. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../css/Footer.css";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Address */}
          <div className="footer-col footer-address">
            <Logo />

            <p>Office Location:</p>
            <p>Oaks Liwa Heights Office Tower</p>
            <p>24th Floor, 2404</p>
            <p>Cluster W, JLT</p>
            <p>Dubai, UAE</p>
            <p>050-6785243</p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/about">Team</Link>
              </li>
              <li>
                <Link to="/verticals">Service</Link>
              </li>
              <li>
                <Link to="/careers">Career</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
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

          {/* Social */}
          <div className="footer-col">
            <h4>Follow Us</h4>

            <div className="footer-social">
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} JSB Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
