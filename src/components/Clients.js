import React, { useEffect, useRef } from "react";

const logos = [
  { src: "./images/ICC.png", alt: "ICC", name: "ICC" },
  { src: "./images/sony.png", alt: "SONY", name: "SONY" },
  { src: "./images/jio.png", alt: "Jio", name: "Jio" },
  { src: "./images/Rise.png", alt: "Rise", name: "Rise" },
  /*{ src: "./images/Hotstar.png", alt: "Hotstar", name: "Hotstar" },
  { src: "./images/star_sport.png", alt: "Star Sport", name: "Star Sport" },
  { src: "./images/khelo_india.png", alt: "Khelo India", name: "Khelo India" }*/,
];

const HorizontalScrollSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1; 
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", stopAutoScroll);
      scrollContainer.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <div className="scroll-section bg-primary-light">
      <h2 className="font-Oswald text-3xl font-bold mb-4 text-center text-white">Our Clients</h2>
      <div className="scroll-container" ref={scrollContainerRef}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="logo-item border border-blue-300">
            <img loading="lazy" src={logo.src} alt={logo.alt} className="logo-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
