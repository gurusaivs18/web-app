import "../css/Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/jsbGroupWebsite/assets-jsb3.webp";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-img" />

      <div className="hero-content">
        <h1 className="hero-title">
          From <span className="red-box">Dreams</span>
          <br className="hero-break" /> to{" "}
          <span className="red-box">Reality</span>
        </h1>
        <p className="hero-subtitle">
          The Unstoppable Force of Purposeful Action
        </p>

        <button className="hero-btn" onClick={() => navigate("/about")}>
          Know More
        </button>
      </div>
    </section>
  );
}

export default Hero;
