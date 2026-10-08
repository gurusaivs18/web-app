import "../css/Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/jsbGroupWebsite/hero_banner_video.mp4";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <video src={heroImage} alt="Hero" className="hero-img" autoPlay muted loop />

      <div className="hero-content">
        <div className="hero-circle-wrap">


          <div className="hero-circle">
            <h1 className="hero-title">
              From <span className="red-box">Dreams</span> to{" "}
              <span className="red-box">Reality</span>
            </h1>
            <p className="hero-subtitle">
              The Unstoppable Force of Purposeful Action
            </p>
          </div>
        </div>

        <button className="hero-btn" onClick={() => navigate("/about")}>
          Know More
        </button>
      </div>
    </section>
  );
}

export default Hero;
