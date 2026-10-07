// import "../css/Hero.css";
// import { useNavigate } from "react-router-dom";
// import heroImage from "../assets/jsbGroupWebsite/1006.mp4";

// function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section className="hero">
//         <video
//         src={heroImage}
//         className="hero-img"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//       />

//       <div className="hero-content">
   

//         <button className="hero-btn" onClick={() => navigate("/about")}>
//           Know More
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import "../css/Hero.css";
// import { useNavigate } from "react-router-dom";
import heroImage from "../assets/jsbGroupWebsite/1006.mp4";

function Hero() {
  // const navigate = useNavigate();

  return (
    <section className="hero">
      <video
        src={heroImage}
        className="hero-img"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
{/* 
      <div className="hero-content">
        <button
          className="hero-btn"
          onClick={() => navigate("/about")}
        >
          Know More
        </button>
      </div> */}
    </section>
  );
}

export default Hero;