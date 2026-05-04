import "../css/Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/jsbGroupWebsite/jsbgroupwebsite-02.webp";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-img" />

      <div className="hero-content">
        <h1>From Dreams to Reality</h1>
        <p>The Unstoppable Force of Purposeful Action</p>

        <button className="btn" onClick={() => navigate("/verticals")}>
          Know More
        </button>
      </div>
    </section>
  );
}

export default Hero;
