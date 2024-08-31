import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Expertise from "./components/Expertise";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import CricketPage from "./components/CricketPage";
import FootballPage from "./components/FootballPage";
import HandballPage from "./components/HandballPage";
import TennisPage from "./components/TennisPage";
import KabaddiPage from "./components/KabaddiPage";
import AthleticsPage from "./components/AthleticsPage";
import Footer from "./components/Footer";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 550);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Router>
      <Header className={scrolled ? "header-scrolled" : ""} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={ <><HeroSection/><AboutSection/><FeaturedProjects/><Expertise/><Clients/><Testimonials/><Contact/></>} />
          <Route path="/cricket" element={<CricketPage/>} />
          <Route path="/football" element={<FootballPage/>} />
          <Route path="/handball" element={<HandballPage/>} />
          <Route path="/tennis" element={<TennisPage/>} />
          <Route path="/kabaddi" element={<KabaddiPage/>} />
          <Route path="/athletics" element={<AthleticsPage/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;