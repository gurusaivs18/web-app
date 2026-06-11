// import "../css/Careers.css";
// import "../css/ScrollReveal.css";
// import { useScrollReveal } from "../hooks/useScrollReveal";
// import { Link } from "react-router-dom";
// const perks = [
//   {
//     title: "Growth & Development",
//     desc: "Continuous learning opportunities across diverse sectors and global markets.",
//     icon: (
//       <svg viewBox="0 0 24 24">
//         <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Innovation Culture",
//     desc: "Work in an environment that champions creativity, new ideas, and entrepreneurial thinking.",
//     icon: (
//       <svg viewBox="0 0 24 24">
//         <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Diverse Environment",
//     desc: "Join a multicultural team spread across multiple industries and geographies.",
//     icon: (
//       <svg viewBox="0 0 24 24">
//         <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
//       </svg>
//     ),
//   },
// ];

// function Careers() {
//   useScrollReveal();

//   return (
//     <>
//       <div className="page-hero" data-reveal="fade">
//         <h1>Careers</h1>
//       </div>

//       <section className="section">
//         <div className="container">
//           <div className="section-title-wrap" data-reveal="fade">
//             <span className="section-title">Careers at JSB Group</span>
//           </div>

//           <p
//             data-reveal="up"
//             data-delay="150"
//             style={{
//               textAlign: "center",
//               maxWidth: 640,
//               margin: "0 auto 48px",
//               fontSize: 14,
//               color: "var(--text-mid)",
//               lineHeight: 1.85,
//             }}
//           >
//             We are always looking for talented individuals who want to grow with
//             us. Join a company built on innovation, leadership, and impact —
//             spanning F&B, Retail, Technology, Fitness, and more across the UAE.
//           </p>

//           <div className="careers-perks">
//             {perks.map((p, i) => (
//               <div
//                 key={i}
//                 className="perk-card"
//                 data-reveal="up"
//                 data-delay={String(i * 150 + 100)}
//               >
//                 <div className="perk-icon">{p.icon}</div>
//                 <h3>{p.title}</h3>
//                 <p>{p.desc}</p>
//               </div>
//             ))}
//           </div>

//           <div className="careers-cta" data-reveal="up" data-delay="200">
//             <h2>Join Our Team</h2>
//             <p>
//               We are always on the lookout for passionate, driven individuals
//               who want to make a real difference.
//             </p>
//             <Link to="/contact" className="btn btn--white">
//               CONTACT US
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Careers;

import "../css/Careers.css";
import "../css/ScrollReveal.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";
const perks = [
  {
    title: "General Inquiries",
    desc: "Have a question about our businesses, services, or operations? Our team is ready to provide the information and support you need.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
      </svg>
    ),
  },
  {
    title: "Partnership Opportunities",
    desc: "Interested in collaborating with JSB Group? We are always open to exploring strategic partnerships that drive innovation, growth, and long-term value.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M8 12l3 3a2 2 0 0 0 3 0l5-5" />
        <path d="M3 10l4-4 4 4" />
        <path d="M17 6l4 4-4 4" />
      </svg>
    ),
  },
  {
    title: "Strategic Partnerships",
    desc: "Explore opportunities to collaborate with a group committed to innovation, excellence, and sustainable growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v6" />
        <path d="M12 13L6.5 18" />
        <path d="M12 13L17.5 18" />
      </svg>
    ),
  },
  {
    title: "Connect With Our Team",
    desc: "We value meaningful connections and welcome conversations that inspire growth, collaboration, and positive impact. Contact our team for inquiries, partnerships, or any information about JSB Group and its diverse ventures.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
        <path d="M4 10a2 2 0 1 0 0-4" />
        <path d="M20 10a2 2 0 1 1 0-4" />
      </svg>
    ),
  },
  {
    title: "Support & Assistance",
    desc: "Our team is available to answer questions and guide you to the right point of contact for your needs.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
];

function Careers() {
  useScrollReveal();

  return (
    <>
      <div className="page-hero" data-reveal="fade">
        <h1>Careers</h1>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-title-wrap" data-reveal="fade">
            <span className="section-title">Careers at JSB Group</span>
          </div>

          <div className="careers-perks">
            {perks.map((p, i) => (
              <div
                key={i}
                className="perk-card"
                data-reveal="up"
                data-delay={String(i * 150 + 100)}
              >
                <div className="perk-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="careers-cta" data-reveal="up" data-delay="200">
            <h2>Let's Start a Conversation </h2>
            <p>
              {" "}
              We welcome inquiries from individuals, businesses, partners, and
              stakeholders who would like to connect with us. Whether you're
              exploring collaboration
            </p>
            <Link to="/contact" className="btn btn--white">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
