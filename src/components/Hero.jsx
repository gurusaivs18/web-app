import "../css/Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/jsbGroupWebsite/assets-jsb3.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-img" />

      <div className="hero-content">
        <h1 style={{ color: "white" }}>From Dreams to Reality</h1>
        <p style={{ color: "white" }}>
          The Unstoppable Force of Purposeful Action
        </p>

        <button className="btn" onClick={() => navigate("/verticals")}>
          Know More
        </button>
      </div>
    </section>
  );
}

export default Hero;
