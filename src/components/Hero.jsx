import { useState, useEffect } from "react";
import "../css/Hero.css";
import { useNavigate } from "react-router-dom";

import slide1 from "../assets/jsbGroupWebsite/1000d.jpg.jpeg";
import slide2 from "../assets/jsbGroupWebsite/1213.jpeg";
import slide3 from "../assets/jsbGroupWebsite/Banner_003.webp";
import slide4 from "../assets/jsbGroupWebsite/motiv8.jpeg";

const slides = [slide1, slide2, slide3, slide4];

const AUTOPLAY_MS = 3000;
const SLIDE_MS = 800; // must match animation-duration in Hero.css

function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [enterFrom, setEnterFrom] = useState(null); // "right" | "left" | null
  const [userPaused, setUserPaused] = useState(false); // pause button only
  const [ratio, setRatio] = useState("16 / 9"); // real ratio of the first slide

  const paused = userPaused;

  // Read the first image's real size so the mobile image box matches it
  // and nothing gets cropped.
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        setRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
      }
    };
    img.src = slides[0];
  }, []);

  const goTo = (next) => {
    if (next === current) return;
    // forward enters from the right, backward enters from the left
    const forward =
      next > current || (current === slides.length - 1 && next === 0);
    setEnterFrom(forward ? "right" : "left");
    setPrev(current);
    setCurrent(next);
  };

  // autoplay: re-arms on every change; stops only when paused
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(
      () => goTo((current + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(id);
  }, [current, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  // once the animation is done, drop the outgoing slide
  useEffect(() => {
    if (prev === null) return;
    const id = setTimeout(() => setPrev(null), SLIDE_MS);
    return () => clearTimeout(id);
  }, [prev]);

  const slideClass = (i) => {
    if (i === current) {
      return enterFrom ? `enter-from-${enterFrom}` : "active";
    }
    if (i === prev) {
      return `exit-to-${enterFrom === "right" ? "left" : "right"}`;
    }
    return "";
  };

  return (
    <section className="hero" style={{ "--slide-ratio": ratio }}>
      {/* Images + dots. Clipped so the slide animation never leaks. */}
      <div className="hero-media">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero slide ${i + 1}`}
            className={`hero-img hero-slide ${slideClass(i)}`}
          />
        ))}

        <div className="hero-indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className={`hero-indicator ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      {/* Headline left, copy + buttons right */}
      <div className="hero-content">
        <h1 className="hero-title">
          From <span className="red-box">Dreams</span> to{" "}
          <span className="red-box">Reality</span>
        </h1>

        <div className="hero-side">
          <p className="hero-subtitle">
            <strong>The Unstoppable Force of Purposeful Action.</strong> JSB Group doesn’t just build companies—we build ecosystems for growth, performance, and lifestyle innovation.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="hero-btn hero-btn-primary"
              onClick={() => navigate("/about")}
            >
              Know More
            </button>
            <button
              type="button"
              className="hero-btn hero-btn-secondary"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Play / pause */}
      <button
        type="button"
        className="hero-pause"
        aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
        onClick={() => setUserPaused((p) => !p)}
      >
        {userPaused ? (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <rect x="5" y="4" width="5" height="16" rx="1" fill="currentColor" />
            <rect x="14" y="4" width="5" height="16" rx="1" fill="currentColor" />
          </svg>
        )}
      </button>
    </section>
  );
}

export default Hero;
