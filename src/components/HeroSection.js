import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center relative" id="heroSection">
      <video
        className="top-0 left-0 min-w-full max-h-full md:w-auto md:h-screen object-cover"
        autoPlay
        loop
        muted
        preload="metadata" 
        loading="lazy"
      >
        <source srcSet="./videos/HERO-720p.mp4 720w, ./videos/HERO-1080p.mp4 1080w" type="video/mp4" />
        <source src="./videos/HERO.mp4" type="video/mp4" />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="./images/hero-fallback.jpg"
          alt="Hero section background"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;
