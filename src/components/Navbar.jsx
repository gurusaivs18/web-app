import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const links = [
    { to: "/about", label: "ABOUT US" },
    { to: "/verticals", label: "VERTICALS" },
    { to: "/impact", label: "IMPACT" },
    { to: "/careers", label: "CAREERS" },
    { to: "/newsroom", label: "NEWSROOM" },
  ];

  // ✅ Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="logo-link" to="/" onClick={() => setMenuOpen(false)}>
          <Logo />
        </Link>

        {/* ✅ Wrap hamburger + menu together */}
        <div ref={menuRef}>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-menu${menuOpen ? " open" : ""}`}>
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={location.pathname === to ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
