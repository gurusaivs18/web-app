 import { useState, useEffect } from "react";
import "../css/Hero.css";
import { useNavigate } from "react-router-dom";

// Change this path to your available image
import slide1 from "../assets/jsbGroupWebsite/1000d.jpg.jpeg";

// When the other images are ready, uncomment these and swap them into the array
import slide2 from "../assets/jsbGroupWebsite/1213.jpeg";
import slide3 from "../assets/jsbGroupWebsite/Banner_003.webp";

// Same image used 3 times for now
const slides = [slide1, slide2, slide3];
// Later: const slides = [slide1, slide2, slide3];

const AUTOPLAY_MS = 3000;

function Hero() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  // Re-runs on every slide change, so clicking a bar resets the timer
  useEffect(() => {
    const id = setTimeout(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => clearTimeout(id);
  }, [current]);

  return (
    <section className="hero">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero slide ${i + 1}`}
          className={`hero-img hero-slide ${i === current ? "active" : ""}`}
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
  onClick={() => setCurrent(i)}
/>
        ))}
      </div>
    </section>
  );
}

export default Hero;