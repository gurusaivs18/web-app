import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Verticals from "./pages/Verticals";
import Careers from "./pages/Careers";
import Impact from "./pages/Impact";
import Newsroom from "./pages/Newsroom";
import "./css/global.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/verticals" element={<Verticals />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
