import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import Expertise from "./components/Expertise";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import AboutSection from "./components/About";

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 550); // Adjust as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header className={scrolled ? "header-scrolled" : ""} />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <Expertise />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
