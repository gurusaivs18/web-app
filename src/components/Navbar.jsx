import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // SHOW / HIDE NAVBAR
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const links = [
    { to: "/about", label: "ABOUT US" },
    { to: "/pillars", label: "PILLARS" },
    { to: "/verticals", label: "VERTICALS" },
    { to: "/impact", label: "IMPACT" },
    { to: "/careers", label: "CAREERS" },
    { to: "/newsroom", label: "NEWSROOM" },
  ];

  const handleNav = (to) => {
    setMenuOpen(false);

    if (to === "/pillars") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById("pillars");

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);

      return;
    }

    navigate(to);
  };

  // CLOSE MENU OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // NAVBAR SHOW/HIDE ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      // ALWAYS SHOW AT TOP
      if (window.scrollY < 40) {
        setShowNavbar(true);
        setLastScrollY(window.scrollY);
        return;
      }

      // SCROLL DOWN → HIDE
      if (window.scrollY > lastScrollY + 10) {
        setShowNavbar(false);
      }

      // SCROLL UP → SHOW
      else if (window.scrollY < lastScrollY - 10) {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "nav-show" : "nav-hide"}`}>
      <div className="nav-container">
        <Link className="logo-link" to="/" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        <div ref={menuRef}>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <span
                  onClick={() => handleNav(to)}
                  className={location.pathname === to ? "active" : ""}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
