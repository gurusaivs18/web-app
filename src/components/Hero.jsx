import { useState, useEffect, useRef } from "react";
import "../css/Hero.css";
import { useNavigate } from "react-router-dom";

import slide1 from "../assets/jsbGroupWebsite/1000d.jpg.jpeg";
import slide2 from "../assets/jsbGroupWebsite/1213.jpeg";
import slide3 from "../assets/jsbGroupWebsite/Banner_003.webp";

const slides = [slide1, slide2, slide3];

const AUTOPLAY_MS = 3000;
const SLIDE_MS = 800; // must match the animation duration in Hero.css

function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [enterFrom, setEnterFrom] = useState(null); // "right" | "left" | null
  const moves = useRef(0);

  const goTo = (next) => {
    if (next === current) return;
    moves.current += 1;
    // odd moves enter from the right, even moves from the left
    setEnterFrom(moves.current % 2 === 1 ? "right" : "left");
    setPrev(current);
    setCurrent(next);
  };

  // autoplay: re-arms on every change, so clicking a dot resets the timer
  useEffect(() => {
    const id = setTimeout(
      () => goTo((current + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(id);
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps

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
      // enters from right -> old one leaves left, and vice versa
      return `exit-to-${enterFrom === "right" ? "left" : "right"}`;
    }
    return "";
  };

  return (
    <section className="hero">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero slide ${i + 1}`}
          className={`hero-img hero-slide ${slideClass(i)}`}
        />
      ))}

      <div className="hero-content">
        <h1 className="hero-title">
          From <span className="red-box">Dreams</span> to{" "}
          <span className="red-box">Reality</span>
        </h1>
        <p className="hero-subtitle">
          The Unstoppable Force of Purposeful Action
        </p>

        <button className="hero-btn" onClick={() => navigate("/about")}>
          Know More
        </button>
      </div>

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
    </section>
  );
}

export default Hero;